define(['jquery','common','nprogress','template'], function($,undefined,nprogress,template) {

    nprogress.done();

    // 讲师列表数据缓存
    var treacherListCache;
    try{
        treacherListCache = JSON.parse(localStorage.getItem('treacherListCache'));
    }catch(e){
    };
    //如果存在缓存数据，优先使用缓存数据，没有则发送ajax后缓存数据
    if(treacherListCache){
        var html = template('teacher-list-tpl', {list: treacherListCache});
        $('#teacher-list-tbody').html(html);
    }else {
        $.get('/v6/teacher',function(data){
            if(data.code==200){
                var html = template('teacher-list-tpl', {list: data.result});
                $('#teacher-list-tbody').html(html);
            }
        });
    }

    //渲染讲师列表


    // 通过事件委托的方式给动态生成的a标签绑定点击事件，
    // 然后获取讲师详细信息并展示。    查看讲师
    //事件委托机制，找到他的父元素，中间是委托给谁的意思，就是给那个a委托teacher-view
    $('#teacher-list-tbody').on('click','.teacher-view',function(){
        $.get('/v6/teacher/view', {
            tc_id: $(this).parent().attr('data-id')
        }, function(data) {
            if(data.code == 200) {
                var html = template('teacher-view-tpl', data.result);
                $('#teacherModal').html(html);
            }
        });
    });

    //教师页面的 注销  讲师状态修改
    $('#teacher-list-tbody').on('click','.teacher-status',function(){
        var $self = $(this);
        $.ajax({
            url:'/v6/teacher/handle',
            type:'post',
            data:{
                tc_id: $(this).parent().attr('data-id'),
                tc_status: $(this).parent().attr('data-status')
            },
            success:function(data) {
                if (data.code == 200) {
                    // 得到修改后的状态，使用该状态修改按钮名称&父元素的data-status属性值
                    $self.html(data.result.tc_status == 0 ? '开 启' : '注 销');
                    $self.parent().attr('data-status', data.result.tc_status);
                }
            }
        });

    });
});

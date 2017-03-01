/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery','jqueryCookie','nprogress'], function($,undefind,nprogress) {
    /**
     * 展示用户的历史登陆头像：
     * 1、获取userInfo这个cookie值
     * 2、把cookie字符串转化为对象
     * 3、设置登陆页的img-src为对象中的tc_avatar属性值，如果没有给一个默认头像的地址
     */
    var userInfo = null;
    try{
        userInfo = JSON.parse($.cookie('userInfo'))
    }catch(e){
        userInfo = {}
    }
    $('.login .avatar img').attr('src', userInfo.tc_avatar? userInfo.tc_avatar: '/img/default.png');


    /*
     * 1、先监听form表单的提交事件，
     * 2、事件回调中return false阻止默认的提交
     * 3、事件回调中通过ajax的方式发送表单数据
     * 4、如果返回结果中的code为200，证明登陆成功，跳转到首页
     * */
    $('#form_login').on('submit', function () {

        $.ajax({
            url:'/v6/login',
            type:'post',
            data:$(this).serialize(),
            success:function(data){
                if(data.code===200){
                    //通过cookie方式来存储cookie信息
                    $.cookie('userInfo',JSON.stringify(data.result),{path:'/'});
                    location.href='/'
                }
            },
            error:function(){

            }
        })
        return false;
    })

    nprogress.done();
});

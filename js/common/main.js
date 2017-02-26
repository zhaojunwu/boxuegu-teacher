/**
 * Created by Administrator on 2017/2/25.
 */
requirejs.config({
    baseUrl:'/',

    paths:{
        //第三方的库
        jquery:'/lib/jquery/jquery.min',
        bootstrap:'/lib/bootstrap/js/bootstrap.min',
        jqueryCookie:'/lib/jquery-cookie/jquery.cookie',

        //自己写的
        common:'js/common/common',
        userList:'/js/user/list',
        userProfile:'/js/user/profile',
        teacherList:'/js/teacher/list',
        teacherAdd:'/js/teacher/add',
        homeLogin:'/js/home/login',
        homeRepass:'/js/home/repass',
        homeSettings:'/js/home/settings',
        couresAdd:'/js/coures/add',
        couresAdd_step1:'/js/coures/add_step1',
        couresAdd_step2:'/js/coures/add_step2',
        couresAdd_step3:'/js/coures/add_step3',
        couresCategory:'/js/coures/category',
        couresCategory_add:'/js/coures/category_add',
        couresList:'/js/coures/list',
        couresTopic:'/js/coures/topic'

    },

    shim:{
        bootstrap:{
            deps:['jquery']
        }

    }
})

require(['jquery','bootstrap','common']);

/*
 *这里获取页面的pathname，然后对应的加载js。
 * */
(function(window) {

    var pathname = window.location.pathname;

    /**
     * 判断登陆状态:
     *
     * 1、登陆页
     * 1.1、没有SESSID，不用管
     * 1.2、有SESSID，跳转到首页
     *
     * 2、其它页
     * 2.1、没有SESSID，跳转到登陆页
     * 2.2、有SESSID，不用管
     */
    require(['jquery','jqueryCookie'],function($,undefined){
        var sessID = $.cookie('PHPSESSID');
        // 登陆状态前端效验
        if(pathname=='/html/home/login.html' && sessID){
            location.href = '/';
        }else if (pathname !=='/html/home/login.html' && !sessID){
            location.href= '/html/home/login.html';
        }

        switch(pathname) {
            case '/html/user/list.html':
                require(['userList']);
                break;
            case '/html/user/profile.html':
                require(['userProfile']);
                break;
            case '/html/teacher/add.html':
                require(['teacherAdd']);
                break;
            case '/html/teacher/list.html':
                require(['teacherList']);
                break;
            case '/html/home/login.html':
                require(['homeLogin']);
                break;
            case '/html/home/repass.html':
                require(['homeRepass']);
                break;
            case '/html/home/settings.html':
                require(['homeSettings']);
                break;

            case '/html/coures/add.html':
                require(['couresAdd']);
                break;
            case '/html/coures/add_step1.html':
                require(['couresAdd_step1']);
                break;
            case '/html/coures/add_step2.html':
                require(['couresAdd_step2']);
                break;
            case '/html/coures/add_step3.html':
                require(['couresAdd_step3']);
                break;
            case '/html/coures/category.html':
                require(['couresCategory']);
                break;
            case '/html/coures/category_add.html':
                require(['couresCategory_add']);
                break;
            case '/html/coures/list.html':
                require(['couresList']);
                break;
            case '/html/coures/topic.html':
                require(['couresTopic']);
                break;
        }

    });

})(window);
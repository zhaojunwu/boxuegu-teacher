/**
 * Created by Administrator on 2017/2/25.
 */
requirejs.config({
    baseUrl:'/',

    paths:{
        //第三方的库
        jquery:'/lib/jquery/jquery.min',
        bootstrap:'/lib/bootstrap/js/bootstrap.min',

        //自己写的
        userList:'/js/user/list',
        userProfile:'/js/user/profile',
        teacherList:'/js/teacher/list',
        teacherAdd:'/js/teacher/add',
        homeLogin:'/js/home/repass',
        homeRepass:'/js/home/login',
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

require(['jquery','bootstrap']);

/*
 *这里获取页面的pathname，然后对应的加载js。
 * */
(function(window) {

    var pathname = window.location.pathname;
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


})(window);
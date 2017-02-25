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
        homerepass:'/js/home/login',
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
    }


})(window);
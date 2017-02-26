/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery'], function($) {

    $('#form_login').on('submit', function () {

        $.ajax({
            url:'/v6/login',
            type:'post',
            data:$(this).serialize(),
            success:function(data){
                if(data.code===200){
                    location.href='/'
                }
            },
            error:function(){

            }
        })
        return false;
    })

});

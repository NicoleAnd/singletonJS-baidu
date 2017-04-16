/**
 * 单例模式
 * 登录页面-->更多产品&设置
 */
var login_moreproduct = {
    init: function(argument) {
        var me = this;
        me.render();
        me.bind();
    },
    render: function() {
        var me = this;
        me.MPmouseover = $('.more');
        me.Dmouseleave = $('.details');
        me.DAmouseover = $('.details a[title=na]');
        me.DAmouseleave = $('.details a[title=na]');
        me.Set_navMouseover = $('.baidu-nav');
        me.Set_setMouseleave = $('.baidu-setting');
        me.Set_aMouseover = $('.baidu-setting a[title=navv]');
        me.Set_aMouseleave = $('.baidu-setting a[title=navv]');
    },
    bind: function() {
        var me = this;
        me.MPmouseover.mouseover(function() {
            $('.details').css('display', 'block');
        });
        me.Dmouseleave.mouseleave(function() {
            $(this).css('display', 'none');
        });
        me.DAmouseover.mouseover(function() {
            $(this).css('text-decoration', 'underline');
        });
        me.DAmouseleave.mouseleave(function() {
            $(this).css('text-decoration', 'none');
        });
        me.Set_navMouseover.mouseover(function() {
            $('.baidu-setting').css('display', 'block');
        });
        me.Set_setMouseleave.mouseleave(function() {
            $(this).css('display', 'none');
        });
        me.Set_aMouseover.mouseover(function() {
            $(this).css({ 'color': '#fff', 'background-color': '#3385ff' });
        });
        me.Set_aMouseleave.mouseleave(function() {
            $(this).css({ 'color': '#333', 'background-color': '#fff' });
        });
    }
};
/**
 * 单例模式
 * 登录页面-->输入框&弹框&按钮
 */
var login_input_btn = {
    init: function(argument) {
        var me = this;
        me.render();
        me.bind();
    },
    render: function() {
        var me = this;
        me.InputFocus = $('.input_class');
        me.loginClick = $('.login');
        me.closeClick = $('.login-poptit .close');
        me.loginpcMousedown = $('.login-poptit');
        me.submitNameClick = $('#submitName');
        me.btnnClick = $('.btnn');
    },
    bind: function() {
        var me = this;
        me.InputFocus.focus(function() {
            $('.search_class').css('border-color', '#4791ff');
        }).blur(function() {
            $('.search_class').css('border-color', '#b6b6b6');
        });
        me.loginClick.click(function() {
            $('.login-mask').show();
            $('.login-mask').height($(document).height());
            $('.login-popover').slideDown(200);
        });
        me.closeClick.click(function() {
            $('.login-mask').hide();
            $('.login-popover').slideUp(200);
        });
        me.loginpcMousedown.mousedown(function(event) {
            var isMove = true;
            var abs_x = event.pageX - $('.login-popover').offset().left;
            var abs_y = event.pageY - $('.login-popover').offset().top;
            $(document).mousemove(function(event) {
                if (isMove) {
                    var obj = $('.login-popover');
                    obj.css({ 'left': event.pageX - abs_x, 'top': event.pageY - abs_y });
                }
            }).mouseup(
                function() {
                    isMove = false;
                }
            );
        });
        me.submitNameClick.click(function() {
            var userdata = $("#userName").val();
            $("#loginUserName").data(userdata);

        });
        me.btnnClick.click(function() {
            var nak = $("#userName").val();
            alert(nak);

            $.cookie('nak', nak);
            $.cookie(nak, $("#userName").val());
            console.log(nak);
        });
    }
}



/**
 * 单例模式
 * 程序开始
 */
var start = (function() {
    login_moreproduct.init();
    login_input_btn.init();
})();

$(function () {
    new WOW().init(); // wow初始化
    ys.phNavInit(2);// 移动端导航
    ys.navSlide();// pc端导航默认下拉一级
    ys.yxlenis(1.2,true);
    ys.screenh();  // 移动端屏幕高度
    ys.dots1(); // slick-轮播进度条
    // 导航不在顶部时加类名isfixed,hover时加类名ishover
    ys.isFixed(".ys-hd-pc");
    // search
    pcSearch2()
    // ys.pcSearch(2);
    // lang
    ys.lang('.head-lang','.head-lang-down');
    // 底部二维码  pc hover的li   ph 点击的按钮   二维码盒子
    ys.footershare(".footer-share li",'.footer-share-btn','.footer-share-code');
    // ys.navSlide2('hover类名','加选中类名的类名',"选中类名,如：yxnav-active2");
    if($(window).width()<1200){
        ys.footernav(); // 底部副导航移动端
    }
    styleFun();
});
function pcSearch2() {
            $(".ys-search2 .head-search-btn").click(function(e){
                e.stopPropagation();
                $(".ys-search2-win").stop().slideToggle();
                $(this).toggleClass('act');
                $(this).parents('.ys-hd-pc').toggleClass('has-search');
            });
            $('.ys-search2-win').click(function(e){
                e.stopPropagation();
            });
            $('html,body').click(function(){
                $(".ys-search2-win").stop().slideUp();
                $(".head-search-btn").removeClass('act');
                $(".head-search-btn").parents('.ys-hd-pc').removeClass('has-search');
            });
        }

//黑白风格
function styleFun() {
    var $body = $("body");
    var $html = $("html");
    var styleStr = $body.attr("style") || "";
    if (styleStr.indexOf("filter") !== -1) {
        var filterValue = styleStr.match(/filter:\s*([^;]+)/)[1];
        var newBodyStyle = styleStr.replace(/filter:\s*[^;]+\s*;?/, "").trim();
        $body.attr("style", newBodyStyle || null); 
        $html.css("filter", filterValue);
    }
}




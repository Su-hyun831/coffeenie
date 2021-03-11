$(function(){
    $('#gnb > li').mouseenter(function(){
        $('#header #gnb > li .towD').stop().slideDown();
        $('#header .gnbBg').stop().slideDown();
    });
    $('#header .gnbBg').mouseleave(function(){
        $('#header #gnb > li .towD').stop().slideUp();
        $('#header .gnbBg').stop().slideUp();
    });
});
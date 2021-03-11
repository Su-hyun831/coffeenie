$(function(){
    $('#gnb > li').mouseenter(function(){
        $('#header #gnb > li .towD').slideDown();
        $('#header .gnbBg').stop().slideDown();
    });
    $('#header .gnbBg').mouseleave(function(){
        $('#header #gnb > li .towD').slideUp();
        $('#header .gnbBg').stop().slideUp();
    });
});
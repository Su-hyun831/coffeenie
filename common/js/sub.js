$(function(){
    $('.moreBtn').click(function(){
        $('.hidden').toggle();
        $('.moreBtn').hide();
    });
    var HOME_PATH = window.HOME_PATH || '.';
var cityhall = new naver.maps.LatLng(37.5275983,127.0337792),
    map = new naver.maps.Map('map', {
        center: cityhall,
        zoom: 18
    }),
    marker = new naver.maps.Marker({
        map: map,
        position: cityhall
    });

var contentString = [
        '<div class="iw_inner">',
        '   <h3>커피니 본사</h3>',
        '   <p>서울특별시 신사동 언주로 866<br />',
        '   </p>',
        '</div>'
    ].join('');

var infowindow = new naver.maps.InfoWindow({
    content: contentString,
    maxWidth: 140,
    backgroundColor: "#eee",
    borderColor: "#2db400",
    borderWidth: 5,
    anchorSize: new naver.maps.Size(30, 30),
    anchorSkew: true,
    anchorColor: "#eee",
    pixelOffset: new naver.maps.Point(20, -20)
});

naver.maps.Event.addListener(marker, "click", function(e) {
    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map, marker);
    }
});   
});
$(function(){
    $('.txtBx .view').click(function(){
        $('.detail').toggle(); 
        return false;
    });
});

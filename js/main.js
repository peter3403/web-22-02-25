$(".header-button").click(function(){
    $(".list-line").toggleClass("active");
});

// 漢堡選單變形動畫
$(".header-button").click(function(){
    $(".header-button-line").toggleClass("active");
});
// end

$(".header-button").click(function(){
    $(".header-phone-list-container").toggleClass("active");
});

// rwd 漢堡選單中 隱藏更多選單
$(".brand-more-btn").click(function(){
    $(".brand-list-phone").toggleClass("active");
});
$(".brand-more-btn").click(function(){
    $(".brand-list-phone").slideToggle(500);
});
$(".sports-more-btn").click(function(){
    $(".sports-list-phone").slideToggle(800);
});
$(".header-button").click(function(){
    $(".brand-list-phone").slideUp();
    $(".sports-list-phone").slideUp();
});
// end
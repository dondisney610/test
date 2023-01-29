$(function () {
  //ハンバーガーボタン
  $("#hamburger_button").on("click", function () {
    $(this).toggleClass("-active");
    $("#header_nav").toggleClass("-active");
    $("body").toggleClass("-active");
  });

  //トップへ戻るボタン
  const pageTop = $("#to_top");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      pageTop.fadeIn(300);
    } else {
      pageTop.fadeOut(300);
    }
  });
  pageTop.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 500);
    return false;
  });

  /*メインビジュアルのアニメーション*/
  $(function () {
    var $slide = $("#main_visual_slides").slick({
      fade: true,
      speed: 1500,
      autoplaySpeed: 1500,
      arrows: false,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
    });
  });
});

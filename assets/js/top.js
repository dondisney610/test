function initCategorySlide() {
  var swiper;
  $(window).on("load resize", function () {
    var w = window.innerWidth;
    if (w <= 1100) {
      swiper = new Swiper(".js-category", {
        allowTouchMove: false,
        freeMode: true,
        slidesPerView: "auto",
        centeredSlides: false,
        initialSlide: 0,
      });
    } else {
      if (swiper) {
        swiper.destroy();
        swiper = undefined;
      }
    }
  });
}

function initCommonSlideshow() {
  var pageData = $("#makeshop-page-common-slideshow-data");

  if (pageData.attr("data-enabled") !== "Y") {
    return;
  }

  $("#M_slider .M_sliderFirstImage").remove();
  $("#M_slider li").show();
  $("#M_slider").bxSlider({
    pause: pageData.attr("data-pause"),
    speed: pageData.attr("data-speed"),
    controls: pageData.attr("data-controls") === "Y",
    captions: pageData.attr("data-captions") === "Y",
    mode: pageData.attr("data-mode"),
    auto: true,
  });
}

$(function () {
  initCommonSlideshow();
  initCategorySlide();

  $(".js-drawer-opener").on("click", function (e) {
    $(".js-drawer").addClass("_active");
    return false;
  });

  $(".js-drawer-closer,.js-link").on("click", function (e) {
    $(".js-drawer").removeClass("_active");
  });
});

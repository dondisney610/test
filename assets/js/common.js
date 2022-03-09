// iOS用、高さ（vh）の計算
// ツールバーで高さが狂うため
const setFillHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

let vw = window.innerWidth;

window.addEventListener("resize", () => {
  if (vw === window.innerWidth) {
    return;
  }

  vw = window.innerWidth;
  setFillHeight();
});

setFillHeight();

let scrollWidth = window.innerWidth - $(window).width();
document.documentElement.style.setProperty("--sVw", `${scrollWidth}px`);

$(function () {
  $(".js-drawer-opener").on("click", function (e) {
    $(".js-drawer").addClass("_active");
    return false;
  });

  $(".js-drawer-closer,.js-link").on("click", function (e) {
    $(".js-drawer").removeClass("_active");
  });
});

$(".category_img").click(function () {
    const mainImg = $("#main_img").children("img");
    const imgSrc = $(this).children("img").attr("src");
    mainImg.attr("src", imgSrc);
});
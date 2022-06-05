$(function() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        $('body').peelback({
            adImage: '../img/peelback-behind-image-sp.png', //下に隠す画像
            peelImage: '../img/peel-image.png', //めくれる画像
            clickURL: '/contact', //クリック時のリンク先
            smallSize: 100, //初期サイズ
            bigSize: 195, //最大サイズ
            autoAnimate: true //自動アニメーション
        });
    } else {
        $('body').peelback({
            adImage: '../img/peelback-behind-image-pc.png', //下に隠す画像
            peelImage: '../img/peel-image.png', //めくれる画像
            clickURL: '/contact', //クリック時のリンク先
            smallSize: 100, //初期サイズ
            bigSize: 460, //最大サイズ
            autoAnimate: true //自動アニメーション
        });
    }
});
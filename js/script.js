/* ブラウザの可視領域の1%の高さ のカスタムプロパティ スマホで100vhで指定した時、アドレスバー分はみ出すのを防ぐ
  cssでは100vhと書くところを、100 * ーーvh で書いていけばOK💡*/
const setFillHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

// 画面のサイズ変動があった時に高さを再計算する
window.addEventListener("resize", setFillHeight);

// 初期化
setFillHeight();

//ここからjQery
$(function () {
  // #menuをクリックした時、スマホ用メニューを表示、切替
  $(".openbtn").click(function () {
    if ($("header").hasClass("active")) {
      $("header").removeClass("active");
      $("body").css({ overflow: "" });
    } else {
      $("header").addClass("active");
      $("body").css({ overflow: "hidden" });
    }
  });
  //ハンバーガーメニューボタン自体のactiveクラスを切替
  $(".openbtn").click(function () {
    $(this).toggleClass("active");
  });

  //アコーディオンをクリックした時の動作（メニュー）
  $(".accordion-btn").on("click", function () {
    //タイトル要素をクリックしたら
    var findElm = $(this).next(".accordion-child"); //直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle(); //アコーディオンの上下動作

    if ($(this).hasClass("close")) {
      //タイトル要素にクラス名closeがあれば
      $(this).removeClass("close"); //クラス名を除去し
      $(this).addClass("open"); //クラス名を除去し
    } else {
      //それ以外は
      $(this).addClass("close"); //クラス名closeを付与
      $(this).removeClass("open"); //クラス名を除去し
    }
  });

  /*スクロールしたらヘッダーの色が変わる*/
  $(window).on("scroll load", function () {
    var pos = $("header").offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > 300) {
      $("header").addClass("scroll-nav");
    } else {
      $("header").removeClass("scroll-nav");
    }
  });

/*画面の高さでpege-topへのリンクを呼び出す*/
  var section =$('#page-top');
  if(window.document.body.id === 'top'){
    var scroll = 400
  }else{
    var scroll = 200
  }
  $(window).on('scroll', function () {
      if ($(this).scrollTop() > scroll) {
		section.addClass('page-top_link');
      } else {
      section.removeClass('page-top_link');
    }
  });

});

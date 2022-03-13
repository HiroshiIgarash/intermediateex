
$(function () {
	AOS.init({
		duration: 1500
	});
  $(window).on('load scroll', function () {
    var $header = $('.header');

    // 200以上スクロールしたら処理
    if ($(window).scrollTop() > 10) {
      $header.addClass('sticky');
    } else {
      $header.removeClass('sticky');
    }
  });




  //モーダルウィンドウを出現させるクリックイベント
  $(".modal-open").click( function(){

	//キーボード操作などにより、オーバーレイが多重起動するのを防止する
	$( this ).blur() ;	//ボタンからフォーカスを外す
	if( $( "#modal-overlay" )[0] ) return false ;		//新しくモーダルウィンドウを起動しない (防止策1)
	//if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する (防止策2)

	//オーバーレイを出現させる
	$( "body" ).append( '<div id="modal-overlay"></div>' ) ;
	$( "#modal-overlay" ).fadeIn( "slow" ) ;

	//コンテンツをセンタリングする
	centeringModalSyncer() ;

	//コンテンツをフェードインする
	$( "#modal-content" ).fadeIn( "slow" ) ;

	//[#modal-overlay]、または[#modal-close]をクリックしたら…
	$( "#modal-overlay,#modal-close" ).unbind().click( function(){

		//[#modal-content]と[#modal-overlay]をフェードアウトした後に…
		$( "#modal-content,#modal-overlay" ).fadeOut( "slow" , function(){

			//[#modal-overlay]を削除する
			$('#modal-overlay').remove() ;

		} ) ;

	} ) ;

} ) ;

//リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
$( window ).resize( centeringModalSyncer ) ;

	//センタリングを実行する関数
	function centeringModalSyncer() {

		//画面(ウィンドウ)の幅、高さを取得
		var w = $( window ).width() ;
		var h = $( window ).height() ;

		// コンテンツ(#modal-content)の幅、高さを取得
		// jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
//		var cw = $( "#modal-content" ).outerWidth( {margin:true} );
//		var ch = $( "#modal-content" ).outerHeight( {margin:true} );
		var cw = $( "#modal-content" ).outerWidth();
		var ch = $( "#modal-content" ).outerHeight();

		//センタリングを実行する
		$( "#modal-content" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;
	}


  $(".flatpickr").flatpickr({
    mode: "multiple",
    minDate: "today",
    dateFormat: "Y-m-d"
  });



  $("button").click(function(){

    var target = $(this).attr("value");

    $(".active").removeClass("active");
    $(this).addClass("active");

    $(".news--list li").each(function(){
      $(this).animate({"opacity": 0}, 300 ,function(){
        $(this).hide();

        if($(this).hasClass(target)){
          $(this).show();
          $(this).animate({"opacity" : 1}, 300);
        };
      });
    });
  });

	$('.hamburger').click(function() {
		$('.globalMenuSp').slideToggle(500);
		$(".globalMenuSp li a").click(function(){
			$("globalMenuSp").css({display:"none"});
		});
		$('.hamburger').toggleClass('active');
		if ($(this).hasClass('active')) {
				$('.globalMenuSp').addClass('active');
		} else {
				$('.globalMenuSp').removeClass('active');
		}
});



});









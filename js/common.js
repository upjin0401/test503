



$(document).ready(function () { //문서준비이벤트

    
    //상단팝업
    $('.popup_close').click(function () {
        $('#popup').slideUp();
    })
    
    //sitemap
    $('.all_wrap').hide();
    $('.all_menu').click(function(){
    $('.all_wrap').stop().fadeIn();
    });

    $('.all_close').click(function(){
        $('.all_wrap').stop().fadeOut();
        });
    //gnb
    $('.depth2,.depth2_bg').hide();

    $('.gnb>li').mouseenter(function () {
        $(this).find('.depth2').stop().fadeIn();
        $('.depth2_bg').stop().fadeIn();
    });

    $('.gnb>li').mouseleave(function () {
        $(this).find('.depth2').stop().fadeOut();
        $('.depth2_bg').stop().fadeOut();
    });


    //mdepth2
    $('.mdepth2').hide();
    $('.mgnb > li').click(function(){
        $(this).children('.mdepth2').stop().slideDown();
        $(this).siblings().children('.mdepth2').stop().slideUp();
    });

    //mgnb
    $('.ham').click(function(){
        $('.mgnb_wrap').animate({
            left:'0'
        },3000); //사이에 숫자 = 속도조절 1000은 1초
    });

    $('.mgnb_close').click(function(){
        $('.mgnb_wrap').animate({
            left:'100%' //반대로 들어가는 경우 right
        });
    });

    //language
    $('.language ul').hide();

    $('.language').click(function () {
        $('.language ul').stop().slideToggle();
        $('.down').toggleClass('active');
    });


    //메인배너 슬라이드
    const mb = new Swiper('.mb', {
        autoplay: {
            delay: 5000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },

        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },


        pagination: {
            el: '.swiper-pagination',  // 버튼 태그 설정
            type: 'fraction',  // 버튼 종류 설정 'bullets' | 'fraction(숫자)' | 'progressbar(흐름)'
            clickable: true,  // 버튼 클릭 여부
        },

        loop: true, //슬라이드 반복 여부
        speed: 1000 //슬라이드 동작 속도 1초
    });


    //메인슬라이드 재생, 정지
    $('.mb_play').hide();

    $('.mb_pause').on('click', function () {
        mb.autoplay.stop();
        $('.mb_pause').hide();
        $('.mb_play').show();
    });

    $('.mb_play').on('click', function () {
        mb.autoplay.start();
        $('.mb_pause').show();
        $('.mb_play').hide();
    });


    //제품슬라이드
    const product_list = new Swiper('.product_list', {
        autoplay: {
            delay: 3000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },

        slidesPerView: '2',  // 한 슬라이드에 보여줄 갯수 , 모바일의 크기
        centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
        spaceBetween: 40,  // 슬라이드 사이 여백
        // 반응형 슬라이드
        breakpoints: {
            1024: {  // 가로해상도가 1024px 이상일 경우
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1600: {  // 가로해상도가 1600px 이상일 경우
                slidesPerView: 6,
                spaceBetween: 40,
            },
         
        },

        loop: true, //슬라이드 반복 여부
        speed: 1000 //슬라이드 동작 속도 1초
    });

    // .brnad_list li 첫번째 요소 active 클래스 먼저 추가
    // .brand_list li에 클릭했을 때

    $('.brand_list li:first-child').addClass('active');
    $('.brand_list li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');

    });

    //$(this).addClass('active'); $(this).siblings().removeClass('active');
    // 클릭한 요소에 active라는 요소를 추가하라
    //클릭한 요소의 형제 요소들에게는 active라는 클래스를 제거
    //자식요소는 children, 형제 요소는 siblings

    $('.museum_list li:first-child').addClass('active');
    $('.museum_list li').mouseenter(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    //아코디언 배너
    //museum_list li 중 첫번째 요소에 active클래스 추가
    //museum_list li에 마우스 올렸을 때
    //마우스 올린 요소에 active 클래스 추가
    //마우스 올린 요소의 형제요소에 active class제거

    //탑버튼
    //if (스크롤이 300px이상 내려갔을 때)
//top버튼이 fadeIn 서서히 보여라 $('.gotop').fadeIn();
//else(탑버튼이 fadeOut 서서히 사라져라) $('.gotop').fadeOut();
$('.gotop').hide();
$(window).scroll(function(){
  if ($(this).scrollTop() > 300) {
    $('.gotop').fadeIn();
  } else {
    $('.gotop').fadeOut();
    
  }  
});

$('.gotop').click(function(){
$('html,body').animate({
    scrollTop: '0'
},1500); 
}); //gotop버튼 클릭할 때 위로 가게 하기



}); //문서준비이벤트 종료
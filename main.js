$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) { 
            $('#header').addClass('fix'); 
        } else {
            $('#header').removeClass('fix'); 
        }
    });
    $(window).trigger('scroll');


    $('#header .menu-front .open').click(function (e) { 
        e.preventDefault();

        $('#header .menu-front').toggleClass('active');
        $('#header .menu-all').slideToggle()
    });

    // 사이드 메뉴 
    $('#header .btn-menu').click(function (e) { 
        $('#sideNav').addClass('on');
        $('.dimmed').addClass('is-active');
        $('body').addClass('no-scroll');
    });

    // 사이드 메뉴 닫기
    $('#header .close-btn ,.dimmed').click(function (e) { 
        $('#sideNav').removeClass('on');
        $('.dimmed').removeClass('is-active');
        $('body').removeClass('no-scroll'); 
    });

    // 사이드 메뉴판 토글
    $('#sideNav .menutitle').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('on').siblings('.sub').stop().slideToggle();
    });


    $('.tab-list li').click(function (e) {
        e.preventDefault();

        const tabName = $(this).data('tab');
        $(this).addClass('active').siblings().removeClass('active');
        $(tabName).addClass('active').siblings('.new-area').removeClass('active');
    });

// // 서브 메뉴 토글 열림, 닫힘
//     $('#sideNav .item > .menutitle').click(function (e) {
//         e.preventDefault();
            
//         let $currentSubmenu = $(this).siblings('.depth3-list');
    
//         // 다른 열린 서브메뉴 닫기
//         $('.depth3-list').not($currentSubmenu).slideUp();
//         $('.depth2-item > .menutitle').not($(this)).removeClass('on');
    
//         // 현재 클릭한 항목의 서브메뉴가 닫혀있을 때만 열기
//         if (!$currentSubmenu.is(':visible')) {
//             $(this).addClass('on'); // 활성화 표시
//             $currentSubmenu.slideDown();
//         } else {
//             $(this).removeClass('on'); // 닫힐 때 화살표 원래대로
//         }

//         $(this).removeClass('on'); 
//     });

//     $('#sideNav .depth2-item > .menutitle').click(function (e) {
//         e.preventDefault();
//         let $currentSubmenu = $(this).siblings('.depth3-list');
    
//         // 다른 열린 서브메뉴 닫기
//         $('.depth3-list').not($currentSubmenu).slideUp();
//         $('.depth2-item > .menutitle').not($(this)).removeClass('on');
    
//         // 현재 클릭한 항목의 서브메뉴가 닫혀있을 때만 열기
//         if (!$currentSubmenu.is(':visible')) {
//             $(this).addClass('on'); // 활성화 표시
//             currentSubmenu.slideDown();
                
//         }
//     });

$('#sideNav').on('click', '.menutitle', function(e) {
    e.preventDefault();

    console.log("Clicked:", $(this)); // 클릭된 요소 확인

    let $submenu = $(this).siblings('.sub');
    let $parentItem = $(this).parent();
    let $allSubmenus = $('#sideNav .sub').not($submenu);
    let $allTitles = $('#sideNav .menutitle').not($(this));

    let isVisible = $submenu.is(':visible');

    // 모든 다른 서브메뉴 닫기
    $allSubmenus.slideUp();
    $allTitles.removeClass('on'); // 기존 열린 메뉴의 on 제거

    // 현재 클릭한 메뉴를 열고 'on' 추가
    if (!isVisible) {
        $submenu.slideDown();
        $(this).addClass('on');
    } else {
        $(this).removeClass('on');
    }

    console.log("Has on class?", $(this).hasClass('on')); // 클래스 정상 적용 여부 확인
});
    // top 슬라이드
    var mainSwiper = new Swiper(".top-banner .mySwiper", {
        pagination: {
            el: ".swiper-pagination",
        },
        // loop: true, 
        // autoplay: {
        //     delay: 3000, 
        // },
    });
    
    // top 슬라이드
    var mainSwiper = new Swiper(".sc-mainadd .swiper", {
        pagination: {
            el: ".swiper-pagination",
        },
        loop: true, 
        // autoplay: {
        //     delay: 3000, 
        // },
    });

    // 광고 배너
    var mySwiper = new Swiper(".sc-banner .swiper", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type:"fraction"
        },
        // autoplay: {
        //     delay: 3000, 
        //     disableOnInteraction: false,
        // },
    });

    // 골프, 위크레저, 우먼즈기모, 맨즈기모
    var golfSwiper = new Swiper(".sc-cate .swiper", {
        slidesPerView: 2.2,
        spaceBetween:10,
        freeMode: true,
    });

    

});
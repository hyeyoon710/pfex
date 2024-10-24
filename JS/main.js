const box = document.querySelector('.about_left');
console.log(box.offsetWidth, box.offsetHeight);

//cursor custom
// let mouseCursor = document.querySelector(".cursor");
// //window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
// window.addEventListener("scroll", cursor);
// window.addEventListener("mousemove", cursor);
// //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
// function cursor(e) {
//   mouseCursor.style.left = e.pageX + "px"
//   mouseCursor.style.top = e.pageY - scrollY + "px"
// }

let lastScrollTop = 0; // 이전 스크롤 위치 저장

$(window).on('scroll', function() {
  let currentScrollTop = $(this).scrollTop(); // 현재 스크롤 위치

  if (currentScrollTop > 110) {

    if (currentScrollTop > lastScrollTop) {
      // 아래로 스크롤 중이면 헤더 숨기기
      $('header').removeClass('fixed').slideUp();
    } else {
      // 위로 스크롤 중이면 헤더 보이기
      $('header').addClass('fixed').slideDown();
    }
  } else {
    // 스크롤이 110px 이하일 때는 헤더가 보임
    $('header').removeClass('fixed').slideDown();
  }

  lastScrollTop = currentScrollTop; // 이전 스크롤 위치 업데이트
});


// section move
$('header a').click(function(e) {
  e.preventDefault()

  if ($(this).hasClass('home')) {
    window.location.href = 'index.html'
    return; // 아래 섹션 이동 코드는 실행하지 않음
  }

  let n = $(this).parent().index(); // 클릭한 a 태그의 부모 li의 인덱스를 가져옴
  $('html, body').animate({
    scrollTop: $('section').eq(n + 1).offset().top
  }, 500);
})

document.querySelector('.pb_1').addEventListener('click', function() {
  document.querySelector('.kaist').scrollIntoView({ behavior: 'smooth', block: 'start'});

  document.querySelector('.pb_1').style.backgroundColor = '#075545';
  document.querySelector('.pb_1').style.borderColor = '#075545';

});
document.querySelector('.pb_2').addEventListener('click', function() {
  document.querySelector('.posco').scrollIntoView({ behavior: 'smooth', block: 'start'});

});


// ScrollTrigger
window.addEventListener('load', () => {
  gsap.registerPlugin(ScrollTrigger);

  const ani1 = gsap.timeline()

  ani1.from('.main_h2 .t1', {xPercent : -400, autoAlpha : 0})
      .from ('.main_h2 .t2', {xPercent : 400, autoAlpha : 0})

  gsap.to('.rest .front', {
    scale: 2,
    autoAlpha : 0,
    transformOrigin: 'center center', // 중심점 기준으로 확대
    scrollTrigger: {
      trigger: '.rest',
      start: 'top top',
      end: 'bottom top',
      pin: true,
      scrub: true,
      // markers: true,
    }
  });

  ani1.play();
})
















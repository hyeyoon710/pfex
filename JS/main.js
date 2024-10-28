const box = document.querySelector('.p_wrap');
console.log(box.offsetWidth, box.offsetHeight);

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

// ScrollTrigger
window.addEventListener('load', () => {
  gsap.registerPlugin(ScrollTrigger);

  const ani1 = gsap.timeline()

  ani1.from('.main_h2 .t1', {xPercent : -400, autoAlpha : 0})
      .from ('.main_h2 .t2', {xPercent : 400, autoAlpha : 0})

  gsap.to('.rest .front', {
    scale: 45,
    // duration: 5,
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

// const kaist = document.querySelector('.kaist')
// const pb1 = document.querySelector('.pb_1')
// const posco = document.querySelector('.posco')
// const pb2 = document.querySelector('.pb_2')
// const JavaScript = document.querySelector('.javascript')
// const pb3 = document.querySelector('.pb_3')

// pb1.addEventListener('click', function() {
//   kaist.scrollIntoView({ behavior: 'smooth', block: 'start'});
//   pb1.style.color = '#fff'
//   pb1.style.backgroundColor = '#075545'
//   pb1.style.borderColor = ' #fff'

//   const pb1BgColor = getComputedStyle(pb1).backgroundColor;

//   if (pb1BgColor === 'rgb(7, 85, 69)') {
//     pb2.style.color = '#000'
//     pb2.style.backgroundColor = '#FFF'
//     pb2.style.borderColor = '#000'
//     pb3.style.color = '#000'
//     pb3.style.backgroundColor = '#FFF'
//     pb3.style.borderColor = '#000'
//   }
// });

// pb2.addEventListener('click', function() {
//   posco.scrollIntoView({ behavior: 'smooth', block: 'start'});
//   pb2.style.color = '#fff'
//   pb2.style.backgroundColor = '#075545'
//   pb2.style.borderColor = ' #fff'

//   const pb2BgColor = getComputedStyle(pb2).backgroundColor;

//   if (pb2BgColor === 'rgb(7, 85, 69)') {
//   pb1.style.color = '#000'
//   pb1.style.backgroundColor = '#FFF'
//   pb1.style.borderColor = '#000'
//   pb3.style.color = '#000'
//   pb3.style.backgroundColor = '#FFF'
//   pb3.style.borderColor = '#000'
//   }
// });

// pb3.addEventListener('click', function() {
//   JavaScript.scrollIntoView({ behavior: 'smooth', block: 'start'});
//   pb3.style.color = '#fff'
//   pb3.style.backgroundColor = '#075545'
//   pb3.style.borderColor = ' #fff'

//   const pb3BgColor = getComputedStyle(pb3).backgroundColor;

//   if (pb3BgColor === 'rgb(7, 85, 69)') {
//   pb1.style.color = '#000'
//   pb1.style.backgroundColor = '#FFF'
//   pb1.style.borderColor = '#000'
//   pb2.style.color = '#000'
//   pb2.style.backgroundColor = '#FFF'
//   pb2.style.borderColor = '#000'
//   }
// });

const kaist = document.querySelector('.kaist');
const pb1 = document.querySelector('.pb_1');
const posco = document.querySelector('.posco');
const pb2 = document.querySelector('.pb_2');
const JavaScript = document.querySelector('.javascript');
const pb3 = document.querySelector('.pb_3');
const buttons = [pb1, pb2, pb3]; // 버튼들을 배열로 관리

// 버튼 스타일 초기화 함수
function resetButtonStyles() {
  buttons.forEach(button => {
    button.style.color = '#000';
    button.style.backgroundColor = '#FFF';
    button.style.borderColor = '#000';
  });
}

// 버튼 클릭 이벤트 핸들러 생성 함수
function addButtonClickListener(button, targetElement) {
  button.addEventListener('click', function () {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    resetButtonStyles(); // 다른 버튼 스타일 초기화
    button.style.color = '#fff';
    button.style.backgroundColor = '#075545';
    button.style.borderColor = '#fff';
  });
}

// 각 버튼에 클릭 이벤트 핸들러 추가
addButtonClickListener(pb1, kaist);
addButtonClickListener(pb2, posco);
addButtonClickListener(pb3, JavaScript);














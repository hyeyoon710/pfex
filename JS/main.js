const box = document.querySelector('.p_wrap');
console.log(box.offsetWidth, box.offsetHeight);

let lastScrollTop = 0;
const portSectionTop = $('.port').offset().top;

$(window).on('scroll', function() {
  let currentScrollTop = $(this).scrollTop();

  if (currentScrollTop > 110) {
    if (currentScrollTop > lastScrollTop) {
      // 아래로 스크롤 중이면 헤더 숨기기
      $('header').removeClass('fixed').slideUp();
    } else {
      // 위로 스크롤 중이고 화면 너비가 500px 초과거나, .port 섹션 위로 스크롤 했을 때만 헤더 보이기
      if (window.innerWidth > 500 || currentScrollTop < portSectionTop) {
        $('header').addClass('fixed').slideDown();
      }
    }
  } else {
    // 스크롤이 110px 이하일 때는 헤더가 보임
    $('header').removeClass('fixed').slideDown();
  }

  lastScrollTop = currentScrollTop;
});

// section move
$('header a').click(function(e) {
  e.preventDefault();

  if ($(this).hasClass('home')) {
    window.location.href = 'index.html';
    return; // 아래 섹션 이동 코드는 실행하지 않음
  }

  let n = $(this).parent().index(); // 클릭한 a 태그의 부모 li의 인덱스를 가져옴
  $('html, body').animate({
    scrollTop: $('section').eq(n + 1).offset().top
  }, 500);
});

// ScrollTrigger
window.addEventListener('load', () => {
  gsap.registerPlugin(ScrollTrigger);

  const ani1 = gsap.timeline()

  ani1.from('.main_h2 .t1', {xPercent : -400, autoAlpha : 0})
      .from ('.main_h2 .t2', {xPercent : 400, autoAlpha : 0})

  gsap.to('.rest .front', {
    scale: 45,
    transformOrigin: 'center center',
    scrollTrigger: {
      trigger: '.rest',
      start: 'top top',
      end: 'bottom top',
      pin: true,
      scrub: true,
      // markers: true,
    }
  });
  gsap.to('.rest p', {
    opacity : 1,
    duration: 1,
    scrollTrigger: {
      trigger: '.rest',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });
  ani1.play();
})

const buttons = [pb1, pb2, pb3];
const kaist = document.querySelector('.kaist');
const pb1 = document.querySelector('.pb_1');
const posco = document.querySelector('.posco');
const pb2 = document.querySelector('.pb_2');
const JavaScript = document.querySelector('.javascript');
const pb3 = document.querySelector('.pb_3');
const header = document.querySelector('.pb_3');

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
















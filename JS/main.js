
//cursor custom
let mouseCursor = document.querySelector(".cursor");
//window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);
//커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
function cursor(e) {
  mouseCursor.style.left = e.pageX + "px"
  mouseCursor.style.top = e.pageY - scrollY + "px"
}

//header fix
$(window).on('scroll', function(e) {
  if ($(window).scrollTop() > 110) { // 스크롤이 100px 이상 내려가면
    $('header').addClass('fixed')
  } else {
    $('header').removeClass('fixed')
    $('header li a').css('background', 'none')
  }
})

//section move
$('header a').click(function(e) {
  e.preventDefault()

  if ($(this).hasClass('home')) {
    window.location.href = 'index.html'
    return; // 아래 섹션 이동 코드는 실행하지 않음
  }

  let n = $(this).parent().index(); // 클릭한 a 태그의 부모 li의 인덱스를 가져옴
  $('html').animate({
    scrollTop : $('section').eq(n + 1).offset().top
  })
  $(this).css('background', '#E8E3C3')
  $('header li a').not(this).css('background', 'none')
})

// ScrollTrigger
window.addEventListener('load', () => {
  gsap.registerPlugin(ScrollTrigger);

  const ani1 = gsap.timeline()

  ani1.from('.main_h2 .t1', {xPercent : -400, autoAlpha : 0})
      .from ('.main_h2 .t2', {xPercent : 400, autoAlpha : 0})

  gsap.to('.rest .front', {
    scale: 2,
    autoAlpha: 0, //투명도
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

//Port color
document.addEventListener('DOMContentLoaded', function () {
  // Intersection Observer 설정
  const options = {
    root: null, // viewport를 기준으로
    rootMargin: '0px 0px -100% 0px', // 화면 아래쪽 끝이 상단에 닿을 때 실행
    threshold: 0 // 요소가 상단에 딱 맞춰졌을 때 실행
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Kaist li가 화면 상단에 도달했을 때
        if (entry.target.classList.contains('kaist')) {
          document.querySelector('.port_left p:nth-child(2)').style.color = '#005dab';
        }
        // Posco li가 화면 상단에 도달했을 때
        else if (entry.target.classList.contains('posco')) {
          document.querySelector('.port_left p:nth-child(3)').style.color = '#006b8d';
        }
        // Xi li가 화면 상단에 도달했을 때
        else if (entry.target.classList.contains('xi')) {
          document.querySelector('.port_left p:nth-child(4)').style.color = '#00588a';
        }
      } else {
        // 화면에서 벗어났을 때는 검은색으로 복구
        if (entry.target.classList.contains('kaist')) {
          document.querySelector('.port_left p:nth-child(2)').style.color = 'black';
        } else if (entry.target.classList.contains('posco')) {
          document.querySelector('.port_left p:nth-child(3)').style.color = 'black';
        } else if (entry.target.classList.contains('xi')) {
          document.querySelector('.port_left p:nth-child(4)').style.color = 'black';
        }
      }
    });
  }, options);

  // 모든 li 요소를 관찰
  const targets = document.querySelectorAll('.port_right li');
  targets.forEach(target => observer.observe(target));
});

















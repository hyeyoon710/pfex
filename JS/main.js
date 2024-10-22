
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
    // $('header li a').css('background', 'none')
  }
})

//section move
$('header a').click(function(e) {
  e.preventDefault()

  if ($(this).hasClass('home')) {
    window.location.href = 'index.html'
    return; // 아래 섹션 이동 코드는 실행하지 않음
  }

  let $this = $(this); // 클릭한 요소를 변수에 저장
  $this.css('background', '#E8E3C3');

  $('header li a').not($this).css('background', 'none');

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
















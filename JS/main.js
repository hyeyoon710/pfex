$(document).ready(function() {
  var Height = $('.about_txt').height();
  console.log(Height);
})






// ScrollTrigger

window.addEventListener('load', () => {
  gsap.registerPlugin(ScrollTrigger);

  let pRight = document.querySelector('.port_right')
  let pRightHeight = pRight.offsetHeight;
  console.log('Height of .news_left:', pRightHeight);

  gsap.to('.port_left', {

    scrollTrigger : {
      trigger : '.port_left',
      start : 'top top',
      end : `+=${pRightHeight} bottom`,
      // end : '+=3000 top' ,
      pin: true,
      scrub: 1,
      pinSpacing: true,
      // markers : true,
    }
  })

  const ani1 = gsap.timeline()

  ani1.from('.main_h2 .t1', {xPercent : -400, autoAlpha : 0})
      .from ('.main_h2 .t2', {xPercent : 400, autoAlpha : 0})

  ani1.play();

})

























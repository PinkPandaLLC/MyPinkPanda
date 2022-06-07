
//******** 
//Page Buttons
//********

$("button").click(function(){
  let btnId = $(this).attr("id");
  console.log(btnId);
     if (btnId === 'hm_studiobtn'){
     location.href = 'studio.html';
     }
     else if(btnId === 'hm_learnBtn'){
     location.href = 'services.html';
     }
     else if(btnId === 'hm_aboutBtn'){
     location.href = 'about.html';
     }
     else if(btnId === 'hm_ppwBtn'){
     location.href = '404.html';
     }
 });
 


  //********
 //Return to Top button
 //********
    //Get the button
    let topButton = document.getElementById("btn-back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
    scrollFunction();
    };

    function scrollFunction() {
    if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
    ) {
    topButton.style.display = "block";
    } else {
    topButton.style.display = "none";
    }
    }
    // When the user clicks on the button, scroll to the top of the document
    topButton.addEventListener("click", backToTop);

    function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $(".navbar").show(500);
    $(".header").show(500);
    }

  //   $(function(){
  //     var swiper = new Swiper('.carousel-gallery .swiper-container', {
  
  //       effect: 'slide',
  //       speed: 900,
  //       slidesPerView: 5,
  //       spaceBetween: 20,
  //       simulateTouch: true,
  //       autoplay: {
  //         delay: 5000,
  //         stopOnLastSlide: false,
  //         disableOnInteraction: false
  //       },
  //       pagination: {
  //         el: '.carousel-gallery .swiper-pagination',
  //         clickable: true
  //       },
  //       breakpoints: {
  //         // when window width is <= 320px
  //         320: {
  //           slidesPerView: 1,
  //           spaceBetween: 5
  //         },
  //         // when window width is <= 480px
  //         425: {
  //           slidesPerView: 2,
  //           spaceBetween: 10
  //         },
  //         // when window width is <= 640px
  //         768: {
  //           slidesPerView: 3,
  //           spaceBetween: 20
  //         }
  //       }
  //     }); /*http://idangero.us/swiper/api/*/
    
      
    
  // });
      
    
    

 
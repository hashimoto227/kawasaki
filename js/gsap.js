$(window).scroll(function () {
    $(".jigyou01_image").each(function () {
      var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
      console.log(elemPos - windowHeight);
      console.log(scroll);

      if (scroll > elemPos - windowHeight + 500) {
        $(this).addClass("scrollin");
        gsap.to(".jigyou01_image img:nth-child(1)", {
          x: 1000,
          duration: 0.4,
          duration: 0.6,
          ease: "power4.out",
        });
        gsap.to(".jigyou01_image img:nth-child(2)", {
          x: 1186,
          duration: 0.4,
          duration: 0.4,
          ease: "power4.out",
        });
        gsap.to(".jigyou01_image img:nth-child(3)", {
          x: 1336,
          duration: 0.4,
          duration: 0.2,
          ease: "power4.out",
        });
        gsap.to(".jigyou01_image img:nth-child(4)", {
          x: 1526,
          duration: 0.4,
          duration: 0,
          ease: "power4.out",
        });
        gsap.to(":root", {
          "--secstion02-bg": "polygon(0 200px , 80% 100px, 40% 90%, 0 80%)",
        });
      }
    });
  });

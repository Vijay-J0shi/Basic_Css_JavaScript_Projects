// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {

    // Get references to elements
    const navbar = document.querySelector('.navbar');
    const scrollUpBtn = document.querySelector('.scroll-up-btn');
    const htmlElement = document.querySelector('html');
    const menuLinks = document.querySelectorAll('.navbar .menu li a');
    const menuBtn = document.querySelector('.menu-btn');
    const menuItems = document.querySelector('.navbar .menu');
    const menuIcon = document.querySelector('.menu-btn i');
  
    // Handle scroll event
    window.addEventListener('scroll', function () {
      // Sticky navbar on scroll script
      navbar.classList.toggle('sticky', window.scrollY > 50);
  
      // Scroll-up button show/hide script
      scrollUpBtn.classList.toggle('show', window.scrollY > 1600);
    });
  
    // Handle scroll-up button click
    scrollUpBtn.addEventListener('click', function () {
      // Animate scroll to top
      htmlElement.animate({ scrollTop: 0 }, 300);
      // Remove smooth scroll behavior on slide-up button click
      htmlElement.style.scrollBehavior = 'auto';
    });
  
    // Handle menu item click
    menuLinks.forEach(link => {
      link.addEventListener('click', function () {
        // Apply smooth scroll on menu items click
        htmlElement.style.scrollBehavior = 'smooth';
      });
    });
  
    // Handle toggle menu/navbar script
    menuBtn.addEventListener('click', function () {
      menuItems.classList.toggle('active');
      menuIcon.classList.toggle('active');
    });
  
    // Typing text animation script
    const typingOptions = {
      strings: [
        "Mechanical Engineer",
        "Full Stack Developer",
        "Lifelong Learner",
        "Web Designer",
        "Freelancer"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };
  
    new Typed(".typing", typingOptions);
    new Typed(".typing-2", typingOptions);
  
    // Owl carousel script
    $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1, nav: false },
        600: { items: 2, nav: false },
        1000: { items: 3, nav: false }
      }
    });
  
  });
  
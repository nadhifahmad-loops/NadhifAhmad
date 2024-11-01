/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');
    header.classList.toogle('sticky', window.scrollY > 100);
    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
    debug: true
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portofolio-box, .contact form ', {origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',  {origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content,',  {origin:'right'});

/*==================== scroll 2 section ====================*/
document.querySelector('.scroll-btn.right').addEventListener('click', () => {
    document.querySelector('.about-container').scrollBy({ left: window.innerWidth, behavior: 'smooth' });
  });
  
  document.querySelector('.scroll-btn.left').addEventListener('click', () => {
    document.querySelector('.about-container').scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
  });
  
/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Grapich Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



/*==================== about - read more ====================*/
document.addEventListener('DOMContentLoaded', function() {
  const btnFe = document.getElementById('btnFe');
  const aboutRead = document.getElementById('myDiv');
  const navigation = document.querySelector('.navigation');

  btnFe.addEventListener('click', function() {
      aboutRead.classList.toggle('active');
      navigation.classList.add('active'); 
    
      /*==================== circle skills ====================*/
      const circles = document.querySelectorAll('.circle');
      circles.forEach(elem => {
          var dots = elem.getAttribute("data-dots");
          var marked = elem.getAttribute("data-percent");
          var percent = Math.floor(dots * marked / 100);
          var points = "";
          var rotate = 360 / dots;

          for(let i = 0; i < dots; i++) {
              points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
          }
          elem.innerHTML = points;

          const pointsMarked = elem.querySelectorAll('.points');
          for (let i = 0; i < percent; i++) {
              pointsMarked[i].classList.add('marked');
          }
      });

      // Menambahkan animasi ke bar span
      const skillBars = document.querySelectorAll('.skill-bar .bar span');
      skillBars.forEach(bar => {
          // Reset animation by removing and adding the class
          bar.classList.remove('animate');
          void bar.offsetWidth; // Trigger reflow
          bar.classList.add('animate');
      });
  });
});

/*==================== about - read more  2 ====================*/
document.addEventListener('DOMContentLoaded', function() {
  const btnFe = document.getElementById('btnFe2');
  const aboutRead = document.getElementById('myDiv2');
  const navigation = document.querySelector('.navigation');

  btnFe.addEventListener('click', function() {
      aboutRead.classList.toggle('active');
      navigation.classList.add('active'); 
    
      /*==================== circle skills ====================*/
      const circles = document.querySelectorAll('.circle');
      circles.forEach(elem => {
          var dots = elem.getAttribute("data-dots");
          var marked = elem.getAttribute("data-percent");
          var percent = Math.floor(dots * marked / 100);
          var points = "";
          var rotate = 360 / dots;

          for(let i = 0; i < dots; i++) {
              points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
          }
          elem.innerHTML = points;

          const pointsMarked = elem.querySelectorAll('.points');
          for (let i = 0; i < percent; i++) {
              pointsMarked[i].classList.add('marked');
          }
      });

      // Menambahkan animasi ke bar span
      const skillBars = document.querySelectorAll('.skill-bar .bar span');
      skillBars.forEach(bar => {
          // Reset animation by removing and adding the class
          bar.classList.remove('animate');
          void bar.offsetWidth; // Trigger reflow
          bar.classList.add('animate');
      });
  });
});

  

/*==================== arrow bottom-read about ====================*/
document.addEventListener('DOMContentLoaded', function() {
  const arrow = document.querySelector('.arrow i');
  const aboutRead = document.getElementById('myDiv');
  const navigation1 = document.querySelector('.navigation'); 

  arrow.addEventListener('click', function() {
      if (aboutRead.classList.contains('active')) {
          navigation1.classList.remove('active');
          arrow.classList.remove('active');
          aboutRead.classList.remove('active');
      } else {
          aboutRead.classList.add('active');
          arrow.classList.add('active');
      }
  });
});


  /*==================== arrow bottom-read about(2) ====================*/
document.addEventListener('DOMContentLoaded', function() {
  const arrow2 = document.querySelector('.arrow2 i');
  const aboutRead2 = document.getElementById('myDiv2');
  const navigation2 = document.querySelector('.navigation');

  arrow2.addEventListener('click', function() {
    if (aboutRead2.classList.contains('active')) {
      // Jika aboutRead aktif, menutupnya
      navigation2.classList.remove('active');
      arrow2.classList.remove('active');
      aboutRead2.classList.remove('active');
    } else {
      // Jika aboutRead tidak aktif, menampilkannya
      aboutRead2.classList.add('active');
      arrow2.classList.add('active');
    }
  });
});

  /*==================== arrow left right hidden ====================*/
    document.addEventListener("DOMContentLoaded", function() {
        const scrollBtnLeft = document.getElementById("scrollBtnLeft");
        const scrollBtnRight = document.getElementById("scrollBtnRight");
        const section1 = document.getElementById("about");
        const section2 = document.getElementById("aboutNew");

        // Function to handle intersection changes
        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.id === "about") {
                        scrollBtnLeft.classList.add("hidden");
                        scrollBtnRight.classList.remove("hidden");
                    } else if (entry.target.id === "aboutNew") {
                        scrollBtnRight.classList.add("hidden");
                        scrollBtnLeft.classList.remove("hidden");
                    }
                }
            });
        };

        // Create intersection observer
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5 // Adjust this value as needed
        });

        // Observe sections
        observer.observe(section1);
        observer.observe(section2);
    });


  
  /*==================== scroll effect about ====================*/
  document.addEventListener("DOMContentLoaded", function() {
    // Pilih elemen yang akan dianimasikan
    const imgElement = document.querySelector('.img2 img');
    const headElement = document.querySelector('.head2');

    // Buat instance Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Persentase elemen yang harus terlihat
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Tambahkan class 'view' ketika elemen masuk viewport
          entry.target.classList.add('view');
          observer.unobserve(entry.target); // Optional: Hentikan observasi setelah animasi
        }
      });
    }, observerOptions);

    // Observasi elemen yang ingin dianimasikan
    if (imgElement) observer.observe(imgElement);
    if (headElement) observer.observe(headElement);
  });

  /*==================== read more services ====================*/
  document.addEventListener('DOMContentLoaded', function(){
    const btn = document.getElementById('btnServices');
    const div = document.getElementById('readServices');
    const divOp = document.querySelector('.div-opacity');
    
    btn.addEventListener('click', function() {
      div.classList.toggle('active');
      divOp.classList.add('active');
    });
  });
    
/*==================== read more services ====================*/
  document.addEventListener('DOMContentLoaded', function(){
    const btn = document.querySelector('.arrow-left');
    const div = document.getElementById('readServices');
    const divOp = document.querySelector('.div-opacity');
    
    btn.addEventListener('click', function() {
      div.classList.remove('active');
      divOp.classList.remove('active');
    });

    divOp.addEventListener('click', function() {
      div.classList.remove('active');
      divOp.classList.remove('active');
    })
  });

    /*==================== read more services ====================*/
    document.addEventListener('DOMContentLoaded', function(){
      const btn = document.getElementById('btnServices2');
      const div = document.getElementById('readServices2');
      const divOp = document.querySelector('.div-opacity');
      
      btn.addEventListener('click', function() {
        div.classList.toggle('active');
        divOp.classList.add('active');
      });
    });
      
  /*==================== read more services ====================*/
    document.addEventListener('DOMContentLoaded', function(){
      const btn = document.querySelector('.arrow-right');
      const div = document.getElementById('readServices2');
      const divOp = document.querySelector('.div-opacity');
      
      btn.addEventListener('click', function() {
        div.classList.remove('active');
        divOp.classList.remove('active');
      });

      divOp.addEventListener('click', function() {
        div.classList.remove('active');
        divOp.classList.remove('active');
      })
    });
  
  /*==================== form thanks html ====================*/

  const contactForm = document.getElementById("form");
contactForm.addEventListener("submit", function(e){
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method:"POST",
        body: formData,
        mode: "no-cors",
    }).then(() => {
        //url ty
        window.location.href="/thanks.html";
    })
    .catch((e) => alert("Error occured"));
});

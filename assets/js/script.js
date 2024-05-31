document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("current-date").innerHTML = new Date().getFullYear();

    // const loader = document.getElementById("loader")
    // setTimeout(() => {
    //     loader.classList.remove("show");
    // }, 1000);

    let url = location.pathname;

    if(url === '/patient-information') {
        document.getElementById("patient-information-lg-dropdown-link").classList.add('active');
        document.getElementById("patient-information-lg-link").classList.add('active');
        
    } else if (url === '/scheduling') {
        document.getElementById("patient-information-lg-dropdown-link").classList.add('active');
        document.getElementById("scheduling-lg-link").classList.add('active');
    }
    else if (url === '/offers') {
    document.getElementById("patient-information-lg-dropdown-link").classList.add('active');
    document.getElementById("offers-lg-link").classList.add('active');
    }

    else if (url === '/patient-education') {
        document.getElementById("patient-information-lg-dropdown-link").classList.add('active');
        document.getElementById("patient-education-dropdown-lg-link").classList.add('active');
        document.getElementById("patient-education-lg-link").classList.add('active');
    }

    else if (url === '/digital-impressions') {
        document.getElementById("patient-information-lg-dropdown-link").classList.add('active');
        document.getElementById("patient-education-dropdown-lg-link").classList.add('active');
        document.getElementById("digital-impressions-lg-link").classList.add('active');
        }


    else if (url === '/intraoral-camera') {
        document.getElementById("patient-information-lg-dropdown-link").classList.add('active');
        document.getElementById("patient-education-dropdown-lg-link").classList.add('active');
        document.getElementById("intraoral-camera-lg-link").classList.add('active');
        }

    
    else if (url === '/laser-dentistry') {
        document.getElementById("patient-information-lg-dropdown-link").classList.add('active');
        document.getElementById("patient-education-dropdown-lg-link").classList.add('active');
        document.getElementById("laser-dentistry-lg-link").classList.add('active');
    }

    
    else if (url === '/local-anesthesia') {
        document.getElementById("patient-information-lg-dropdown-link").classList.add('active');
        document.getElementById("patient-education-dropdown-lg-link").classList.add('active');
        document.getElementById("local-anesthesia-lg-link").classList.add('active');
    }

   
    else if (url === '/oral-cancer-screening') {
        document.getElementById("patient-information-lg-dropdown-link").classList.add('active');
        document.getElementById("patient-education-dropdown-lg-link").classList.add('active');
        document.getElementById("oral-cancer-screening-lg-link").classList.add('active');
    }
   
    else if (url === '/soft-tissue-laser-dentistry') {
        document.getElementById("patient-information-lg-dropdown-link").classList.add('active');
        document.getElementById("patient-education-dropdown-lg-link").classList.add('active');
        document.getElementById("soft-tissue-laser-dentistry-lg-link").classList.add('active');
    }

       
    else if (url === '/dental-services') {
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("medical-link-1").classList.add('active');
       
    }

       
    else if (url === '/emergency-dentistry') {
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("emergency-dentistry-lg-link").classList.add('active');
    }

       
    else if (url === '/general-dentist') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("general-dentist-lg-link").classList.add('active');
    }

    else if (url === '/air-abrasion') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("air-abrasion-lg-link").classList.add('active');
    }

    else if (url === '/dental-bridges') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("dental-bridges-lg-link").classList.add('active');
    }

    else if (url === '/crowns') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("crowns-lg-link").classList.add('active');
    }

    else if (url === '/dentures') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("dentures-lg-link").classList.add('active');
    }

    else if (url === '/fillings') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("fillings-lg-link").classList.add('active');
    }

    else if (url === '/fluoride-treatments') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("fluoride-treatments-lg-link").classList.add('active');
    }

    else if (url === '/inlays-&-onlays') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("inlays-&-onlays-lg-link").classList.add('active');
    }

    else if (url === '/nightguards') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("nightguards-lg-link").classList.add('active');
    }

    else if (url === '/dental-sealants') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("dental-sealants-lg-link").classList.add('active');
    }

    else if (url === '/sports-mouthguards') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("sports-mouthguards-lg-link").classList.add('active');
    }

    else if (url === '/teeth-cleanings') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("teeth-cleanings-lg-link").classList.add('active');
    }


    else if (url === '/meet-us') {
        document.getElementById("meet-dropdown-link").classList.add('active');
        document.getElementById("meet-lg-link").classList.add('active');
    }


    else if (url === '/smile-gallery') {
        document.getElementById("meet-dropdown-link").classList.add('active');
        document.getElementById("smile-gallery-lg-link").classList.add('active');
    }

    else if (url === '/patient-testimonials') {
        document.getElementById("meet-dropdown-link").classList.add('active');
        document.getElementById("patient-testimonials-lg-link").classList.add('active');
    }

    else if (url === '/contact') {
        document.getElementById("contact-link").classList.add('active');
    }

    else if (url === '/blog') {
        document.getElementById("blog-link").classList.add('active');
    }



 

    const smMenuBtn = document.getElementById("sm-navbar-btn");
    const burgerIcon = document.getElementById("burger-icon");
    const smMenu = document.getElementById("sm-menu");
    let smMenuIsOpen = false;

    smMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(smMenuIsOpen == false) {
            burgerIcon.classList.add('active');
            smMenu.classList.add('show');
            smMenuIsOpen = true;
        } else {
            burgerIcon.classList.remove('active');
            smMenu.classList.remove('show');
            smMenuIsOpen = false;
        }
    });


    const navBar = document.querySelector('.main-navbar');
    window.onscroll = () => {
        let scrollPos = window.scrollY  || document.documentElement.scrollTop;
        if(scrollPos > 75) {
            navBar.style.background = '#ffffff';
            navBar.style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.15)';
        } else {
            navBar.style.background = 'transparent';
            navBar.style.boxShadow = 'none';
        } 
    }

});


document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("current-date").innerHTML = new Date().getFullYear();

    const loader = document.getElementById("loader")
    setTimeout(() => {
        loader.classList.remove("show");
    }, 1000);

    let url = location.pathname;

    if(url === '/') {
        document.getElementById("home-lg-link").classList.add("active");
        document.getElementById("home-link").classList.add("active");
    }
    else if(url === '/patient-information') {
        document.getElementById("patient-information-lg-dropdown-link").classList.add('active');
        document.getElementById("patient-information-lg-link").classList.add('active');
        document.getElementById("patient-information-sm-link").classList.add('active');
        openAccordionSMMenu("patient-accordion-sm-btn", "collapsePatient"); 
    } 
    else if (url === '/scheduling') {
        document.getElementById("patient-information-lg-dropdown-link").classList.add('active');
        document.getElementById("scheduling-lg-link").classList.add('active');
        document.getElementById("scheduling-sm-link").classList.add('active');
        openAccordionSMMenu("patient-accordion-sm-btn", "collapsePatient");
      
    }
    else if (url === '/offers') {
        document.getElementById("patient-information-lg-dropdown-link").classList.add('active');
        document.getElementById("patient-education-dropdown-lg-link").classList.add('active');
        document.getElementById("offers-lg-link").classList.add('active');
        document.getElementById("offers-sm-link").classList.add('active');
        openAccordionSMMenu("patient-accordion-sm-btn", "collapsePatient");
        
    }

    else if (url === '/patient-education') {
        document.getElementById("patient-information-lg-dropdown-link").classList.add('active');
        document.getElementById("patient-education-dropdown-lg-link").classList.add('active');
        document.getElementById("patient-education-lg-link").classList.add('active');
        document.getElementById("patient-education-sm-link").classList.add('active');
        openAccordionSMMenu("patient-accordion-sm-btn", "collapsePatient");
        openAccordionSMMenu("PatientEducation-accordion-sm-btn", "collapsePatientEducation"); 
    }

    else if (url === '/digital-impressions') {
        document.getElementById("patient-information-lg-dropdown-link").classList.add('active');
        document.getElementById("patient-education-dropdown-lg-link").classList.add('active');
        document.getElementById("digital-impressions-lg-link").classList.add('active');
        document.getElementById("digital-impressions-sm-link").classList.add('active');
        openAccordionSMMenu("patient-accordion-sm-btn", "collapsePatient");
        openAccordionSMMenu("PatientEducation-accordion-sm-btn", "collapsePatientEducation"); 
        }


    else if (url === '/intraoral-camera') {
        document.getElementById("patient-information-lg-dropdown-link").classList.add('active');
        document.getElementById("patient-education-dropdown-lg-link").classList.add('active');
        document.getElementById("intraoral-camera-lg-link").classList.add('active');
        document.getElementById("intraoral-camera-sm-link").classList.add('active');
        openAccordionSMMenu("patient-accordion-sm-btn", "collapsePatient");
        openAccordionSMMenu("PatientEducation-accordion-sm-btn", "collapsePatientEducation"); 
        }

    
    else if (url === '/laser-dentistry') {
        document.getElementById("patient-information-lg-dropdown-link").classList.add('active');
        document.getElementById("patient-education-dropdown-lg-link").classList.add('active');
        document.getElementById("laser-dentistry-lg-link").classList.add('active');
        document.getElementById("laser-dentistry-sm-link").classList.add('active');
        openAccordionSMMenu("patient-accordion-sm-btn", "collapsePatient");
        openAccordionSMMenu("PatientEducation-accordion-sm-btn", "collapsePatientEducation"); 
    }

    
    else if (url === '/local-anesthesia') {
        document.getElementById("patient-information-lg-dropdown-link").classList.add('active');
        document.getElementById("patient-education-dropdown-lg-link").classList.add('active');
        document.getElementById("local-anesthesia-lg-link").classList.add('active');
        document.getElementById("local-anesthesia-sm-link").classList.add('active');
        openAccordionSMMenu("patient-accordion-sm-btn", "collapsePatient");
        openAccordionSMMenu("PatientEducation-accordion-sm-btn", "collapsePatientEducation"); 
    }

   
    else if (url === '/oral-cancer-screening') {
        document.getElementById("patient-information-lg-dropdown-link").classList.add('active');
        document.getElementById("patient-education-dropdown-lg-link").classList.add('active');
        document.getElementById("oral-cancer-screening-lg-link").classList.add('active');
        document.getElementById("oral-cancer-screening-sm-link").classList.add('active');
        openAccordionSMMenu("patient-accordion-sm-btn", "collapsePatient");
        openAccordionSMMenu("PatientEducation-accordion-sm-btn", "collapsePatientEducation"); 
    }
   
    else if (url === '/soft-tissue-laser-dentistry') {
        document.getElementById("patient-information-lg-dropdown-link").classList.add('active');
        document.getElementById("patient-education-dropdown-lg-link").classList.add('active');
        document.getElementById("soft-tissue-laser-dentistry-lg-link").classList.add('active');
        document.getElementById("soft-tissue-laser-dentistry-sm-link").classList.add('active');
        openAccordionSMMenu("patient-accordion-sm-btn", "collapsePatient");
        openAccordionSMMenu("PatientEducation-accordion-sm-btn", "collapsePatientEducation"); 
    }

       
    else if (url === '/dental-services') {
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("medical-link-1").classList.add('active');
        document.getElementById("dentel-information-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        
       
    }

       
    else if (url === '/emergency-dentistry') {
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("emergency-dentistry-lg-link").classList.add('active');
        document.getElementById("emergency-dentistry-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        
    }

       
    else if (url === '/general-dentist') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("general-dentist-lg-link").classList.add('active'); 
        document.getElementById("general-dentist-sm-link").classList.add('active');
      
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("GeneralDentistry-accordion-sm-btn", "collapseGeneralDentistry");
       
    }

    else if (url === '/air-abrasion') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("air-abrasion-lg-link").classList.add('active');
        document.getElementById("air-abrasion-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("GeneralDentistry-accordion-sm-btn", "collapseGeneralDentistry");
    }

    else if (url === '/dental-bridges') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("dental-bridges-lg-link").classList.add('active');
        document.getElementById("dental-bridges-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("GeneralDentistry-accordion-sm-btn", "collapseGeneralDentistry");
    }

    else if (url === '/crowns') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("crowns-lg-link").classList.add('active');
        document.getElementById("crowns-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("GeneralDentistry-accordion-sm-btn", "collapseGeneralDentistry");
    }

    else if (url === '/dentures') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("dentures-lg-link").classList.add('active');
        document.getElementById("dentures-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("GeneralDentistry-accordion-sm-btn", "collapseGeneralDentistry");
    }

    else if (url === '/fillings') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("fillings-lg-link").classList.add('active');
        document.getElementById("fillings-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("GeneralDentistry-accordion-sm-btn", "collapseGeneralDentistry");
    }

    else if (url === '/fluoride-treatments') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("fluoride-treatments-lg-link").classList.add('active');
        document.getElementById("fluoride-treatments-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("GeneralDentistry-accordion-sm-btn", "collapseGeneralDentistry");
    }

    else if (url === '/inlays-and-onlays') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("inlays-and-onlays-lg-link").classList.add('active');
        document.getElementById("inlays-and-onlays-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("GeneralDentistry-accordion-sm-btn", "collapseGeneralDentistry");
    }

    else if (url === '/nightguards') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("nightguards-lg-link").classList.add('active');
        document.getElementById("nightguards-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("GeneralDentistry-accordion-sm-btn", "collapseGeneralDentistry");
    }

    else if (url === '/dental-sealants') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("dental-sealants-lg-link").classList.add('active');
        document.getElementById("dental-sealants-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("GeneralDentistry-accordion-sm-btn", "collapseGeneralDentistry");
    }

    else if (url === '/sports-mouthguards') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("sports-mouthguards-lg-link").classList.add('active');
        document.getElementById("sports-mouthguards-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("GeneralDentistry-accordion-sm-btn", "collapseGeneralDentistry");
    }

    else if (url === '/teeth-cleanings') {
        document.getElementById("general-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("teeth-cleanings-lg-link").classList.add('active');
        document.getElementById("teeth-cleanings-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("GeneralDentistry-accordion-sm-btn", "collapseGeneralDentistry");
    }

    else if (url === '/cosmetic-dentist') {
        document.getElementById("cosmetic-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("cosmetic-dentist-lg-link").classList.add('active');
        document.getElementById("cosmetic-dentist-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("CosmeticDentistry-accordion-sm-btn", "collapseCosmeticDentistry");
    }

    else if (url === '/dental-bonding') {
        document.getElementById("cosmetic-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("dental-bonding-lg-link").classList.add('active');
        document.getElementById("dental-bonding-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("CosmeticDentistry-accordion-sm-btn", "collapseCosmeticDentistry");
    }

    else if (url === '/smile-makeover-consultation') {
        document.getElementById("cosmetic-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("smile-makeover-consultation-lg-link").classList.add('active');
        document.getElementById("smile-makeover-consultation-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("CosmeticDentistry-accordion-sm-btn", "collapseCosmeticDentistry");
    }

    else if (url === '/teeth-whitening') {
        document.getElementById("cosmetic-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("teeth-whitening-lg-link").classList.add('active');
        document.getElementById("teeth-whitening-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("CosmeticDentistry-accordion-sm-btn", "collapseCosmeticDentistry");
    }

    else if (url === '/veneers') {
        document.getElementById("cosmetic-dentist-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("veneers-lg-link").classList.add('active');
        document.getElementById("veneers-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("CosmeticDentistry-accordion-sm-btn", "collapseCosmeticDentistry");
    }

    else if (url === '/orthodontist') {
        document.getElementById("orthodontics-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("orthodontics-lg-link").classList.add('active');
        document.getElementById("orthodontist-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("Orthodontics-accordion-sm-btn", "collapseOrthodontics");
    }

    else if (url === '/invisalign') {
        document.getElementById("orthodontics-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("invisalign-lg-link").classList.add('active');
        document.getElementById("invisalign-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("Orthodontics-accordion-sm-btn", "collapseOrthodontics");
    }


    else if (url === '/metal-braces') {
        document.getElementById("orthodontics-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("metal-braces-lg-link").classList.add('active');
        document.getElementById("metal-braces-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("Orthodontics-accordion-sm-btn", "collapseOrthodontics");
    }


    else if (url === '/suresmile') {
        document.getElementById("orthodontics-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("suresmile-lg-link").classList.add('active');
        document.getElementById("suresmile-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("Orthodontics-accordion-sm-btn", "collapseOrthodontics");
    }

    else if (url === '/endodontics') {
        document.getElementById("endodontics-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("endodontics-lg-link").classList.add('active');
        document.getElementById("endodontics-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("endodontics-accordion-sm-btn", "collapseEndodontics");
    }

    else if (url === '/root-canal-therapy') {
        document.getElementById("endodontics-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("root-canal-therapy-lg-link").classList.add('active');
        document.getElementById("root-canal-therapy-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("endodontics-accordion-sm-btn", "collapseEndodontics");
    }
    
    else if (url === '/oral-surgery') {
        document.getElementById("oral-surgery-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("oral-surgery-lg-link").classList.add('active');
        document.getElementById("oral-surgery-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("oral-surgery-accordion-sm-btn", "collapseOral-Surgery");
    }

    else if (url === '/bone-grafting') {
        document.getElementById("oral-surgery-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("bone-grafting-lg-link").classList.add('active');
        document.getElementById("bone-grafting-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("oral-surgery-accordion-sm-btn", "collapseOral-Surgery");
    }

    else if (url === '/dental-implants') {
        document.getElementById("oral-surgery-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("dental-implants-lg-link").classList.add('active');
        document.getElementById("dental-implants-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("oral-surgery-accordion-sm-btn", "collapseOral-Surgery");
    }


    else if (url === '/implant-supported-bridges') {
        document.getElementById("oral-surgery-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("implant-supported-bridges-lg-link").classList.add('active');
        document.getElementById("implant-supported-bridges-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("oral-surgery-accordion-sm-btn", "collapseOral-Surgery");
    }


    else if (url === '/tooth-extractions') {
        document.getElementById("oral-surgery-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("tooth-extractions-lg-link").classList.add('active');
        document.getElementById("tooth-extractions-sm-link").classList.add('active');
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
        openAccordionSMMenu("oral-surgery-accordion-sm-btn", "collapseOral-Surgery");
    }
    
    else if (url === '/childrens-dentistry') {
        document.getElementById("childrens-dentistry-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("childrens-dentistry-lg-link").classList.add('active');
        document.getElementById("children-sm-link").classList.add('active');
        openAccordionSMMenu("children-accordion-sm-btn", "collapsechildren");
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
    }

    else if (url === '/first-exam') {
        document.getElementById("childrens-dentistry-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("first-exam-lg-link").classList.add('active');
        document.getElementById("first-exam-sm-link").classList.add('active');
        openAccordionSMMenu("children-accordion-sm-btn", "collapsechildren");
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
    }

    
   else if (url === '/children-and-orthodontics') {
        document.getElementById("childrens-dentistry-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("children-and-orthodontics-lg-link").classList.add('active');
        document.getElementById("children-and-orthodontics-sm-link").classList.add('active');
        openAccordionSMMenu("children-accordion-sm-btn", "collapsechildren");
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
    }

    else if (url === '/periodontics') {
        document.getElementById("periodontics-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("periodontics-lg-link").classList.add('active');
        document.getElementById("periodontics-sm-link").classList.add('active');
        openAccordionSMMenu("periodontics-accordion-sm-btn", "collapseperiodontics");
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
    }

    else if (url === '/gum-disease') {
        document.getElementById("periodontics-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("gum-disease-lg-link").classList.add('active');
        document.getElementById("gum-disease-sm-link").classList.add('active');
        openAccordionSMMenu("periodontics-accordion-sm-btn", "collapseperiodontics");
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
    }

    else if (url === '/scaling-and-root-planing') {
        document.getElementById("periodontics-lg-dropdown-link").classList.add('active');
        document.getElementById("dental-dropdown-link").classList.add('active');
        document.getElementById("scaling-and-root-planing-lg-link").classList.add('active');
        document.getElementById("scaling-and-root-planing-sm-link").classList.add('active');
        openAccordionSMMenu("periodontics-accordion-sm-btn", "collapseperiodontics");
        openAccordionSMMenu("dentel-accordion-sm-btn", "collapsedentel");
    }

    else if (url === '/meet-us') {
        document.getElementById("meet-dropdown-link").classList.add('active');
        document.getElementById("meet-lg-link").classList.add('active');
        document.getElementById("meet-overview-sm-link").classList.add('active');
        openAccordionSMMenu("meet-accordion-sm-btn", "collapseMeet");
    }


    else if (url === '/smile-gallery') {
        document.getElementById("meet-dropdown-link").classList.add('active');
        document.getElementById("smile-gallery-lg-link").classList.add('active');
        document.getElementById("smile-gallery-sm-link").classList.add('active');
        openAccordionSMMenu("meet-accordion-sm-btn", "collapseMeet");
    }

    else if (url === '/patient-testimonials') {
        document.getElementById("meet-dropdown-link").classList.add('active');
        document.getElementById("patient-testimonials-lg-link").classList.add('active');
        document.getElementById("patient-testimonials-sm-link").classList.add('active');
        openAccordionSMMenu("meet-accordion-sm-btn", "collapseMeet");
    }

    else if (url === '/contact') {
        document.getElementById("contact-link").classList.add('active');
        document.getElementById("sm-contact-link").classList.add('active');

    }

    else if (url === '/blog') {
        document.getElementById("blog-link").classList.add('active');
        document.getElementById("sm-blog-link").classList.add('active');
    }


    function openAccordionSMMenu(btnID, bodyID) {
        document.getElementById(btnID).classList.remove("collapsed");
        document.getElementById(bodyID).classList.add("show");
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


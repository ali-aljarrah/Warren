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


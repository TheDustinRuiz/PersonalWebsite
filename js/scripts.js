/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Redirects linkedin icon to LinkedIn website
const linkedinIcon = document.getElementById("linkedin-icon");
linkedinIcon.addEventListener("click", function () {
    window.location.href = "https://www.linkedin.com/in/dustinruiz/";
});

// Redirects github icon to Github website
const githubIcon = document.getElementById("github-icon");
githubIcon.addEventListener("click", function () {
    window.location.href = "https://github.com/thedustinruiz";
});

// Redirects instagram icon to Instagram account
const instagramIcon = document.getElementById("instagram-icon");
instagramIcon.addEventListener("click", function () {
    window.location.href = "https://instagram.com/thedustinruiz?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr";
});

// Redirects facebook icon to Facebook account
const facebookIcon = document.getElementById("facebook-icon");
facebookIcon.addEventListener("click", function () {
    window.location.href = "https://www.facebook.com/thedustinruiz/";
});
// Navigation & Search Bar Handling
function show() {
    var searchBar = document.getElementById('s-bar');
    if (searchBar) {
        searchBar.classList.toggle('active');
        if (searchBar.classList.contains('active')) {
            searchBar.focus();
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var navToggle = document.getElementById('nav-toggle');
    var navMenu = document.getElementById('nav-menu');
    var facBtn = document.getElementById('fac-btn');
    var facLi = document.querySelector('.fac-but');

    // Mobile navigation drawer toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('open');
            var icon = navToggle.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('open')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close mobile menu when clicking any navigation link (except the faculties submenu trigger)
        var navLinks = navMenu.querySelectorAll('a:not(#fac-btn)');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                if (window.innerWidth <= 1024) {
                    navMenu.classList.remove('open');
                    var icon = navToggle.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-xmark');
                        icon.classList.add('fa-bars');
                    }
                }
            });
        });
    }

    // Toggle faculties dropdown on mobile click
    if (facBtn && facLi) {
        facBtn.addEventListener('click', function (e) {
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                facLi.classList.toggle('active');
            }
        });
    }

    // Search bar enter key handling
    var searchBar = document.getElementById('s-bar');
    if (searchBar) {
        searchBar.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                var keyword = searchBar.value.trim();
                if (keyword !== '') {
                    var searchUrl = 'https://uom.lk/search/node?keys=' + encodeURIComponent(keyword);
                    window.location.href = searchUrl;
                    searchBar.value = '';
                    searchBar.classList.remove('active');
                } else {
                    searchBar.classList.remove('active');
                    searchBar.value = '';
                }
            }
        });
    }
});

// Newsletter Email Form Validation
function validateForm() {
    var emailInput = document.getElementById('mail');
    var space = document.getElementById('info');

    if (!emailInput || !space) return false;

    var email = emailInput.value.trim();

    if (email === '') {
        space.innerHTML = "Can't be Blank";
        space.style.color = 'red';
        return false;
    } else if (email.includes('@') && email.includes('.')) {
        space.innerHTML = 'Thank you!';
        space.style.color = '#38b000';
        emailInput.value = '';
        return false; // prevent page refresh
    } else {
        space.innerHTML = 'Please enter a valid email';
        space.style.color = 'red';
        return false;
    }
}

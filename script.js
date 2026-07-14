window.addEventListener('DOMContentLoaded', function () {
    var loginBtn = document.getElementById('login-btn');
    var overlay = document.getElementById('login-overlay');
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var errorMsg = document.getElementById('error-msg');

    // --- 1. BLOCK SCROLLING IMMEDIATELY ON LOAD ---
    if (overlay && overlay.style.display !== 'none') {
        document.body.style.overflow = 'hidden';
    }

    function checkCredentials() {
        var user = usernameInput.value.trim();
        var pass = passwordInput.value;

        if (user === 'admin' && pass === 'uom') {
            // Remove the blocking window from view
            overlay.style.display = 'none';
            
            // --- 2. ALLOW SCROLLING AGAIN ---
            document.body.style.overflow = 'unset'; 
        } else {
            // Show error message and clear password field
            errorMsg.style.display = 'block';
            passwordInput.value = '';
            passwordInput.focus();
        }
    }

    // Trigger check on button click
    if (loginBtn) {
        loginBtn.addEventListener('click', checkCredentials);
    }

    // Trigger check if user presses 'Enter' inside the password field
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkCredentials();
            }
        });
    }
});










function show() {
    // 1. Correct syntax to change styles and fix the 'display' typo
    document.getElementById('s-bar').style.display = 'block';
    document.getElementById('name').style.display = 'none';
    document.getElementById('s-bar').style.transition = '0.3s ease';
    document.getElementById('search').style.transition = '0.3s ease';
    // 2. Correct syntax to update margin and added the 'px' unit
    document.getElementById('search').style.right = '430px';
}
window.addEventListener('DOMContentLoaded', function () {
    var searchBar = document.getElementById('s-bar');
    var searchIcon = document.getElementById('search');
    
    if (searchBar) {
        searchBar.addEventListener('keypress', function(e) {
            if (e.key === 'Enter')  {
                e.preventDefault(); // Prevents the page from refreshing automatically
                
                // 1. Get the searched keyword
                var keyword = searchBar.value.trim();
                
                // 2. Only redirect if the user actually typed something
                if (keyword !== '') {
                    // encodeURIComponent ensures spaces/special characters don't break the URL
                    var searchUrl = 'https://uom.lk/search/node?keys=' + encodeURIComponent(keyword);
                    window.location.href = searchUrl;
                    document.getElementById('name').style.display = 'block';
                    searchIcon.style.transition = '0.3s ease';
                    searchBar.value = ''; 
                    searchBar.style.display = 'none';
                    searchIcon.style.right = '20px';
                } else {
                    // Optional: If they pressed enter on an empty bar, just close it
                    searchBar.style.display = 'none';
                    searchIcon.style.right = '20px'; // Added 'px' units to fix standard CSS compliance
                    document.getElementById('name').style.display = 'block';
                    searchIcon.style.transition = '0.3s ease';
                    searchBar.value = ''; 
                }
            }
        });
    }
});
function showwindow() {
        document.getElementById("window").style.display = "block";
        document.getElementById("window").style.transition = "all 0.3s ease";
    }

    function hide() {
        document.getElementById("window").style.display = "none";
        document.getElementById("window").style.transition = "all 0.3s ease";
    }

function validateForm() {

    var emailInput = document.getElementById("mail");
    var email = emailInput.value;
    var space = document.getElementById('info');

    if (email == "") {
        space.innerHTML = "Can't be Blank";
        space.style.color = "red";
        return false;
    }
    else if (email.includes('@') && email.includes('.')) {
        space.innerHTML = "Thank you!";
        space.style.color = "green";
        emailInput.value = ""; // clear the input box
        return true;
    }
    else {
        space.innerHTML = "Please enter a valid email";
        space.style.color = "red";
        return false;
    }
}
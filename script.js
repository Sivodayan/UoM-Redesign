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
                searchBar.style.display = 'none';
                searchIcon.style.right = '20';
                document.getElementById('name').style.display = 'block';
                searchIcon.style.transition='0.3s ease'
                
                // (Optional) Clear the text inside the input after closing
                searchBar.value = ''; 
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
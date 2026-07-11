function show() {
    // 1. Correct syntax to change styles and fix the 'display' typo
    document.getElementById('s-bar').style.display = 'block';
    document.getElementById('name').style.display = 'none';
    document.getElementById('s-bar').style.transition = '0.3s ease';
    document.getElementById('search').style.transition = '0.3s ease';
    // 2. Correct syntax to update margin and added the 'px' unit
    document.getElementById('search').style.marginLeft = '680px';
}

window.addEventListener('DOMContentLoaded', function() {
    var searchBar = document.getElementById('s-bar');
    var searchIcon = document.getElementById('search');
    
    if (searchBar) {
        searchBar.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault(); // Prevents the page from refreshing automatically
                searchBar.style.display = 'none';
                searchIcon.style.marginLeft = '80';
                document.getElementById('name').style.display = 'block';
                searchIcon.style.transition='0.3s ease'
                
                // (Optional) Clear the text inside the input after closing
                searchBar.value = ''; 
            }
        });
    }
});
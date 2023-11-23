function toggleNav() {
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('show');
}

function toggleSearch() {
    var searchInput = document.querySelector('.search-input');
    searchInput.style.display = (searchInput.style.display === 'none' || searchInput.style.display === '') ? 'block' : 'none';
}
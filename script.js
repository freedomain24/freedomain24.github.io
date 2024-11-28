function searchDomain() {
    const query = document.getElementById('searchInput').value;
    if (query) {
        alert(`البحث عن الدومين: ${query}`);
    } else {
        alert('يرجى إدخال نص للبحث');
    }
}
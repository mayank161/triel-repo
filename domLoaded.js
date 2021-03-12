
// that concept focuses how script run before any html loaded
// we have to write "DOMContentLoaded" in events to run this functionality.

console.log(localStorage.getItem('Branch'));
var p = localStorage.getItem('Branch');

document.addEventListener("DOMContentLoaded", function(e) {
    e.preventDefault();
    const mytitle = document.getElementById('loaded');
    mytitle.innerHTML = '<script> document.write(p) </script>';
});


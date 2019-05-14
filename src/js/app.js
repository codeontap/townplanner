var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.parentElement.classList.toggle("active");
    });
}




document.getElementById('hamburger-menu').onclick = function() {
    var nf = document.getElementById('mobile-menu');

    // Show and hide menu items when toggle is clicked
    if(nf.style.display==='none') {
        nf.style.display = 'block';
    }
    else {
        nf.style.display = 'none';
    }
};

window.addEventListener('click', function(e){
    if (!document.getElementById('mobile-menu-wrapper').contains(e.target)){
        document.getElementById('mobile-menu').style.display= 'none';
    }
});
function activeLink(that){
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    that.className += " active";
}

function activateNavLinks(){
    let container = document.getElementById("navLinks");
    let links = container.getElementsByClassName("nav-link");
    for(let i = 0; i < links.length; i++){
        links[i].addEventListener("click", function(){
            activeLink(this);
        });
    }
}

window.onload = activateNavLinks;
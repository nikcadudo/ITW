function changeProject(e, project){
    var i, tabcontent, btns;

    tabcontent = document.getElementsByClassName("project");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    btns = document.getElementsByTagName("button")
    for (i = 0; i < btns.length; i++) {
        btns[i].className = btns[i].className.replace(" active", "");
    }

    document.getElementById(project).style.display = "block";
    e.currentTarget.className += " active";
}

function showMenu(){
    var x = document.getElementsByClassName("navbar-nav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
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
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
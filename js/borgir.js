function dropMenu() {
    var x = document.getElementById("navigation-mobile");
    if (x.className === "navtop") {
      x.className += " responsive";
    } else {
      x.className = "navtop";
    }
  }
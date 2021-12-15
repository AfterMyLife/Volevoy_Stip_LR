function fucn() {
  var image1 = document.getElementById("image1");
  var image2 = document.getElementById("image2");
  var rel = image1.src;
  image1.src = image2.src;
  image2.src = rel;
}

function myFunction() {
  for (var i = 1; i < 9; i++) {
    document.getElementById("myDropdown" + i).classList.toggle("show");
  }

}

// выход снаружи
window.onmouseleave = function (e) {
  for (var i = 1; i < 9; i++) {
    console.log(i);
    if (!e.target.matches('.dropbtn' + i)) {
      var myDropdown = document.getElementById("myDropdown" + i);
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

}
var main = document.getElementById("main");

document.getElementById("menu_mobile").addEventListener("change", function (e) {
  if (e.target.checked == false) {
    console.log('true');
    main.style.marginTop = "58px";
  } else {
    main.style.marginTop = "0px";
  }
});

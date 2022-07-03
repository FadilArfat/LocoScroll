const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

var dt = new Date();
document.getElementById("date-time").innerHTML = dt.toDateString();

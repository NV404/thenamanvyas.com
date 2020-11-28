function about() {
  document.getElementById("animate").style.top = "0%";
  setTimeout(function () {
    document.getElementById("aboutpage").style.top = "0%";
  }, 500);
  setTimeout(function () {
    document.getElementById("animate").style.top = "-300%";
  }, 1000);
}

function aboutclose() {
  document.getElementById("animate").style.top = "0%";
  setTimeout(function () {
    document.getElementById("aboutpage").style.top = "-300%";
  }, 500);
  setTimeout(function () {
    document.getElementById("animate").style.top = "-300%";
  }, 1000);
}


$("input[name$='skill']").click(function () {
  var skillval = $(this).val();
  if (skillval == "skills") {
    $(".detail").html("<h2>Web programming</h2><h2>UI design</h2><h2>Hosting</h2><h2>SEO</h2><h2>Analytics</h2><h2>Version control/GIT</h2>")
  }
  if (skillval == "interest") {
    $(".detail").html("<h2>Game development</h2><h2>Video games</h2><h2>New technologies</h2><h2>Music</h2><h2>Photography</h2>")
  }
  if (skillval == "languages") {
    $(".detail").html("<h2>HTML</h2><h2>CSS</h2><h2>JavaScript</h2><h2>Python</h2><h2>PHP</h2><h2>C/C++</h2><h2>C#</h2><h2>C#</h2><h2>MySQL</h2>")
  }
});


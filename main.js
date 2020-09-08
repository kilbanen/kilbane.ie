var currentHue = 0, hueAddition = 5, nextHue, name = document.getElementById("name");
function colourChange() {
  var colour = "hsl(" + currentHue + ", 80%, 60%)";
  nextHue = currentHue + hueAddition;
  currentHue = nextHue > 360 ? 0 : nextHue;
  document.getElementById("name").style.color = colour;
}

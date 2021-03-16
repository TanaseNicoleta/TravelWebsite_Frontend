document.getElementById("homePage").onload = function() {loadHome()};
function loadHome() {
  var paragraphs = document.getElementsByTagName("p");
  var linkArray = ["Europe.html","MiddleEast.html", "Africa.html", "NorthAmerica.html", "SouthAmerica.html"];
  for(var i = 0; i < paragraphs.length; i++)
    {
      var linkText = "more";
      var link = linkText.link(linkArray[i]);
      paragraphs[i].innerHTML=paragraphs[i].innerHTML.substring(0, 180)+"..."+link;

    }
}
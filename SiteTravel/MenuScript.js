document.addEventListener("scroll", scrollPage);
function scrollPage() {
    var topDistance=document.documentElement.scrollTop;
    if(topDistance>80) {
       navigation.classList.add("sticky");
    } else {
       navigation.classList.remove("sticky");
    }
}
//fa sagetica button onclick--->dropdown


var score = 0;
function updatescore() {
    score = score + 1;
    document.getElementById("score").innerHTML = "SCORE:" + score;

}

function savescore() {
    localStorage.setItem("Score", score);

}
function nextpage() {
     
    windows.location="activity_2.html"


}

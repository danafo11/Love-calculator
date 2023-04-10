var betterLove = new Audio("Audio/Burna_Boy_-_For_My_Hand_Ft_Ed_Sheeran_042jam.com.mp3");
var averageLove = new Audio("Audio/Pink-Sweats-At-My-Worst-(TrendyBeatz.com).mp3");
var poorLove = new Audio("Audio/Sorry.mp3")
function lovePercent() {
    var partialOne = document.getElementById("yourName").value;
    var partialTwo = document.getElementById("crushName").value;

    display.innerHTML = Math.round(Math.random()*100);
    if (partialOne == "DANAFO" || partialTwo == "DANAFO") {
        var partialOne = ""
        var partialTwo = ""
        display.innerHTML = "Your love percentage is 100%, have a wonderful relationship ahead, enjoy this song as the relationship commence."
        betterLove.play();
    } else if (partialOne == "" || partialTwo == "") {
        display.innerHTML = `Please enter your names appropriately.`
    } else if (display.innerHTML >= 70 && display.innerHTML <= 100) {
        var partialOne = ""
        var partialTwo = ""
        display.innerHTML = `Your love percentage is ${display.innerHTML}%, have a wonderful relationship ahead, enjoy this song as the relationship commence.`
        betterLove.play();
            
    } else if (display.innerHTML >= 50 && display.innerHTML < 70) {
        var partialOne = ""
        var partialTwo = ""
        display.innerHTML = `Your love percentage is ${display.innerHTML}%, you can still make it, you can be using this song to strengthen the relationship overtime.`
        averageLove.play();
        } else if (display.innerHTML < 50) {
        var partialOne = ""
        var partialTwo = ""
        display.innerHTML = `Your love percentage is ${display.innerHTML}%, your relationship will crash, please do well to find another love.`
        poorLove.play();
        }
    } 

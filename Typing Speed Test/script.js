let startTime;

function startTest(){

    startTime = new Date().getTime();

    document.getElementById("result").innerHTML =
    "⌛ Typing Test Started...";
}

function checkSpeed(){

    let endTime =
    new Date().getTime();

    let totalTime =
    (endTime - startTime) / 1000;

    let text =
    document.getElementById("inputText").value;

    let words =
    text.trim().split(" ").length;

    let speed =
    Math.round((words / totalTime) * 60);

    if(text == ""){

        document.getElementById("result").innerHTML =
        "⚠ Please type something";

        return;
    }

    document.getElementById("result").innerHTML =
    "🚀 Typing Speed : "
    + speed +
    " WPM";
}
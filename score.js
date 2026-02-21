let button = document.getElementById("checkBtn");

button.addEventListener("click", function(e){
    e.preventDefault();

    let score1 = Number(document.getElementById("score1").value);
    let score2 = Number(document.getElementById("score2").value);
    let score3 = Number(document.getElementById("score3").value);
    let sum = score1 + score2 + score3;

    let result = document.getElementById("result");
    let studentName = document.getElementById("studentName").value;

    // Show grade
    if(sum >= 100){
        result.textContent = `${studentName}, You are Grade A`;
        result.style.color = "green";
    }
    else if(sum >= 70){
        result.textContent = `${studentName}, You are Grade B`;
        result.style.color = "orange";
    }
    else{
        result.textContent = `${studentName}, You failed the exam`;
        result.style.color = "red";
    }


});
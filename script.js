
let button = document.querySelector("button");


button.onclick = function() {

    let scale = document.querySelector(".input1").value;
    let training = document.querySelector(".input2").value;
    let result = document.querySelector(".result");

    if (scale === 5 && training === "look better") {
        result.innerHTML = "correct";
    }
console.log(scale);
};

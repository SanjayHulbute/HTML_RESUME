let change = document.getElementById("button");
console.log(change);
let main = document.getElementById("main");
console.log(main);

change.addEventListener("click", changetheme);
function changetheme(){
    console.log("changedtheme") ;
    main.style.backgroundColor = "orange";
}



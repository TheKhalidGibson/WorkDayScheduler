
let container1 = document.querySelector("#container1");


container1.addEventListener("click", function(event){


    if(event.target.matches("button")){

        console.log(event.target.textContent.trim())
    }
})


let container2 = document.querySelector("#container2");

container2.addEventListener("click", function(event){


    if(event.target.matches("div")){

        event.target.style.backgroundColor = event.target.textContent;
    }
})

let container3 = document.querySelector("#container3");

container3.addEventListener("click", function(event){


    if(event.target.matches("h1")){

        if(event.target.textContent.trim() === "hidden name")
         event.target.textContent = event.target.getAttribute("data-name");
        else
        event.target.textContent ="hidden name";
 }
})
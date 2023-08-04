//These are the calls for each hour that will be displayed in the scheduler. 

let hour9 = document.querySelector("#hour-9")
let hour10 = document.querySelector("#hour-10")
let hour11 = document.querySelector("#hour-11")
let hour12 = document.querySelector("#hour-12")
let hour13 = document.querySelector("#hour-13")
let hour14 = document.querySelector("#hour-14")
let hour15 = document.querySelector("#hour-15")
let hour16 = document.querySelector("#hour-16")
let hour17 = document.querySelector("#hour-17")

//this particular call refers to the entire container that holds each hour
let containerMain = document.querySelector("#containerMain")


// for loop over all text areas
// may have to worry about what if no key for current text area
    // each text area check local storage for any saved value
    // put saved value in textarea



    

    //these querySelectors are paired with the localStorage.getItem in order to retrieve the data and retain it on refresh
    


     
    
       document.querySelectorAll("textarea")[0].value = localStorage.getItem("9");
       document.querySelectorAll("textarea")[1].value = localStorage.getItem("10");
       document.querySelectorAll("textarea")[2].value = localStorage.getItem("11");
       document.querySelectorAll("textarea")[3].value = localStorage.getItem("12");
       document.querySelectorAll("textarea")[4].value = localStorage.getItem("13");
       document.querySelectorAll("textarea")[5].value = localStorage.getItem("14");
       document.querySelectorAll("textarea")[6].value = localStorage.getItem("15");
       document.querySelectorAll("textarea")[7].value = localStorage.getItem("16");
       document.querySelectorAll("textarea")[8].value = localStorage.getItem("17");


        
      
    
   
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//

let temp1 = "saveBtn"
let time = "hour"

// this event listener saves data
containerMain.addEventListener("click", function (event) {


  if (event.target.matches("button")) {

    let hourClicked = event.target.getAttribute("data-time");

      console.log("hour clicked", typeof hourClicked)

    let hourTa = event.target.previousElementSibling


      console.log("hour Ta", hourTa.value)

    localStorage.setItem(hourClicked, hourTa.value)
    
    
  } 

  //attempting to recreate the storing process for the i class.. the fa fa save icon

  else if (event.target.matches("i")){

   
   
    
    localStorage.setItem(temp1.dataset.time, temp1.parentElement.previousElementSibling.value)


  }

    // let temp1 = event.target.getAttribute("9")

    // temp1.parentElement.previousElementSibling.value

    


  

})


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

    // if (parseInt(document.querySelectorAll(".row")[i].dataset.time) < dayjs().hour()){



    // };

  



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  let date = dayjs().format('dddd, MMMM D, YYYY');
$('#currentDay').text(date);
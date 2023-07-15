// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = document.getElementById("currentDay")
var now = dayjs().format('dddd, MMMM D')




$(document).ready(function(){
  
  var currentHour = parseInt(dayjs().format('H'));
  today.innerHTML = now
  function currentTime(){
    $(".time-block").each(function(){
      const hour = parseInt(this.id);
      console.log("HOUR: ", hour)
      $(this).toggleClass("time-block past", hour < currentHour)
      $(this).toggleClass("time-block present", hour === currentHour)
      $(this).toggleClass("time-block future", hour > currentHour)
    });
  } 

 

    function save(){
      $('.saveBtn').on('click',function(){
        const userInput = $(this).siblings('.description').val();
        const key = $(this).parent().attr('id');
        localStorage.setItem(key , userInput);
      })
    }

    $('.time-block').each(function(){
      const key = $(this).attr('id');
      const userInput = localStorage.getItem(key);
      $(this).children('.description').val(userInput);
    });
  currentTime();
  save();

  
})

 










  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


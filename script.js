
// DEPENDENCIES (DOM ELEMENTS)
// Need to display
// Need another container that will hold the hours in rows 
    // The rows should be color coded to show past, present and future for the hours available
        // past hours will be gray
        // current hour will be red
        // future hours will be green
    // each timeblock is a button that can click into the hour
    // once in each timeblock the user can input an event
    //the text input for each event should then be saved in local storage
// save button is a button showing a floppy disk that will save the information entered by the user
    // the button will be at the end of each row 

$( document ).ready(function() {
    var saveBtn = $(".saveBtn");
    saveBtn.click(function() {
        var time = $(this).parent().attr("id")
        console.log(time);
        var description = $(this).siblings(".description").val();
        console.log(description)
        localStorage.setItem(time, description);
        
      });

      $("#9 .description").val(localStorage.getItem("9am"));
      $("#10 .description").val(localStorage.getItem("10am"));
      $("#11 .description").val(localStorage.getItem("11am"));
      $("#12 .description").val(localStorage.getItem("12pm"));
      $("#13 .description").val(localStorage.getItem("1pm"));
      $("#14 .description").val(localStorage.getItem("2pm"));
      $("#15 .description").val(localStorage.getItem("3pm"));
      $("#16 .description").val(localStorage.getItem("4pm"));
      $("#17 .description").val(localStorage.getItem("5pm"));
      

// DATA / STATE

// var saveBtn = document.getElementById("save-event");
// var eventRows = $("<div>").addclass();
// var listedHours = $("<div>").addclass().text();

// FUNCTIONS

function hoursUpdate(){
    var currentHour = moment().hours();
    console.log(currentHour)
    $('.time-block').each(function(){
    const timeBlockHour = parseInt($(this).attr("id"))
    const difference = timeBlockHour - currentHour
    if(difference< 0){
        $(this).addClass('past')
    } 
    else if (difference > 0){
        $(this).addClass('future')
    }
    else{
        $(this).addClass('present')
    }
    })
}
hoursUpdate()

//need to use military time so the computer can differentiate AM and PM
//business hours 9am- 5pm use military time of 9 - 18(5pm plus one for index)

// for(i=9; i<18; i++)

// if(i<12){
//     hourDisplay = i + "AM";
// } else if (i===12){
//     hourDisplay = i + "PM"
// }


 });  

//floppy-disc button formation
// var icon = $("<i>").addclass("fas fa-save")

// can in one statement compound the appends to have all stuff created added to a container at once

// USER INTERACTIONS
// A user can click...
// a user can click into the timeblocks they see on the page 
    //once in a timeblock an event can be entered
    //the user can click a button to save what they have entered



// INITIALIZATION

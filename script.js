

// DEPENDENCIES (DOM ELEMENTS)
// Need to display
// Need another container that will hold the hours in rows 
    // The rows should be color coded to show past, present and future for the hours available
    // each timeblock is a button that can click into the hour
    // once in each timeblock the user can input an event
    //the text input for each event should then be saved in local storage
// save button is a button saying "save event" that will save the information entered by the user
    


// DATA / STATE

var saveBtn = document.getElementById("save-event");

// FUNCTIONS


//need to use military time so the computer can differentiate AM and PM
for(i=0 i<18 i++)

if(i<12){
    hourDisplay = i + "AM";
} else if (i===12){
    hourDisplay = i + "PM"
}



//floppy-disc button formation
var icon = $("<i>").addclass("fas fa-save")

// can in one statement compound the appends to have all stuff created added to a container at once

// USER INTERACTIONS
// A user can click...
// a user can click into the timeblocks they see on the page 
    //once in a timeblock an event can be entered
    //the user can click a button to save what they have entered



// INITIALIZATION

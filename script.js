
//need to use military time so the computer can differentiate AM and PM
for(i=0 i<18 i++)

if(i<12){
    hourDisplay = i + "AM";
} else if (i===12){
    hourDisplay = i + "PM"
}



//floppy-disc button formation
var icon = $("<i>").addclass("fas fa-save")
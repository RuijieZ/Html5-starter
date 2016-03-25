// function that responds to a click. After user entered the mood, and click the show mood button, it will put the result string into the field.

function showMood() {
    var name = document.getElementById('name').value;
    var mood = document.getElementById('mood').value;
    
    // Add some validation so that if user does not input the proper info, we return false
    
    if (!name || !mood) {
        alert('please fill in all fields');         // pop up an alert box
        return;
    }
    
    var moodString = name + " is " + mood + " today ";
    
    if (mood == "happy") {
        moodString += "=)";
    } else if( mood == "sad") {
        moodString += "=(";
    } else {
        moodString += "==";
    }
    
    
    
    
    
    var holder = document.getElementById('holder'); // the div where we want to display our message
    
    holder.innerHTML = moodString;
}


function clearMood() {
    document.getElementById('moodForm').reset();
    var holder = document.getElementById('holder');
    holder.innerHTML = "";
}
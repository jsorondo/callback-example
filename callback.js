//Defining functions
function paredon(readyarms, callback) {
    console.log("Preparen ," + readyarms);
    callback();
}

//callback function
function kill(){
    console.log("Fuego!!");
}

//Calling the function
paredon("Apunten", kill);

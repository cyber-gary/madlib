

// //////regex method

// import axios from "axios";

// var str   = "my car is red";
// var stringArray = str.split(/(\s+)/);

// console.log(stringArray); // ["my", " ", "car", " ", "is", " ", "red"] 


//////

function splitter(string, randomNum)
{
    string = string.split(" ");
    var stringArray = [];
    for(var i =0; i < string.length; i++)
    {
        stringArray.push(string[i]);
        if(i !== string.length-1)
        {
            stringArray.push(" ");
        }
        else{
            return stringArray
        }
    }
}

function findNoun([arr])
{
    for(var i = 0; i < arr.length; i++)
    {
        axios.post(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=${arr[i]}`)
            .then(response => {
                if(response.data.fl==="noun")
                {
                    arr[i] = noun
                }
            })
    }
}

// need to send string to dictinary to get nouns from message out 

// then swap nouns with the value from input

// turn the array back into a string .join

// return the new string to the browser


// Login.js
// make sure that for returning users (the login section) their username and password match what is in the db
// style


// IF THERES TIME TO DO RANDOM STUFF

// convert the string to an array 
// generate a random number based on the array length
// then we would need to get the value of that random number index
// pass that value into the api to check the "fl"
// return the value of the "fl"
// pass that value to the form lable so that the user will know what type of word they are replacing
// the user will submit the form with their word
// onSubmit we would swap the word from the user with the random word index
// convert the array back to a string
// then we need to setMessage to that "new" message
// axios.put to the backend to update the new message
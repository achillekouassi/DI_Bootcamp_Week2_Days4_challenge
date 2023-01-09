/*
Prompt the user for several words (separated by commas).
Put the words into an array.
Console.log the words one per line, in a rectangular frame as seen below.
Check out the Hints and Requirements below.
For example, if the user gives you:
Hello, World, in, a, frame
you will transform it to : ["Hello", "World", "in", "a", "frame"]
that will get displayed as:

stars and words


Hint
The number of stars that wraps the sentence, must depend on the length of the longest word.
*/


/* Creating a function which will identify the longest word */
function LongestWord(array){
    var max=array[0];
    for(var i=0;i<array.length;i++){
        if (max.length <=array[i].length){
            max=array[i];
        }
    }
    return max;
}

/* Creating a function for dispaying the starts */

function startsDisplay(longestWord){
    var b=""
    for (let i=0;i < longestWord.length+4;i++){
        b+="*"; 
    /* I chose "longestWord.length+4" because in the following lines i want to display spaces between words and starts
    so 2  for spaces and 2 for ends */
    }
    console.log(b);
}

//Creating a function for displaying lines with starts a words


function startsWords(array,display,longestWord){
    longueur=longestWord.length
    for (var i=0;i < array.length;i++){
        if (array[i].length < longueur){
            while(array[i].length < longueur ){
                array[i]+=" "
            }
         display=`* ${array[i]} *`
        }
        else{
            display=`* ${array[i]} *`
        }
    console.log(display);
    }

}

/*              The principal Program */

var serveralWords=prompt("Enter several word separated by a commas"); 
var wordIntoArray=serveralWords.split(","); // Variable for puting the words into an array
var longestWord=LongestWord(wordIntoArray); // varible for finding the longest word
var displayStarts=startsDisplay(longestWord); // Only starts displaying with this variable

var displayStartsAndWords=startsWords(wordIntoArray,"",longestWord);// Variable for displaying the starts with words
displayStarts=startsDisplay(longestWord); // replay start's displaying with the variable already created
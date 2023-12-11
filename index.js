const fs = require("fs");

/*fs.writeFile("message.txt", "Hello from NodeJS", (err) => {
    if (err) throw err; // If an error occurs, throw the error to the console
    console.log("The file has been saved!"); // Else, save the file with the data provided.
});
*/

fs.readFile("./message.txt", "utf8", (err, data) => {
    if(err) throw err;
    console.log(data)
})
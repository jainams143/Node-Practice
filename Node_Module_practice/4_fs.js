
const fs = require('fs');
const { readFile } = require('fs/promises');

// // reading file 

// let fileContent = fs.readFileSync('f1.txt')
// console.log("F1 content is = " + fileContent);

// // writing in file

// fs.writeFileSync("f2.txt" , "Hello I am F2, Which is written by FS module")
// console.log("F2 has been updated");

// let fileCont = fs.readFileSync('f2.txt')
// console.log("New F2 content is = " + fileCont);

// // append/Update a file

// let fileCo = fs.readFileSync('f3.txt')
// console.log("F3 content is = " + fileCo);

// fs.appendFileSync('f3.txt' , ' This is append exercise ')


// let filef3 = fs.readFileSync('f3.txt')
// console.log('f3 is appended -->' + filef3);

// // delete a file
// fs.unlinkSync('f4.txt')
// console.log('F4 is successfully Deleted');

//---------------------------------------------------------------------------------------------------------------

// Make directory

// fs.mkdirSync('newDirectory')
// console.log("New directory has been created");

let folderPath = "C:\\Users\\JAINAM SHAH\\Desktop\\NodeJS\\Node_Module_practice\\newDirectory"
let fileContent = fs.readdirSync(folderPath)

console.log("read direactory is--> " , fileContent);

// TODO: Include packages needed for this application
const inqurier= require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    { 
        type: 'input',
        message:'What is your Project title?',
        name:'title',
    },
    { 
        type:'input',
        message:'Provide a short description',
        name:'Description',
    },
    
  
    
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'Installation'
    },
    
    
    { 
        type: 'input',
        message: 'Provide instructions and examples for use',
        name: 'Usage'
    },
    
    { 
        type: 'input',
        message: 'How to contribute',
        name: 'Contribution'
    },
    
    { 
        type: 'input',
        message: 'Tests',
        name: 'Tests'
    },
    
    { 
        type: 'list',
        message: 'What License is used?',
        name: 'License',
        choices:[ 'MIT','GPL','BSD','No']
    },
    
    
    { 
        type: 'input',
        message: 'Github Username?',
        name: 'Github_username',
    },
    
    { 
        type: 'input',
        message: 'Email Address?',
        name: 'Email'
    },






];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inqurier.prompt(questions)
    .then((data)=>{ fs.writeFileSync('./dist/readme.md', generateMarkdown(data))

    })

}

// Function call to initialize app
init();






// function generateHtml({ title,description, contents }) {

  


//  }





// inqurier.prompt([

  



// ]).then((response)=>{
//  console.log(response)

// })

// fs.writeFile('index.html',html),(err)=>{
// err? console.error(err):console.log('Build an html page')

// }

const inqurier= require('inquirer')
const fs = require('fs')

function generateHtml({ Title, Description, Contents, Installation, usage, contribution, Tests, License, Username, Email  })

inqurier.prompt([

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
    message: 'Add table of contents if applicable?',
    name: 'Contents'
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
    type: 'input',
    message: 'What License is used?',
    name: 'License'
},


{ 
    type: 'input',
    message: 'Github Username?',
    name: 'Username',
},

{ 
    type: 'input',
    message: 'Email Address?',
    name: 'Email'
},



]).then((response)=>{
 const html= generateHtml(response)

 console.log(html)

})

fs.writeFile('index.html',html),(err)=>{
err? console.error(err):console.log('Build an html page')

}

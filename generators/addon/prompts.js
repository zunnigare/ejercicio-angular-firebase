module.exports = [
  {
    type: 'input',
    name: 'appName',
    message: 'What is the name of your add-on?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the add-on description?',
    default: 'An awesome ngX-Rocket add-on'
  },
  {
    type: 'input',
    name: 'author',
    message: 'Who is the author?',
    default: 'Your name'
  },
  {
    type: 'list',
    name: 'type',
    message: 'What kind of add-on do you want to create?',
    choices: [
      {
        value: 'client',
        name: 'Client'
      },
      {
        value: 'server',
        name: 'Server'
      },
      {
        value: 'fullstack',
        name: 'Full stack'
      }
    ],
    default: 'client'
  },
  {
    type: 'confirm',
    name: 'advanced',
    message: 'Do you need to customize the code?',
    default: false
  }
];

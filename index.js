const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const cfonts = require('cfonts');

const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();

const activity = cwd.includes('social-network-api')
  ? cwd.split('social-network-api')[1]
  : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


//Function that shows the title of the app
cfonts.say('Social Network API', {
	font: 'block',              // define the font face
	align: 'center',              // define text alignment
	colors: ['white'],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,           // define letter spacing
	lineHeight: 1,              // define the line height
	space: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',             // define how many character can be on one line
	gradient: false,            // define your two gradient colors
	independentGradient: false, // define if you want to recalculate the gradient for each new line
	transitionGradient: false,  // define if this is a transition between colors directly
	env: 'node'                 // define the environment cfonts is being executed in
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});

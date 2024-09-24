
	// Get the button element
const button = document.getElementById('myButton');

// Get the paragraph element where the text will be added
const paragraph = document.getElementById('myParagraph');

// Define the array of possible lines
const lines = [
  'Nerds Rule',
  'Hello, World!',
  'we come in peace',
  '"The world is not dangerous because of those who do wrong but the ones that do nothing about it" - Albert Einstein (which means snitches should\'nt get stitches)',
  'May the code be with you',
  'I am not arguing, I am just explaining why I am right',
  'Debugging is like being a detective',
  'Code is like a puzzle, and I love puzzles',
  'I am not lazy, I am just on energy-saving mode',
  'I am not arguing, I am just passionately expressing my point of view',
  'Code is my happy place',
  'Programming is like magic, but instead of a wand, I use a keyboard',
  'I don\'t debug, I just re-write the code until it works',
  'Code, sleep, repeat',
  'My code is like a box of chocolates, you never know what you\'re gonna get',
  'I\'m not arguing, I\'m just explaining why I\'m right, again',
  'Code, code, and more code, that\'s my motto',
  'I\'m not lazy, I\'m just on programmer time',
  'My code is like a work of art, it\'s a masterpiece',
  'Programers are the nerds that will shape the world',
  'When we screw up, we screw UP'  
];

// Add an event listener to the button
button.addEventListener('click', () => {
  // Generate a random index for the lines array
  const randomIndex = Math.floor(Math.random() * lines.length);

  // Get the random line
  const randomLine = lines[randomIndex];

  // Add the random line to the paragraph
  paragraph.innerHTML += `<br>${randomLine}`;
});

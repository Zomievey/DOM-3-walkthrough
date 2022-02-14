const addSqaureButton = document.createElement("button"); // creating a variable to hold the button
addSqaureButton.textContent = "Add Square"; // labels the button with text of what it does
document.body.appendChild(addSqaureButton); // adds the button to the body of the document

const squareHolder = document.createElement("div"); // creating a variable to hold each square
squareHolder.id = "square-holder"; // labels the div with an id of square-holder to use in the css
document.body.appendChild(squareHolder); // adds the div to that holds squares to the body of the document

let numSquares = 0; // creating a variable to hold the number of squares

// add an anonymous function to the button that creates a div element every time the button is clicked
addSqaureButton.addEventListener("click", function () {
  const newDiv = document.createElement("div"); // creates a variable to hold the square

  // newDiv.style.width = '100px'; // sets the width of the square
  // newDiv.style.height = '100px'; // sets the height of the square

  newDiv.className = "square"; // adds a class to the square (best practice)

  numSquares++; // adds 1 to the number of squares
  newDiv.id = numSquares; // adds a unique id to the square

  // adds an event listener to the square for the mouse entering the square
  newDiv.addEventListener("mouseover", function () {
    newDiv.textContent = newDiv.id; // changes the text of the square to the current id of the square
  });

  // adds an event listener to the square for the mouse leaving the square
  newDiv.addEventListener("mouseout", function () {
    newDiv.textContent = ""; // changes the text of the square to nothing
  });

  // adds an event listener to the square for the mouse clicking the square
  newDiv.addEventListener("click", function () {
    let randomColor = generateRandomColor(); // creates a variable to hold the random color
    newDiv.style.backgroundColor = randomColor; // changes the background color of the square to a random color
  });

  newDiv.addEventListener("dblclick", function () {
    if (newDiv.id % 2 === 0) {
      //modulo operator to check if the square is even
      if (newDiv.nextSibling) {
        //checks if the square has a sibling 
        newDiv.nextSibling.remove(); //removes the sibling to the right ---->
      } else {
        alert("There is no next sibling!"); //alerts the user if there is no sibling
      }
    } else {
      if (newDiv.previousSibling) {
        // if not an even square
        newDiv.previousSibling.remove(); // removes the sibling to the left <----
      } else {
        alert("There is no previous sibling!"); //alerts the user if there is no sibling
      }
    }
  });

  squareHolder.appendChild(newDiv); // adds the square to the squareHolder div
});

//find a function that will change the color of the square to a random color when the square is clicked
function generateRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// let randomColor = generateRandomColor();
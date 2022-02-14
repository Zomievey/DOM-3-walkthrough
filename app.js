

const addSqaureButton = document.createElement("button");
addSqaureButton.textContent = "Add Square";
document.body.appendChild(addSqaureButton);

const squareHolder = document.createElement("div");
squareHolder.id = "square-holder";
document.body.appendChild(squareHolder);

let numSquares = 0;

addSqaureButton.addEventListener("click", function () {
  const newDiv = document.createElement("div");

  newDiv.className = "square";
  numSquares++;
  newDiv.id = numSquares;

  newDiv.addEventListener("mouseover", function () {
    newDiv.textContent = newDiv.id;
  });

  newDiv.addEventListener("mouseout", function () {
    newDiv.textContent = "";
  });

  squareHolder.appendChild(newDiv);

  newDiv.addEventListener("click", function () {
    let randomColor = generateRandomColor();
    newDiv.style.backgroundColor = randomColor;
  });

  newDiv.addEventListener("dblclick", function () {
    if (newDiv.id % 2 === 0) {
      if (newDiv.nextSibling) {
        newDiv.nextSibling.remove();
      } else {
        alert("There is no next sibling!");
      }
    } else {
      if (newDiv.previousSibling) {
        newDiv.previousSibling.remove();
      } else {
        alert("There is no previous sibling!");
      }
    }
  });
});

function generateRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

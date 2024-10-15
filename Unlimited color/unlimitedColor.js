// generate a random color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;

const starChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);

  intervalId = null;
};

document.querySelector("#start").addEventListener("click", starChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);

// for understanding  the code, here is a step-by-step explanation: with proper commits

// // Generate a random color
// const randomColor = function () {
//     const hex = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += hex[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   let intervalId;

//   // Start changing color
//   const startChangingColor = function () {
//     // Ensure interval isn't already running
//     if (!intervalId) {
//       intervalId = setInterval(changeBgColor, 1000);
//     }

//     function changeBgColor() {
//       document.body.style.backgroundColor = randomColor();
//     }
//   };

//   // Stop changing color
//   const stopChangingColor = function () {
//     // Ensure there's an active interval to stop
//     if (intervalId) {
//       clearInterval(intervalId);
//       intervalId = null; // Reset intervalId after stopping
//     }
//   };

//   // Event listeners
//   document.querySelector("#start").addEventListener("click", startChangingColor);
//   document.querySelector("#stop").addEventListener("click", stopChangingColor);

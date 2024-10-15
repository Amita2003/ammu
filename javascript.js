// Declare a variable to hold the user's score
let userScore = 0; // Initialize user score to 0

// Declare a variable to hold the computer's score
let compScore = 0; // Initialize computer score to 0

// Select all elements with the class "choice" and store them in a variable
const choices = document.querySelectorAll(".choice"); 
const msg = document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#user-score"); // Add this line to get user score display
const compScoreDisplay = document.querySelector("#comp-score"); // Add this line to get comp score display

// Function to handle a draw
const drawgame = () => {
    console.log("Game is a draw! 🤝");
    msg.innerText = "Game was Draw! 🤝"; // Log that the game is a draw
}

// Function to show the winner
const showWinner = (userwin,userchoice,compchoice) => {
    if (userwin) {
        console.log("You win! ");
        msg.innerText = `You Win! ${userchoice} beats ${compchoice} 🎉`;
        msg.style.backgroundColor = "pink"; // Change background color for a win
        userScore++; // Increment user score
        userScoreDisplay.innerText = userScore; // Update user score display
    } else {
        console.log("You lose! 😢");
        msg.innerText = `You Lose! ${compchoice} beats ${userchoice} 😢`;
        msg.style.backgroundColor = " violet"; // Change background color for a loss
        compScore++; // Increment computer score
        compScoreDisplay.innerText = compScore; // Update computer score display
    }
}

// Function to generate computer's choice
const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randindx = Math.floor(Math.random() * options.length);
    return options[randindx]; // Return the option at the random index
}

// Function to play a move
const playMove = (userchoice) => {
    console.log("User choice:", userchoice); // Log the user's choice

    // Generate the computer's choice
    const compchoice = gencompchoice(); 
    console.log("Computer choice:", compchoice); // Log the computer's choice

    // Check for a draw
    if (userchoice === compchoice) {
        drawgame(); // Call the draw game function
    } else {
        // Determine win/loss
        let userwin = false; // Assume user does not win unless proven otherwise
        if (userchoice === "rock") {
            userwin = compchoice === "scissors"; // Rock beats scissors
        } else if (userchoice === "paper") {
            userwin = compchoice === "rock"; // Paper beats rock
        } else if (userchoice === "scissors") {
            userwin = compchoice === "paper"; // Scissors beats paper
        }

        // Show the result
        showWinner(userwin,userchoice,compchoice); // Call showWinner to display the result
    }
}

// Loop through each choice element
choices.forEach((choice) => {
    // Add a click event listener to each choice
    choice.addEventListener("click", () => {
        console.log("Clicked choice:", choice.id); // Log the choice ID to the console
        playMove(choice.id); // Call playMove with the user's choice
    });
});

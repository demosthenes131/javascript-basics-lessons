var userScore = 0;
var answer1 = prompt("What year did Fry get cryogenically frozen?")

if (answer1 === "2000") {
    userScore += 1;
    alert("That is correct!");
} else {
    alert("Sorry wrong answer.")
}

var answer2 = prompt("Who is Fry's best friend?")
if (answer2.toUpperCase() === "BENDER") {
    userScore += 1;
    alert("That is correct!");
} else {
    alert("Sorry wrong answer.")
}

var answer3 = prompt("What profession is Zoidberg horrible at?")
if (answer3.toUpperCase() === "DOCTOR") {
    userScore += 1;
    alert("That is correct!");
} else {
    alert("Sorry wrong answer.")
}

var answer4 = prompt("What is the name of the Professor's company?")
if (answer4.toUpperCase() === "PLANET EXPRESS") {
    userScore += 1;
    alert("That is correct!");
} else {
    alert("Sorry wrong answer.")
}

var answer5 = prompt("What is Scruffy's job?")
if (answer5.toUpperCase() === "JANITOR") {
    userScore += 1;
    alert("That is correct!");
} else {
    alert("Sorry wrong answer.")
}


document.write("<p> You got " + userScore + " questions right!");

if (userScore === 5) {
    document.write("<p>You got the GOLD CROWN!</p>")
} else if (userScore === 3 || userScore === 4) {
    document.write("<p>You got the SILVER CROWN!</p>")
} else if (userScore === 1 || userScore === 2) {
    document.write("<p>You got the BRONZE CROWN!</p>")
} else if (userScore === 0) {
    document.write("<p>You got ZERO right! NO CROWN FOR YOU!</p>")
}
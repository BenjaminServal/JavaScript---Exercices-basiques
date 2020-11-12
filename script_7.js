let question = prompt("Que veux tu savoir? ")
switch (true) {
  case question[question.length - 1] == "?":
    console.log("Oue Oue...");
    break;
  case (question.includes("fornite")):
    console.log("on s'fait une partie en soum-soum?");
    break;
  case (question === question.toUpperCase() && question.length > 0):
    console.log("Pwa, calme-toi...");
    break;
  case !question:
    console.log("T'es en pls?");
    break;
  default:
    console.log("balek");
    break;
}
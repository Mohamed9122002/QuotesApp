const arrayOfQuotes = [
  {
    author: "Jim Rohn",
    quote: "Beware of what you become in pursuit of what you want."
  },
  {
    author: "Epictetus",
    quote: "It's not what happens to you, but how you react to it that matters."
  },
  {
    author: "Frank Sinatra",
    quote: "The best revenge is massive success."
  },
  {
    author: "Wayne Gretzy",
    quote: "You miss 100% of the shots you don't take."
  },
  {
    author: "Nelson Mandela",
    quote:
      "Resentment is like drinking poison and waiting for your enemies to die."
  },
  {
    author: "Elbert Hubbard",
    quote: "Do not take life too seriously. You will not get out alive."
  },
  {
    author: " Albert Einstein",
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
  },
  {
    author: "Marcus Tullius Cicero",
    quote: "A room without books is like a body without a soul"
  },
  {
    author: "William W. Purkey",
    quote:
      "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth."
  },
  {
    author: "Dr. Seuss",
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams."
  }
];
var resultNumber = [];
const myButton = document.getElementById("myButton"); // Replace "myButton" with your button's actual ID

myButton.addEventListener("click", function() {
  if (resultNumber.length === arrayOfQuotes.length) {
    resultNumber = [];
  }
  do {
    var randomNumber = Number.parseInt(Math.random() * arrayOfQuotes.length);
  } while (resultNumber.indexOf(randomNumber) !== -1);

  console.log(randomNumber);
  //
  resultNumber.push(randomNumber);
  //
  console.log("indexof"+","+resultNumber.indexOf(randomNumber));
  //
  console.log("result" + "," + resultNumber);
  //
  document.getElementById("authorOutput").innerHTML = ` "${arrayOfQuotes[
    randomNumber
  ].author}" `;
  document.getElementById("quoteOutput").innerHTML = `"${arrayOfQuotes[
    randomNumber
  ].quote}" `;
});

console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // append middle-earth to your document body
  var newSectionTag = document.createElement("section");
  newSectionTag.id = "middle-earth";
  document.body.appendChild(newSectionTag);



  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  for (var i=0; i<lands.length; i++) {
    var newLandArticleTag = document.createElement("article");
    newSectionTag.appendChild(newLandArticleTag);
    var newH1Tag = document.createElement("h1");
    newLandArticleTag.appendChild(newH1Tag);
    newH1Tag.textContent = lands[i];
    // wrong code: newArticleTag[i].innerHTML = lands[i];
  }
}

makeMiddleEarth();




// Part 2
// display an unordered list of hobbits in the shire (which is the first article tag on the page)
// give each hobbit a class of hobbit


function makeHobbits() {
  var newUL = document.createElement("ul");
  var firstArticle = document.querySelector("article");
  // firstArticle.appendChild(newUL);
  var firstUL = firstArticle.appendChild(newUL);


  for (var i=0; i<hobbits.length; i++) {
    var newHobbits = document.createElement("li");
    document.querySelector("ul").appendChild(newHobbits);
    newHobbits.textContent = hobbits[i];
    newHobbits.setAttribute("class", "hobbit");
    // newHobbits.className("hobbit");
  }
}

makeHobbits();






// Part 3

keepItSecretKeepItSafe();


function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo

  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "magic-imbued-jewelry");
  newDiv.setAttribute("id", "the-ring");

  var frodolist = document.querySelector("li");
  var ringSelected = frodolist.appendChild(newDiv);

  ringSelected.addEventListener("click", nazgulScreech);
}





// Part 4

makeBuddies();

function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell

  var newAside = document.createElement("aside");
  var secondUL = document.createElement("ul");
  var secondArticle = document.querySelectorAll("article");
  var asideCreated = secondArticle[1].appendChild(newAside);
  asideCreated.appendChild(secondUL);


  for (i=0; i<buddies.length; i++) {
    var secondList = document.createElement("li");
    var secondUL = document.querySelectorAll("ul");
    secondUL[1].appendChild(secondList);
    secondList.textContent = buddies[i];
  }
}




// Part 5

beautifulStranger();

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'

  var secondArticle = document.querySelector( "article aside ul li:nth-child(4)" );
  secondArticle.textContent = "Aragorn";
  // secondArticle.textContent = "Aragorn";
}




// Part 6

leaveTheShire();

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var getHobbit = document.querySelector('ul');
  // var removedHobbit = document.removeChild(getHobbit);
  // no need removeChild and go straight to removeChild - save 1 step

  var selectRivendall = document.querySelector("aside");
  selectRivendall.appendChild(getHobbit);
}





// Part 7

forgeTheFellowShip();

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party

  var fellowship = document.createElement("div");
  fellowship.className = "the-fellowship";
  var rivendellArticle = document.querySelector("article:nth-child(2)");
  rivendellArticle.appendChild(fellowship);

  var companions = document.querySelectorAll("li");
  var fellowList = document.querySelector(".the-fellowship");

  //technially should have ul under the div

  for (var i = 0; i<companions.length; i++) {
    var finalList = fellowList.appendChild(companions[i]);
    // alert(finalList[i] + " has joined the fellowship.");
    // ???
  }
}





// Part 8

theBalrog();

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border

  var gandalf = document.querySelectorAll(".the-fellowship li");

  gandalf[0].textContent = "Gandalf the White";
  gandalf[0].style.backgroundColour = "white";
  gandalf[0].style.border = "1px solid grey";
}




// Part 9

hornOfGondor();

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship

  // alert("The horn of gondor has been blown.");

  var boromir = document.querySelector("li:nth-child(5)");
  // boromir.style.textDecoration = linethrough;
  // ??? how to add strickpthrough linethrough
  document.querySelector(".the-fellowship").removeChild(boromir);
  //???Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
  // This error was becasue I had querySelectorAll (instead of querySelector) for var boromir.

}





// Part 10

itsDangerousToGoAlone();

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor

  var frodo = document.querySelector("li:nth-child(5)");
  var sam = document.querySelector("li:nth-child(6)");

  var newDiv3 = document.createElement("div");
  newDiv3.id = "mount-doom";
  // newDiv3.appendChild(frodo);

  var thirdArticle = document.querySelectorAll("article");
  thirdArticle[2].appendChild(newDiv3);

  document.querySelector("#mount-doom").appendChild(frodo);
  //???Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
  // This error was becasue I had querySelectorAll (instead of querySelector) for var frodo and var sam.

  document.querySelector("#mount-doom").appendChild(sam);

}






// Part 11

weWantsIt();

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom

  var golDiv = document.createElement("div");
  golDiv.id = "gollum";

  var gollumDone = document.querySelector("#mount-doom").appendChild(golDiv);

  var theRing = document.querySelector("#the-ring");
  gollumDone.appendChild(theRing);

}





// Part 12

thereAndBackAgain();

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the buddies from the document
  // Move all the hobbits back to the shire

  var gollumGone = document.querySelector("#gollum");
  document.querySelector("#mount-doom").removeChild(gollumGone);

  var allHobbits = document.querySelectorAll(".hobbit");
  var lastfellowship = document.querySelectorAll(".the-fellowship li");

  for (var i=0; i<allHobbits.length; i++) {
    document.querySelector("article").appendChild(allHobbits[i]);
    document.querySelector(".the-fellowship").removeChild(lastfellowship[i]);
  }

}

var newPolitician = function(name, color) {
  var politician = {};
  politician.name = name;
  politician.results = null;
  politician.totalVotes = 0;
  politician.color = color;
 
  politician.addVotes = function() {
    this.totalVotes = 0;
    for (var i = 0; i < this.results.length; i++)
      {
        this.totalVotes = this.totalVotes + this.results[i];
        //console.log(this.totalVotes);
      }
  };
  
  return politician;

};

var setStateResults = function(state) {
  theStates[state].winner = null;
  if (scarlett.results[state] > elizabeth.results[state]) {
    theStates[state].winner = scarlett;
  }
  else if (elizabeth.results[state] > scarlett.results[state]) {
    theStates[state].winner = elizabeth;
  }
  var stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.color;
  }
  else {
    theStates[state].rgbColor = [11, 32, 57];
  }
  
  var stateResultsTable = document.getElementById('stateResults');
  var header = stateResultsTable.children[0];
  var body = stateResultsTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = theStates[state].nameAbbrev;
  candidate1Name.innerText = scarlett.name;
  candidate1Results.innerText = scarlett.results[state];
  candidate2Name.innerText = elizabeth.name;
  candidate2Results.innerText = elizabeth.results[state];
  
  if (theStates[state].winner === null) {
    winnersName.innerText = "Draw!"
  }
  else {
    winnersName.innerText = theStates[state].winner.name;
  }
};

var scarlett = newPolitician("Scarlett O'Hara", [132,17,11]);
var elizabeth = newPolitician("Elizabeth Bennet", [245,141,136]);

scarlett.results = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
elizabeth.results = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

scarlett.results[9] = 1;
elizabeth.results[9] = 28;
scarlett.results[4] = 17;
elizabeth.results[4] = 38;
scarlett.results[43] = 11;
elizabeth.results[43] = 27;

scarlett.addVotes();
elizabeth.addVotes();

//console.log(scarlett.totalVotes);
//console.log(elizabeth.totalVotes);

var winner = "";

if (scarlett.totalVotes > elizabeth.totalVotes) {
  winner = scarlett.name;
  }
else if (elizabeth.totalVotes > scarlett.totalVotes) {
  winner = elizabeth.name;
  }
else {winner = "DRAW!";}

//console.log("The winner is: " + winner + "!");
//console.log(scarlett.color);
//console.log(elizabeth.color);

var overallResults = document.getElementById('countryResults');

overallResults.children[0].children[0].children[0].innerText = scarlett.name;
overallResults.children[0].children[0].children[1].innerText = scarlett.totalVotes;
overallResults.children[0].children[0].children[2].innerText = elizabeth.name;
overallResults.children[0].children[0].children[3].innerText = elizabeth.totalVotes;
overallResults.children[0].children[0].children[5].innerText = winner;

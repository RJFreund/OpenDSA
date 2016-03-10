/*global window */


///////////////////////////////////////////////////////////////////
////////////////////Justin Functions///////////////////////////////
///////////////////////////////////////////////////////////////////

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

//abracting out problems
function generateLength(){
  return (Math.floor(Math.random() * 5)+1);
};

//makes random array of indices representing the relation letters
function makeRandomIndices(){
  var outarr = [0,1,2,3,4,5];
  return shuffle(outarr);
};

//takes in the length of the relation and the randomized array of indices
function makeRelation(length, inarr){
  var columnBank = ["A", "B", "C","D","E","F"];
  var outarr = [];
  var y;
  for(i=0;i<length;i++){
    y = inarr[i];
    outarr.push(columnBank[y]);
  }
  return outarr;
};

//takes in the relation arrays and return a formatted string
function makeRelationString(arrayR, arrayS){
  //fill in the R relation
  tempString = "R(";
  for(i=0;i < arrayR.length;i++){
    tempString = tempString + arrayR[i];
    if(i!== (arrayR.length-1)){
      tempString = tempString + ", ";
    }
  };

  //fill in the S relation
  tempString = tempString + ") -> S(";
  for(i=0;i<arrayS.length;i++){
    tempString = tempString + arrayS[i];
    if(i!== (arrayS.length-1)){
      tempString = tempString + ", ";
    }
  }
  tempString = tempString +")";

  return tempString;
};

//returns the common attributes from the relation arrays
function findSolution(arrayR, arrayS){
  var i;
  var columnBank = ["A", "B", "C","D","E","F"];
  var colTemp;
  var rTemp;
  var sTemp;
  var returnString = "";

  for(i=0;i<6;i++){
    colTemp= columnBank[i];
    rTemp = arrayR.indexOf(colTemp);
    sTemp = arrayS.indexOf(colTemp);

    if(rTemp > -1 && sTemp > -1){
      returnString= returnString + colTemp + " ";
    }
  }
  return returnString;
};

function makeBadSolution(){
  var counter;
  var returnString = "";
  var columnBank = ["A", "B", "C","D","E","F"];
  counter = (Math.floor(Math.random() * 6));

  for(i=0;i<counter;i++ ){
    returnString = returnString + columnBank[i] + " ";
  }

  return returnString;
};


/////////////////////////////////////////////////////////////////
///////////////////////KHAN STUFF////////////////////////////////
/////////////////////////////////////////////////////////////////

(function() {
    "use strict";

    var my_arrayR;
    var my_arrayS;

    var databaseJoinsInnerMC = {

	option: [0,0,0],

	// Initialise the exercise
	initArr: function() {
	    var i;
	    var array_str = ""; // this will hold a string of the two relations to answer the question
      var rLength = generateLength();
      var sLength = generateLength();

      //make a random list of indices for R
      var rIn = makeRandomIndices();

//console.log("RINDICES=" + rIn.toString());
//console.log("RLENGTH=" + rLength);

      //makes the relation R
      my_arrayR = makeRelation (rLength, rIn);

//console.log("RRELATION=" + my_arrayR.toString());

      ////make a random list of indices for S
      var sIn = makeRandomIndices();

//console.log("SINDICES=" + sIn.toString());
//console.log("SLENGTH="+ sLength);

      //makes the relation S
      my_arrayS = makeRelation(sLength,sIn);

//console.log("SRELATION=" + my_arrayS.toString());

      //makes the string
      var array_str = makeRelationString(my_arrayR, my_arrayS);

	    console.log(array_str);
	    return array_str;
	},

	maxValue: function() {
      //put the answer in index 0 of my array
      var my_array = [];
      my_array[0] = findSolution(my_arrayR,my_arrayS);

//console.log("answer="+ my_array[0]);

      //put dummy answer in index 1
      my_array[1] = makeBadSolution();
      //put dummy answer 2 in index 2
      my_array[2] = makeBadSolution();
      //put dummy answer 3 in index 3
      my_array[3] = makeBadSolution();

	    databaseJoinsInnerMC.option[0] = my_array[1];
	    databaseJoinsInnerMC.option[1] = my_array[2];
	    databaseJoinsInnerMC.option[2] = my_array[3];
	    return my_array[0];
	},

    };

    window.databaseJoinsInnerMC = window.databaseJoinsInnerMC || databaseJoinsInnerMC;
}());

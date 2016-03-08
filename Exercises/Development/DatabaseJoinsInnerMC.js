/*global window */
(function() {
    "use strict";
    var my_array = [];
    var my_arrayR = [];
    var my_arrayS = [];
    var columnBank = ["A", "B", "C","D","E","F"];

    var databaseJoinsInnerMC = {

	option: [0,0,0],

	// Initialise the exercise
	initArr: function() {
	    var i;
	    var array_str = ""; // this will hold a string of the two relations to answer the question
      var rLength = (Math.floor(Math.random() * 5)+1);
      var sLength = (Math.floor(Math.random() * 5)+1);


      //make a random list of indices for R
      var rIn = [0,1,2,3,4,5];
      var swapWith;
      var temp;
      for(i = 0; i < 6; i++){
        swapWith = (Math.floor(Math.random() * 6));
        temp = rIn[i];
        rIn[i] = rIn[swapWith];
        rIn[swapWith] = temp;
      }

      //makes the relation R
      var y;
      for(i=0;i<rLength;i++){
        y = rIn[i];
        my_arrayR.push(columnBank[y]);
      }

      ////make a random list of indices for S
      var sIn = [0,1,2,3,4,5];
      for(i = 0; i < 6; i++){
        swapWith = (Math.floor(Math.random() * 6));
        temp = sIn[i];
        sIn[i] = sIn[swapWith];
        sIn[swapWith] = temp;
      }

      //makes the relation S
      for(i=0;i<sLength;i++){
        y = sIn[i];
        my_arrayS.push(columnBank[y]);
      }


      //makes the string
	    array_str = "R(";
      for(i=0;i<rLength;i++){
        array_str = array_str + my_arrayR[i];
        if(i!== (rLength-1)){
          array_str = array_str + ", ";
        }
      }

      array_str = array_str + ") -> S(";
      for(i=0;i<sLength;i++){
        array_str = array_str + my_arrayS[i];
        if(i!== (sLength-1)){
          array_str = array_str + ", ";
        }
      }

      array_str = array_str +")";

	    console.log(array_str);
	    return array_str;
	},

	maxValue: function() {
	    var i;
      var j;
	    var answer = "";
	    var notAnswers = "";

      //put the answer in index 0 of my array
      for(i=0;i<my_arrayR.length;i++){
        for(j=0;j<my_arrayS.length;j++){
          if(my_arrayR[i] === my_arrayS[j]){
            answer = answer + my_arrayR[i] + " ";
          }
        }
      }
console.log("answer="+answer);
      my_array[0] = answer;

      var counter;
      var temp1 = "";
      var temp2 = "";
      var temp3 = "";
      //put dummy answer 1 in index 1
      counter = (Math.floor(Math.random() * 6));
      for(i=0;i<counter;i++ ){
        temp1 = temp1 + columnBank[i] + " ";
      }
      my_array[1] = temp1;
      //put dummy answer 2 in index 2
      counter = (Math.floor(Math.random() * 6));
      for(i=0;i<counter;i++ ){
        temp2 = temp2 + columnBank[i] + " ";
      }
      my_array[2] = temp2;
      //put dummy answer 3 in index 3
      counter = (Math.floor(Math.random() * 6));
      for(i=0;i<counter;i++ ){
        temp3 = temp3 + columnBank[i] + " ";
      }
      my_array[3] = temp3;

	    databaseJoinsInnerMC.option[0] = my_array[1];
	    databaseJoinsInnerMC.option[1] = my_array[2];
	    databaseJoinsInnerMC.option[2] = my_array[3];
	    return my_array[0];
	},

    };

    window.databaseJoinsInnerMC = window.databaseJoinsInnerMC || databaseJoinsInnerMC;
}());

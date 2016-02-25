"use strict";

$(document).ready(function () {

  //makes a matrix from a prebuilt nested array and an integer value representing the number of pixels from the left edge
  var makeMatrix = function(x, fromLeft){
    return av.ds.matrix(x, {style: "table", left: fromLeft});
  };
  
  //highlights blue the first row of an array (attribute titles) when passed a table alias and number of columns in the matrix
  var highlightFirstRow = function(table, cols){
    for(i = 0; i< cols;i++){
      table.css(0, i, {"background-color": "aqua", "color": "rgb(150, 55, 50)"});
    }
  };

  //highlights yellow every cell (excluding the first) in the matrix when passed a table, number of rows, columns)
  var highlightAllCells = function(table,rows,cols){
    for(var i=1; i<rows+1;i++){
      for(var j=0;j<cols;j++){
        table.highlight(i,j);
      }
    }
  };
  // make label with placement options
  var labelMaker = function(msg, fromLeft, fromTop){
    return av.label(msg, {left: fromLeft, top: fromTop});
  };

    JSAV.init();

    //create the JSAV object
    var av = new JSAV("DatabaseJoinsInnerSlideshow");

    ////FIRST SLIDE STARTS HERE////
    av.umsg("To complete an inner join of the following tables R and S we need to identify common values.")
    
    //Create Table R
    var R = [["A", "B"], [1, 2], [3, 4], [4, 6]]; 
    var tableR = makeMatrix(R, 150);
    //Shade background for col titles
    highlightFirstRow(tableR,2);
    var labelR = labelMaker("Table R", 150, 200);
    labelR.show();
    tableR.layout();

    //Create Table S
    var S = [["A", "C", "D"], [1, 5, 6], [2, 12, 11], [3, 7, 8]];
    var tableS = makeMatrix(S, 350);
    //Shade background for col titles
    highlightFirstRow(tableS, 4);
    var labelS = labelMaker("Table S", 360, 200);
    labelS.show();
    tableS.layout();


    av.displayInit();

    ////SLIDE 2////
    av.step();
    av.umsg("Col A exists in both R and S and the first matching value is 1.");
    tableR.highlight(1,0);
    tableS.highlight(1,0);

    ////SLIDE 3////
    av.step();
    av.umsg("Col A exists in both R and S and the first matching value is 3.");
    tableR.highlight(2,0);
    tableS.highlight(3,0);

    ////SLIDE 4////
    av.step();
    av.umsg("In the resulting table we will take the entire rows where the column values matched." +
            "This means all the highlighted values will appear in RS");

    tableR.highlight(1,1);
    tableR.highlight(2,1);
    tableS.highlight(1,1);
    tableS.highlight(1,2);
    tableS.highlight(1,3);
    tableS.highlight(3,1);
    tableS.highlight(3,2);

    ////SLIDE 5////
    av.step();
    av.umsg("In our result table called RS each column is represented and only the rows that match appear as merged rows.");
    var RS = [["A", "B", "C", "D"],[1,2,5,6],[3,4,7,8]];
    var tableRS = makeMatrix(RS, 550);
    highlightFirstRow(tableRS,4);
    highlightAllCells(tableRS,2,4);
    var labelRS = labelMaker("Table RS", 570, 200);
    labelRS.show();
    tableRS.layout();

    //ENDSHOW
    av.recorded();
});

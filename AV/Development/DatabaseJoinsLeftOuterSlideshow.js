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
    var av = new JSAV("DatabaseJoinsLeftOuterSlideshow");

    ////FIRST SLIDE STARTS HERE////
    av.umsg("Left outer joins include all of table R and matching tuples of S from column A")
    
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
    av.umsg("Find the matches in col A.");
    tableR.highlight(1,0);
    tableR.highlight(2,0);
    tableS.highlight(1,0);
    tableS.highlight(3,0);

    ////SLIDE 3////
    av.step();
    av.umsg("Choose the right tuples for R, and include 4,6 because Table A completely moves to result table.");
    highlightAllCells(tableR,3,2);

    ////SLIDE 4////
    av.step();
    av.umsg("Choose the right tuples for S");
    tableS.highlight(1,1);
    tableS.highlight(1,2);
    tableS.highlight(3,1);
    tableS.highlight(3,2);

    ////SLIDE 5////
    av.step();
    av.umsg("TODO");
    var RS = [["A", "B", "C", "D"],[1,2,5,6],[3,4,7,8],[4,6,"",""]];
    var tableRS = makeMatrix(RS, 550);
    highlightFirstRow(tableRS,4);
    highlightAllCells(tableRS,3,4);
    tableRS.unhighlight(3,2);
    tableRS.unhighlight(3,3);
    var labelRS = labelMaker("Table RS", 570, 200);
    labelRS.show();
    tableRS.layout();

    //ENDSHOW
    av.recorded();
});

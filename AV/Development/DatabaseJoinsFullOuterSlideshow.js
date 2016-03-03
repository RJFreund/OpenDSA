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

  //highlight entire row when passed the table, the row to unhighlight, and number of cols
  var highlightRow = function(table,row,cols){
    for(var i=0;i<cols;i++){
        table.highlight(row,i);
      }
  };

  //remove highlight for entire row when passed the table, the row to unhighlight, and number of cols
  var unhighlightRow = function(table,row,cols){
    for(var i=0;i<cols;i++){
        table.unhighlight(row,i);
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
  //highlights yellow every cell (excluding the first) in the matrix when passed a table, number of rows, columns)
  var unhighlightAllCells = function(table,rows,cols){
    for(var i=1; i<rows+1;i++){
      for(var j=0;j<cols;j++){
        table.unhighlight(i,j);
      }
    }
  };
  // make label with placement options
  var labelMaker = function(msg, fromLeft, fromTop){
    return av.label(msg, {left: fromLeft, top: fromTop});
  };

    JSAV.init();

    //create the JSAV object
    var av = new JSAV("DatabaseJoinsFullOuterSlideshow");

    ////FIRST SLIDE STARTS HERE////
    av.umsg("Right outer joins include all of table S and matching tuples of R from column A")
    
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
    av.umsg("Choose the right tuples for R & S");
    highlightRow(tableR,1,2);
    highlightRow(tableR,2,2);
    highlightRow(tableS,1,3);
    highlightRow(tableS,3,3);

    ////SLIDE 4////
    av.step();
    av.umsg("In the fullouter join the non matches will also be in result with nulls.");
    unhighlightAllCells(tableR,3,2);
    unhighlightAllCells(tableS,3,3);
    highlightRow(tableR,3,2);
    highlightRow(tableS,2,3);


    ////SLIDE 5////
    av.step();
    av.umsg("Build final table with your selected values. Notice the null space for non-matching tuples.");
    
    highlightAllCells(tableR,3,2);
    highlightAllCells(tableS,3,3);
    unhighlightRow(tableR,3,2);
    unhighlightRow(tableS,2,3);

    var RS = [["A", "B", "C", "D"],[1,2,5,6],[2,"",12,11],[3,4,7,8],[4,6,"",""]];
    var tableRS = makeMatrix(RS, 550);
    highlightFirstRow(tableRS,4);
    highlightAllCells(tableRS,4,4);
    tableRS.unhighlight(2,1);
    tableRS.unhighlight(4,2);
    tableRS.unhighlight(4,3);
    var labelRS = labelMaker("Table RS", 570, 200);
    labelRS.show();
    tableRS.layout();

    //ENDSHOW
    av.recorded();
});

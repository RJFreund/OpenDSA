"use strict";

$(document).ready(function () {

  var makeMatrix = function(x){
    return av.ds.matrix(x, {style: "table"});
  };

  var highlightFirstRow = function(table, cols){
    for(i = 0; i< cols;i++){
      table.css(0, i, {"background-color": "aqua", "color": "rgb(150, 55, 50)"});
    }
  };

  var highlightAllCells = function(table,rows,cols){
    for(var i=1; i<rows+1;i++){
      for(var j=0;j<cols;j++){
        table.highlight(i,j);
      }
    }
  };

    JSAV.init();

    //create the JSAV object
    var av = new JSAV("DatabaseJoinsInnerSlideshow");
    //initialize the array
    var theArray = [];
    //insert random integers in the array
    for(i = 0; i < 11; i++){
      theArray.push(Math.floor(Math.random() * 100));
    }

    ////FIRST SLIDE STARTS HERE////
    av.umsg("To complete an inner join of the following tables R and S we need to identify common values.")
    //data arrays (left to right)
    var R1 = ["A", "B"];
    var R2 = [1, 2];
    var R3 = [3, 4];
    var R4 = [4, 6];
    //Create Table R 
    var tableR = av.ds.matrix([R1, R2, R3, R4], {style: "table"}, {"left": 300, "top": 10 });
    //Shade background for col titles
    highlightFirstRow(tableR,2)
    tableR.layout();

    //data arrays (left to right)
    var S1 = ["A", "C", "D"];
    var S2 = [1, 5, 6];
    var S3 = [2, 12, 11];
    var S4 = [3, 7, 8];
    //Create Table R 
    var tableS = av.ds.matrix([S1, S2, S3, S4], {style: "table"}, {"relativeTo": tableR});
    //Shade background for col titles
    highlightFirstRow(tableS, 4)
    tableS.layout();


    av.displayInit();

    ////SLIDE 2////
    av.step()
    av.umsg("Col A exists in both R and S and the first matching value is 1.");
    tableR.highlight(1,0);
    tableS.highlight(1,0);

    ////SLIDE 3////
    av.step()
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
    var RSarr = [["A", "B", "C", "D"],[1,2,5,6],[3,4,7,8]];
    var tableRS = makeMatrix(RSarr);
    highlightFirstRow(tableRS,4);
    highlightAllCells(tableRS,2,4);
    tableRS.layout();

    ////SLIDE 6////
    av.step();

    //delete R and S 








    
    //ENDSHOW
    av.recorded();
});

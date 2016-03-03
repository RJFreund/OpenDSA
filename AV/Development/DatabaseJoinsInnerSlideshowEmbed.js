"use strict";

(function ($) {
  var av;
	function about() {
	   alert("Simple array visualization");
	}
	  
	function help() {
	   alert("Help for simple array visualization");
	}
function runit(){
		ODSA.AV.reset(true);
  var makeMatrix = function(x, fromLeft){
    return av.ds.matrix(x, {style: "table", left: fromLeft});
  };

  var highlightFirstRow = function(table, cols){
    for(var i = 0; i< cols;i++){
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
    //JSAV.init();

    //create the JSAV object
    av = new JSAV($('.avcontainer'));
    //Create alphabet array for column headers
    var alphabet = ['A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    
    av.displayInit();
    ////FIRST SLIDE STARTS HERE////
    av.umsg("To complete an inner join of the following tables R and S we need to identify common values.")
    
    //grab user input for tables
    var tableOneHeight = $("#table1height").val();
    var tableOneWidth = $("#table1width").val();
    var tableTwoHeight = $("#table2height").val();
    var tableTwoWidth = $("table2width").val();
    
    //data arrays (left to right)
    //first table will go in order of alphabet...second table randomly selects one column from table one, 
    //then the rest of what didn't get selected in table 1
    var R1=[];
    var R2=[];
    var R3=[];
    var R4=[];
    var R5=[];
    for(var i=0;i<tableOneWidth;i++){
      R1[i]=alphabet[i];
    }
    //fill in the rest of the table for all rows
    for(var i=0;i<tableOneWidth;i++){
      R2[i]=i;
      R3[i]=i+5;
      R4[i]=i+10;
      R5[i]=i+15;
    }
    var tableR;
    //create table R based of table size
    if(tableOneHeight==2){
      tableR = av.ds.matrix([R1, R2, R3], {style: "table"}, {"left": 300, "top": 10 });
    }
    if(tableOneHeight==3){
      tableR = av.ds.matrix([R1, R2, R3, R4], {style: "table"}, {"left": 300, "top": 10 });
    }
    if(tableOneHeight==4){
      tableR = av.ds.matrix([R1, R2, R3, R4, R5], {style: "table"}, {"left": 300, "top": 10 });
    }
    //Shade background for col titles
    highlightFirstRow(tableR,tableOneWidth)
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
}
	// Connect action callbacks to the HTML entities
	$('#about').click(about);
	$('#runit').click(runit);
	$('#help').click(help);
	$('#reset').click(ODSA.AV.reset);
}(jQuery));

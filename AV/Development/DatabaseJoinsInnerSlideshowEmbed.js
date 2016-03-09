"use strict";

(function ($) {
  var av;
	function about() {
	   alert("Customize your table sizes that will be joined together.");
	}
	  
	function help() {
	   alert("To use: Select the dropdown list for each table width and height and select desired value. When done, click run.  Then click on the middle right arrow to advance.");
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
    var tableTwoWidth = $("#table2width").val();
    
    //data arrays (left to right). start creating table 1
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
    var randomTable2ColumnToMatchTable1=Math.floor((Math.random() * tableOneWidth));
    //fill in the rest of the table for all rows
    for(var i=0;i<tableOneWidth;i++){
      R2[i]=i;
      R3[i]=i+5;
      R4[i]=i+10;
      R5[i]=i+15;
    }
    var tableR;
    //create a js matrix to go through to grab values
    var tableRCheckMatrix;
    //create table R based of table size
    if(tableOneHeight==2){
      tableR = av.ds.matrix([R1, R2, R3], {style: "table"}, {"left": 300, "top": 10 });
       tableRCheckMatrix = [[R1], [R2], [R3]];
    }
    if(tableOneHeight==3){
      tableR = av.ds.matrix([R1, R2, R3, R4], {style: "table"}, {"left": 300, "top": 10 });
      tableRCheckMatrix = [[R1], [R2], [R3], [R4]];
    }
    if(tableOneHeight==4){
      tableR = av.ds.matrix([R1, R2, R3, R4, R5], {style: "table"}, {"left": 300, "top": 10 });
      tableRCheckMatrix = [[R1], [R2], [R3], [R4], [R5]];
    }
    //Shade background for col titles
    highlightFirstRow(tableR,tableOneWidth)
    tableR.layout();
    
    
    //data arrays (left to right). start creating table 2
    //first table will go in order of alphabet...second table randomly selects one column from table one, 
    //then the rest of what didn't get selected in table 2
    var S1=[];
    var S2=[];
    var S3=[];
    var S4=[];
    var S5=[];
    //make sure column matches a column from the first table, randomly.
    S1[0]=alphabet[randomTable2ColumnToMatchTable1];
    for(var i=1;i<tableTwoWidth;i++){
      var alphabetSpot = +i + +tableOneWidth;
      S1[i]=alphabet[alphabetSpot];
    }
    //fill in the rest of the table for all rows
    for(var i=0;i<tableTwoWidth;i++){
      S2[i]=i+1;
      S3[i]=i+5;
      S4[i]=i+10;
      S5[i]=i+15;
    }
    var tableS;
    //check matrix is used below to scan through and compare values of both tables
    var tableSCheckMatrix;
    //create table S based of table size
    if(tableTwoHeight==2){
      tableS = av.ds.matrix([S1, S2, S3], {style: "table"}, {"relativeTo": tableR});
      tableSCheckMatrix = [[S1], [S2], [S3]];
    }
    if(tableTwoHeight==3){
      tableS = av.ds.matrix([S1, S2, S3, S4], {style: "table"}, {"relativeTo": tableR});
      tableSCheckMatrix = [[S1], [S2], [S3],[S4]];
    }
    if(tableTwoHeight==4){
      tableS = av.ds.matrix([S1, S2, S3, S4, S5], {style: "table"}, {"relativeTo": tableR});
      tableSCheckMatrix = [[S1], [S2], [S3], [S4], [S5]];
    }
    //Shade background for col titles
    highlightFirstRow(tableS,tableTwoWidth)
    tableS.layout();


    av.displayInit();

   //highlight squares to match on then the rows
    for(var i=1; i<=tableTwoHeight;i++){
      for(var j=1;j<=tableOneHeight;j++){
           var t1Val = tableRCheckMatrix[j][0][randomTable2ColumnToMatchTable1];
           var t2Val = tableSCheckMatrix[i][0][0];
         if(t1Val==t2Val){
           av.step();
           av.umsg("Column " + tableRCheckMatrix[0][0][randomTable2ColumnToMatchTable1] + " exists in both R and S. So we will join on "+ tableSCheckMatrix[i][0][0]);
           tableR.highlight(j,randomTable2ColumnToMatchTable1);
           tableS.highlight(i,0);
         }
      }
    }
    
   av.step();
   av.umsg("before join");
    var finalTable=[];
    var RS1 = [];
    var RS2 = [];
    var RS3 = [];
    var RS4 = [];
    var count = 0;
    //create final table....not finished
    for(var i=0; i<=tableTwoHeight;i++){
      for(var j=0;j<=tableOneHeight;j++){
           var t1Value = tableRCheckMatrix[j][0][randomTable2ColumnToMatchTable1];
           var t2Value = tableSCheckMatrix[i][0][0];
         if(t1Value==t2Value){
            av.step();
           av.umsg("After join, the complete table looks like");
           //temp stores table S without the join on column so there is not double
           var temp = [];
           temp[0] = tableSCheckMatrix[i][0][1];
           for(var k=2; k<tableTwoWidth; k++){
              temp[k-1] = tableSCheckMatrix[i][0][k];
           }
           //set single array rows for final table
           if(count==0){
             RS1 = tableRCheckMatrix[j][0].concat(temp);
           }
           if(count==1){
             RS2 = tableRCheckMatrix[j][0].concat(temp);
           }
           if(count==2){
             RS3 = tableRCheckMatrix[j][0].concat(temp);
           }
           if(count==3){
             RS4 = tableRCheckMatrix[j][0].concat(temp);
           }
           if(count==4){
             RS4 = tableRCheckMatrix[j][0].concat(temp);
           }
           count++;
         }
      }
    }
    if(count==1){
      finalTable=av.ds.matrix([RS1], {style: "table"}, {"relativeTo": tableS});
    }
    if(count==2){
      finalTable=av.ds.matrix([RS1, RS2], {style: "table"}, {"relativeTo": tableS});
    }
    if(count==3){
      finalTable=av.ds.matrix([RS1, RS2, RS3], {style: "table"}, {"relativeTo": tableS});
    }
    if(count==4){
      finalTable=av.ds.matrix([RS1, RS2, RS3, RS4], {style: "table"}, {"relativeTo": tableS});
    }
    if(count==5){
      finalTable=av.ds.matrix([RS1, RS2, RS3, RS4, RS5], {style: "table"}, {"relativeTo": tableS});
    }
    finalTable.layout();
    highlightFirstRow(finalTable,(tableTwoWidth+tableOneWidth-1));
     /**
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
    */
    av.step();
    av.recorded();
}
	// Connect action callbacks to the HTML entities
	$('#about').click(about);
	$('#runit').click(runit);
	$('#help').click(help);
	$('#reset').click(ODSA.AV.reset);
}(jQuery));

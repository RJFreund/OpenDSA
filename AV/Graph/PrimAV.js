"use strict";
/*global alert: true, ODSA */

(function ($) {
  var jsav;
  var graph;
  var mst;   //A graph representing the resulted MST
  var gnodes = [];
  var mstnodes = [];
  var distances;
  var labels;
  var arr;     //Used to initialize the distance and labels arrays.
  var userCreated;
  var gg;      //Serialized graph  
  var nodesOrdered = [];  //Holding the ordered nodes added to the MST
  var step;               //A counter of the nodes added so far  
  var q;                  //Question
  
  $('#email').click(function () {
    var email = window.prompt("Enter Email Please","");
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (regex.test(email)) {
	  //Code for Sending the Email
	  // create a new instance of the Mandrill class with your API key
      // This is my API key, create an account in Mandrill and replace this with your API key. (or you can use my key for now)
      var m = new mandrill.Mandrill('pAZhClsfhO14ZATWaDh0MQ');
	  // create a variable for the API call parameters
      var params = {
        "message": {
          "from_email":"naresh.iiita@gmail.com",
          "to":[{"email":"chanduiiit@gmail.com"}],
          "subject": "Prim's Algorithm Visualization",
          "text": "I'm learning the Mandrill API at Codecademy."
        }
      };
	  // Send the email!
      var text = document.URL;
      params.message.to[0].email = email;
      params.message.text = 
	  "Please take a look at this link "+text+"\n It contains Prim's AV";
      m.messages.send(params, function(res) {
      alert("Success, email sent to " + email);
      }, function(err) {
        alert("Failure, email cannot be sent to " + sendToEmail + ", Please check the email!");
      });
	}
	else {
	  alert('Incorrect email!');
	}
  });
  $('#create').click(function () {
    window.open('graphEditor.html', '', 'width = 800, height = 600, screenX = 300, screenY = 50');
  });
  $('#show').click(function () {
    var g = localStorage['graph'];
	gg = jQuery.parseJSON(g);
	userCreated = true;
	init();
  });
  function logEventHandler(eventData) {
    if(eventData.type === 'jsav-question-answer') {
      //alert(eventData.correct);
	}
  }
  function runit() {
    userCreated = false;
	init();
  }
  function init() {
    var i;
	step = 0;
    ODSA.AV.reset(true);
	if (jsav) {
	  jsav.clear();
	}
    jsav = new JSAV($('.avcontainer'), {logEvent: logEventHandler});
    graph = jsav.ds.graph({width: 776, height: 450, layout: "manual", directed: false});
	mst = jsav.ds.graph({width: 600, height: 400, layout: "manual", directed: true});
	initGraph();
	graph.layout();
	arr = new Array(graph.nodeCount());
    for (i = 0; i < arr.length; i++) {
      arr[i] = Infinity;
    }
    distances = jsav.ds.array(arr, {layout: "vertical", left: 650, top: -25});
    for (i = 0; i < arr.length; i++) {
      arr[i] = gnodes[i].value();
    }
    labels = jsav.ds.array(arr, {layout: "vertical", left: 603, top: -25});
    jsav.umsg("We will call Prim's algorithm with a start vertex of " +
              gnodes[0].value() + ". Any vertex would do to start.");
    jsav.displayInit();
    prim(gnodes[0]);            // Run Prim's algorithm from start node.
    displayMST();
    jsav.recorded();
  }
  function displayMST() {
    var next;
    var edges = mst.edges();
    graph.hide();
    mst.layout();
    jsav.umsg("Complete minimum spanning tree");
  }

  // Mark a node in the graph.
  function markIt(node) {
    if(step === 2) {
	  var minNode = minVertex();
	  var notVisitedNodes = [];
	  var j = 0;
	  for (var i = 0; i < gnodes.length; i++) {
	    if (!gnodes[i].hasClass('visited') && gnodes[i]!== minNode) {
		  notVisitedNodes[j] = gnodes[i];
		  j++;
		}
	  }
	  q = jsav.question("MC", "Which Node will be added Next to the MST?")
                .addChoice(minNode.value(), {correct: true})
                .addChoice(notVisitedNodes[0].value())
                .addChoice(notVisitedNodes[1].value())
                .show();
	  jsav.step();
	}
    node.addClass("visited");
    jsav.umsg("The unmarked vertex with the smallest value is now " + node.value() + ". Mark it and add to the MST.");
    distances.highlight(gnodes.indexOf(node));
    labels.highlight(gnodes.indexOf(node));
    node.highlight();
	nodesOrdered[step] = node; 
	step++;
	//console.log("Nodes added so far: "+step);
    jsav.step();
  }

  // Find the unvisited vertex with the smalled distance
  function minVertex() {
    var v;    // The closest node seen so far
    var next; // Current node being looked at
    gnodes.reset();
    for (next = gnodes.next(); next; next = gnodes.next()) {
      if (!next.hasClass("visited")) {
        v = next;
        break;
      }
    }
    for (next = gnodes.next(); next; next = gnodes.next()) {
      if (!(next.hasClass("visited")) && distances.value(next.index) < distances.value(v.index)) {
        v = next;
      }
    }
    console.log("v is " + v.value() + ", Distance for v is " + distances.value(v.index));
    return v;
  }
  // Compute Prim's algorithm and return edges
  function prim(s) {
    var v;         // The current node added to the MST
    var neighbors = []; // The neighbors of a specific node
    var weight;         // Weight of current edge
    var next, i;

  // Initialize the MST "parents" to dummy values
    for (next = gnodes.next(); next; next = gnodes.next()) {
      next.parent = next;
    }
    distances.value(s.index, 0);
    jsav.umsg("Update the distance value of node " + s.value());
    jsav.step();
    for (i = 0; i < graph.nodeCount(); i++) {
      v = minVertex();
      markIt(v);
      if (distances.value(v.index) === Infinity) {
        jsav.umsg("No other nodes are reachable, so quit.");
        jsav.step();
        return;
      }
      if (v !== s) {
        //Add an edge to the MST
        var edge = graph.getEdge(v.parent, v);
		console.log(v.parent.value()+'    '+v.value());
        edge.css({"stroke-width": "4", "stroke": "red"});
        var mstedge = mst.addEdge(mstnodes[v.parent.index], mstnodes[v.index], {"weight": edge.weight()});
        mstedge.css({"stroke-width": "2", "stroke": "red"});
        jsav.umsg("Add edge (" + v.parent.value() + "," + v.value() + ") to the MST");
        jsav.step();
      }
      neighbors = v.neighbors();
      for (var j = 0; j < neighbors.length; j++) {
        if (!neighbors[j].hasClass("visited")) {
          var w = neighbors[j];
          weight = v.edgeTo(w).weight();
          //Update Distances Of neighbors not in the minimum spanning tree
          var msg = "<u>Processing edge (" + v.value() + "," + w.value() + "): </u>";
          if (distances.value(w.index) > weight) {
            w.parent = v;
            distances.value(w.index, weight);
            msg += "Update the distance value of node (" + w.value() + ")";
          }
          else {
            msg += "Leave the distance value of node (" + w.value() + ") unchanged";
          }
          jsav.umsg(msg);
          jsav.step();
        }
      }
    }
  }

  function about() {
    var mystring = "Prim's Algorithm Visualization\nWritten by Mohammed Fawzy and Cliff Shaffer\nCreated as part of the OpenDSA hypertextbook project.\nFor more information, see http://algoviz.org/OpenDSA\nWritten during Spring, 2013\nLast update: March, 2013\nJSAV library version " + JSAV.version();
    alert(mystring);
  }

  // Initialize the graph.
  function initGraph() {
    if (!userCreated) {
      //Nodes of the original graph
      var a = graph.addNode("A", {"left": 25, "top": 50});
      var b = graph.addNode("B", {"left": 325, "top": 50});
      var c = graph.addNode("C", {"left": 145, "top": 75});
      var d = graph.addNode("D", {"left": 145, "top": 200});
      var e = graph.addNode("E", {"left": 0, "top": 300});
      var f = graph.addNode("F", {"left": 325, "top": 250});
      //Nodes of the MST
      mst.addNode("A", {"left": 25, "top": 50});
      mst.addNode("B", {"left": 325, "top": 50});
      mst.addNode("C", {"left": 145, "top": 75});
      mst.addNode("D", {"left": 145, "top": 200});
      mst.addNode("E", {"left": 0, "top": 300});
      mst.addNode("F", {"left": 325, "top": 250});
      //Original graph edges
      graph.addEdge(a, c, {"weight": 7});
      graph.addEdge(a, e, {"weight": 9});
      graph.addEdge(c, b, {"weight": 5});
      graph.addEdge(c, d, {"weight": 1});
      graph.addEdge(c, f, {"weight": 2});
      graph.addEdge(f, b, {"weight": 6});
      graph.addEdge(d, f, {"weight": 2});
      graph.addEdge(e, f, {"weight": 1});
	}
	else {
	  for (var i = 0; i < gg.nodes.length; i++) {
	    graph.addNode(String.fromCharCode(i + 65), {"left": parseInt(gg.nodes[i].left), "top": parseInt(gg.nodes[i].top)});
	    mst.addNode(String.fromCharCode(i + 65), {"left": parseInt(gg.nodes[i].left), "top": parseInt(gg.nodes[i].top)});
	  }
	  for (var i = 0; i < gg.edges.length; i++) {
	    if (gg.edges[i].weight !== undefined) {
	      graph.addEdge(graph.nodes()[gg.edges[i].start], graph.nodes()[gg.edges[i].end], {"weight": parseInt(gg.edges[i].weight)});
        }
	    else {
	      graph.addEdge(graph.nodes()[gg.edges[i].start], graph.nodes()[gg.edges[i].end]);
	    }
	  }
	}
    gnodes = graph.nodes();
    mstnodes = mst.nodes();
    for (var i = 0; i < mstnodes.length; i++) {
      gnodes[i].index = i;
    }
  }
  // Connect action callbacks to the HTML entities
  $('#about').click(about);
  $('#runit').click(runit);
  //$('#help').click(help);
  $('#reset').click(ODSA.AV.reset);
}(jQuery));

"use strict";
(function ($) {
  $(document).ready(function () {
    var interpret = ODSA.UTILS.getInterpreter();
    console.log("Interpreter: " + interpret);
    var theArray1 = [20, 10, 15, 54, 55, 11, 78, 14];
    var LIGHT = "rgb(215, 215, 215)";  // For "greying out" array elements
    var av = new JSAV("InssortCON1");
    // Create an array object under control of JSAV library
    var arr = av.ds.array(theArray1, {indexed: true});

    arr.highlight(1);
    arr.css([2, 3, 4, 5, 6, 7], {"color": LIGHT});
    av.umsg(interpret("av_c1"));
    av.displayInit();

    av.umsg(interpret("av_c2"));
    arr.swap(0, 1);
    arr.unhighlight(1).highlight(0);
    av.step();

    av.umsg(interpret("av_c3"));
    arr.unhighlight(0);
    av.recorded();
  });
}(jQuery));

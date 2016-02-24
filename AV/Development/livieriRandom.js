  (function() {
    var av = new JSAV("livieriRandom");
    var theArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    var arr = av.ds.array(theArray, {indexed: true});
    av.umsg("Text before displayInit()");
    // Note: av.displayInit() will not affect the number of slides.
    // All that it will do is affect what you get to see on the
    // initial slide.
    av.displayInit();
    // We are now starting a new slide (#2)
    av.umsg("... and text after displayInit()", {preserve: true});
    av.step();
    
    
    for(i=0;i<30;i++){
          av.step();
          var ran1 = Math.floor(Math.random()*theArray.length-1);
          var ran2 = Math.floor(Math.random()*theArray.length-1);
          arr.swap(ran1, ran2, highlight = true);
          av.umsg("Randomly picking " + ran1 + " AND " + ran2 +" And swaping");
    }
	av.recorded();

    // If you add av.umsg after av.recorded, it will add new slides in
    // ways that you probably do not expect and probably cannot
    // control in the way that you want. As av.recorded() rewinds the
    // slideshow, the new slides would go to the beginning of the slideshow.
    // So, unless you are trying to add slides on-the-fly
    // interactively, you don't want to do this.
    // av.umsg("Text after av.recorded()");
}());

.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-13 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata::
   :author: RJ Freund, Justin Gottschalk, Shane Livieri

============================================================
Full Outer Join Textual
============================================================
Full outer joins join both tables together accounting for matches but also
bringing along their individual, unmatched row and filling in nulls as noted
previously.

What this really means is if R and S are sets RS = RvS.

============================================================
Full Outer Join Slideshow Demo
============================================================
Below shows two tables, you may either click the far right arrow and skip
right to the end product. Or click the single right arrow and see how the join is done step by step.

.. inlineav:: DatabaseJoinsFullOuterSlideshow ss
   :output: show

============================================================
Full Outer Join Practice
============================================================
Practice joins by determining which columns the table will join on if any.

.. avembed:: Exercises/Development/DatabaseJoinsInnerMC.html ka
	:output: show

.. odsascript:: AV/Development/DatabaseJoinsFullOuterSlideshow.js

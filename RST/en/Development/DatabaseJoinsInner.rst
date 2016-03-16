.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-13 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata::
   :author: RJ Freund, Justin Gottschalk, Shane Livieri

============================================================
Inner Join Textual
============================================================
Inner joins are based on two tables having one or more of the same attribute or column name.
Within these columns where there are matching values we merge these rows together in a result table on that value.
Therefore if we have R(ABD) and S(ACD) the columns that match are A & D.
Within A & D assume there is just one match a row from R (1 2 3) and S (1 5 3) = RS (1 2 5 3) in the form RS(ABCD).

What this really means is if R and S are sets RS = R^S. 

============================================================
Inner Join Slideshow Demo
============================================================
Below shows two tables, you may either click the far right arrow and skip
right to the end product. Or click the single right arrow and see how the join is done step by step.

.. inlineav:: DatabaseJoinsInnerSlideshow ss
   :output: show

============================================================
Inner Join Embedded Demo
============================================================
Customize the tables by setting the width and height of each table.

.. avembed:: AV/Development/DatabaseJoinsInnerEmbedSlideshow.html ss

============================================================
Inner Join Practice Exercise
============================================================
Practice joins by determining which columns the table will join on if any.

.. avembed:: Exercises/Development/DatabaseJoinsInnerMC.html ka
	:output: show

.. odsascript:: AV/Development/DatabaseJoinsInnerSlideshow.js

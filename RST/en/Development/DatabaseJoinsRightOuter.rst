.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-13 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata::
   :author: RJ Freund, Justin Gottschalk, Shane Livieri

============================================================
Right Outer Join Textual
============================================================
A right outer join is the same matches as an inner join plus the unmatched rows
from table S will be in the result table.  The final table is produced from
taking the matching column and rows, while also adding the unmatched rows with
a null counterpart for the empty entries from the R columns.

What this really means is if R and S are sets RS = S-R. 

============================================================
Right Outer Join Slideshow Demo
============================================================
Below shows two tables, you may either click the far right arrow and skip
right to the end product. Or click the single right arrow and see how the join is done step by step.

.. inlineav:: DatabaseJoinsRightOuterSlideshow ss
   :output: show

============================================================
Right Outer Join Practice
============================================================
Practice joins by determining which columns the table will join on if any.

.. avembed:: Exercises/Development/DatabaseJoinsInnerMC.html ka
	:output: show

.. odsascript:: AV/Development/DatabaseJoinsRightOuterSlideshow.js

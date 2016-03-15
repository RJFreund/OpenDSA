.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-13 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata::
   :author: RJ Freund, Justin Gottschalk, Shane Livieri

============================================================
Left Outer Join Textual
============================================================
A left outer join is the same result as an inner join plus the unmatched rows 
from table R. The final table is produced from taking the matching column and rows,
while also adding the unmatched rows with a null counterpart.

============================================================
Left Outer Join Slideshow Demo
============================================================
Below shows two tables, you may either click the far right arrow and skip
right to the end product. Or click the single right arrow and see how the join is done step by step.


.. inlineav:: DatabaseJoinsLeftOuterSlideshow ss
   :output: show

============================================================
Left Outer Join Practice
============================================================
Practice joins by determining which columns the table will join on if any.

.. avembed:: Exercises/Development/DatabaseJoinsInnerMC.html ka
	:output: show

.. odsascript:: AV/Development/DatabaseJoinsLeftOuterSlideshow.js

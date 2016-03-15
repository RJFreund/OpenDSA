.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-13 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata::
   :author: RJ Freund, Justin Gottschalk, Shane Livieri

============================================================
Inner Join Textual
============================================================
In this example, the inner join takes in two tables, match of the same column,
and join together the rows with the matching value in that column. The final
table is the matching rows from table S and the matching rows from table combined together.
In math terms, it is an 'And'.

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

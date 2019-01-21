# DATA STRUCTURES

Data Structures are used all the time in general software (probably more than anything else one learns in a CS degree).

Lets take example of Java: We keep using dynamic arrays (ArrayList) , Linked Lists (LinkedList) and hash tables (HashMap) almost in writing any everyday logic. Most modern programming have these data structures implemented and we mostly use them rather than implement them .
Now lets take examples of different types of common software one sees and see whether they use any datastrutures (and I will try to prove that for most software, programming is essentially finding out what datastruture should one use)
1. IDEs (eg: Eclipse) : Rope (data structure) are generally used to store edits, so that one can do ctrl+Z all the time and reach a previous state fast . Trie is used to autocomplete code .
2. OS/Webservers (eg: Linux / Apache) : Priority queue are used to decide order in which threads / web requests are handled.
3. Search Engines (eg: lucene/solr/maybe Google) : are basically implementations of Search engine indexing
4.  Databases: (say MySQL) Apart from doing all thread like things an OS does, a DataBase also stores large linked lists on Disks (so essentially the Database Table is a linked list). They also have implementations of Inverted index for fast access
5. Compilers: (say Gcc) Use Hash Tables for symbol tables and trees to store parse trees.
6. Machine Learning: Requires efficient implementations of Matrix (2D Vectors) and Tensors (2+D vectors). Many Linear Algebra libraries are low level Matrix implementations with various Matrix operations built in. For Example, BLAS,NumPy, Eigen,CUDA etc.
So essentially everything which is a software around us is a customized implementation of one or more Data Structures.

content source : https://www.quora.com/What-is-the-importance-of-data-structuresEXPERIMENT

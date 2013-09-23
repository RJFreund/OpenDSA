final int testsize = 1000000;
final int OFFSET = 10000000;
boolean SUCCESS = true;
long time1, time2, totaltime;   // These get set by the testing routine

void visit(BinNode rt) { }

void setup() {
  Integer[] A = new Integer[testsize];
  int i;
  BST b = new BST();

  // Initialize to simply be the values from 0 to testsize-1
  // Ultimately, these are going to be our random keys
  for (i=0; i<A.length; i++)
    A[i] = i;
  // Now, generate a permuation on the numbers
  permute(A);

  // Now, build the BST
  // Each record will have a random key value from the permuation.
  // Since we actually store KVPairs, we will give it a "data" value
  // That is simply the count + OFFSET (so we can distinguish "data" from keys)
  for (i=0; i<A.length; i++)
    b.insert(new KVPair(A[i], i + OFFSET));

  // Now, let's test delete by randomly removing all the keys
  permute(A);
  for (i=0; i<A.length; i++) {
    KVPair k = (KVPair)b.remove(A[i]);
    if (b.size() != (testsize - i - 1)) {
      println("Oops! Wrong size. Should be " + (testsize - i - 1) + " and it is " + b.size());
      SUCCESS = false;
    }
    if ((Integer)k.key() != A[i]) {
      println("Oops! Wrong key value. Should be " + i + " and it is " + (Integer)k.key());
       SUCCESS = false;
    }
  }

  // Now we are going to run timing tests on our two traversals
  permute(A);
  BST btest = new BST();
  for (i=0; i<A.length; i++)
    btest.insert(new KVPair(A[i], i + OFFSET));
  time1 = millis();
  preorder(btest.root);
  time2 = millis();
  totaltime = (time2-time1);
  println("Preorder time: " + totaltime);
  time1 = millis();
  preorder2(btest.root);
  time2 = millis();
  totaltime = (time2-time1);
  println("Preorder2 time: " + totaltime);

  if (SUCCESS) {
    PrintWriter output = createWriter("success");
    output.println("Success");
    output.flush();
    output.close();
    println("Success!");
  }
  exit();
}

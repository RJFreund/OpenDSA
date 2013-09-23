void sorttime(Integer[] B) {
  int i;
  Integer[] A = new Integer[B.length];
  int totaltime, runs;
  int numruns = 20;

totaltime = 0;
for (runs=0; runs<numruns; runs++) {
  for(i=0; i<B.length; i++) A[i] = B[i];
  time1 = millis();
  inssort(A);
  time2 = millis();
  checkorder(A);
totaltime += (time2-time1);
}
  println("Standard Insertion Sort: Size " + testsize + ", Time: " + totaltime);

totaltime = 0;
for (runs=0; runs<numruns; runs++) {
  for(i=0; i<B.length; i++) A[i] = B[i];
  time1 = millis();
  inssort2(A);
  time2 = millis();
  checkorder(A);
totaltime += (time2-time1);
}
  println("Standard Insertion Sort: Size " + testsize + ", Time: " + totaltime);

totaltime = 0;
for (runs=0; runs<numruns; runs++) {
  for(i=0; i<B.length; i++) A[i] = B[i];
  time1 = millis();
  inssortshift(A);
  time2 = millis();
  checkorder(A);
totaltime += (time2-time1);
}
  println("shuffling Insertion Sort: Size " + testsize + ", Time: " + totaltime);

totaltime = 0;
for (runs=0; runs<numruns; runs++) {
  for(i=0; i<B.length; i++) A[i] = B[i];
  time1 = millis();
  inssortshift2(A);
  time2 = millis();
  checkorder(A);
totaltime += (time2-time1);
}
  println("shuffling Insertion Sort 2: Size " + testsize + ", Time: " + totaltime);
}


// Same as inssortsuffle, but try != instead of < for the zero test
// This will only matter to JavaScript
void inssortshift2(Integer[] A) {
  for (int i=1; i!=A.length; i++) { // Insert i'th record
    int j;
    int temp = A[i];
    for (j=i; (j!=0) && (temp < A[j-1]); j--)
      A[j] = A[j-1];
    A[j] = temp;
  }
}

// Instead of swapping, "shift" the values down the array
void inssortshift(Integer[] A) {
  for (int i=1; i<A.length; i++) { // Insert i'th record
    int j;
    int temp = A[i];
    for (j=i; (j>0) && (temp < A[j-1]); j--)
      A[j] = A[j-1];
    A[j] = temp;
  }
}

// Same as standard insertion sort, except get rid of the swap
// function call
void inssort2(Integer[] A) {
  int temp;
  for (int i=1; i<A.length; i++) // Insert i'th record
    for (int j=i; (j>0) && (A[j] < A[j-1]); j--) {
      temp = A[j]; A[j] = A[j-1]; A[j-1] = temp;
    }
}

void sorttest(Integer[] A) {
  inssort(A);
}

/* *** ODSATag: Insertionsort *** */
void inssort(Integer[] A) {
  for (int i=1; i<A.length; i++) // Insert i'th record
    for (int j=i; (j>0) && (A[j] < A[j-1]); j--)
      swap(A, j, j-1);
}
/* *** ODSAendTag: Insertionsort *** */

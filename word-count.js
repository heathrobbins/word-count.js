//solution to word-count in javascript on exercism.io

function wordCount(string) {
   var array = string.split(" ");
   for (i = 0; i < array.length; i++) {
       console.log(array[i]);
   }
   array.sort();
   var current = null; 
   var count = 0;
   for (var i = 0; i < array.length; i++) {
        if (array[i] != current) {
             if (count > 0) {
                 console.log(current + " comes out " + count + " times ");
             } 
             current = array[i];
             count = 1;
        } else {
             count++;
        }
   }
   if (count > 0) {
       console.log(current + " comes " + count + " times ");
   }
}
wordCount("a man a plan a canal panama");

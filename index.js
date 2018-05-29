let values = [1, 2, 3];
for (let num of values) {
    console.log(num);
 }
 // Code outputs
 1
 2
 3
 
 let o  = {
 
      createIterator(items) {
           for (let i = 0;  < items.length; i++)  {
               yield items[i];
           }
        }
    };
    let iterator  = o.createIterator([1, 2, 3]);
    
    
    // Creating Iterables
    
      let collection  = {
          items:  [],
          *[Symbol.iterator]() {
              for (let item of this.items)  {
                    yield item;
             }
         }
    };

    collection.items.push(1);
    collection.items.push(2);
    collection.items.push(3);

    for (let x of collection) {
        console.log(x);
    }

// Code outputs 

1
2
3

let colors  =  [ "red", "green", "blue" ];
let tracking = new Set([1234, 5678, 9012]);
let data  =  new Map();

data.set("title", "The Catcher & the Rye");
data.set("format", "ebook");

for (let entry of colors.entries()) {
    console.log(entry);
}

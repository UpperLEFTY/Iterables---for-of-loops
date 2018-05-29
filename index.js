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

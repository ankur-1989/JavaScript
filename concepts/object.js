function Point(x, y) {
  this.x = x;
  this.y = y;
}
let p1 = new Point(1, 2);
// Here p1 starts with an initial Hidden class
/** Property Addition: As properties are added, V8 generates new hidden classes reflecting the object's evolving structure. 
   * The sequence and order of property additions are crucial. 
   * Each addition transitions the object to a new hidden class that includes the new property.
  
  
   * For instance: */
let obj = {};
obj.a = 10; // Transition to hidden class with property 'a'
obj.b = 20; // Transition to hidden class with properties 'a' and 'b'

/** Optimized Property Access: These hidden classes store information about property offsets, enabling V8 to access properties
 *  directly without hashing or extensive lookups, thereby improving performance. */

/** Best Practices for Optimal Performance
  Consistent Property Initialization: 
  Define and initialize all object properties in a consistent order, preferably within the constructor function. 
  This practice promotes the reuse of hidden classes across similar objects, enhancing performance. 
  
  Avoid Adding Properties Dynamically: Refrain from adding properties to objects after their initial creation, 
  as this can lead to the creation of new hidden classes and degrade performance.
  
  Constructor Functions: Utilize constructor functions 
  to define object structures upfront, ensuring a consistent hidden class assignment
  
  */

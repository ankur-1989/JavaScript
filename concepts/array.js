/** Storage Mechanism:

Internally, JavaScript engines use a combination of dense arrays and sparse arrays:
Dense Arrays: If you add elements sequentially (e.g., array.push(1)), the engine might use a contiguous memory-like structure.
Sparse Arrays: If you create an array with non-sequential indices (e.g., array[1000] = 5), the engine will store it as a hash table or similar structure.
This hybrid approach ensures that arrays are flexible and efficient for both dense and sparse data.

When You Use array.push(value):

Behavior: array.push(value) appends the value at the end of the array and increases the length property by 1.
Implementation:
If there’s enough allocated space in the current array buffer, the value is added at the next available slot.
If the allocated buffer is full, the JavaScript engine resizes the underlying array. This typically involves:
Allocating a larger block of memory (often 1.5–2 times the current size).
Copying existing elements to the new memory block.
Adding the new element to the end of the array.

Arrays in JavaScript are not infinite, but the system dynamically resizes them to fit more elements as long as sufficient memory is available.
If your program uses excessive memory or the system runs out of resources, operations like push or creating large arrays will fail.

Type Flexibility:

JavaScript arrays can hold elements of different types (e.g., array = [1, "string", true]), unlike C/C++ arrays, which are strictly typed.
This is possible because JavaScript arrays store references to the values rather than the values themselves in contiguous memory.

Memory Management:

In C/C++, resizing dynamic arrays requires explicit reallocation and copying by the programmer. In JavaScript, this is handled automatically by the engine.

Hashing for Sparse Arrays:

Unlike C/C++ arrays, JavaScript can handle sparse indices efficiently using hash-like structures
*/

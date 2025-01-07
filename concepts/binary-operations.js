const b2d = (x) => parseInt(x, 2); // binary to decimal
const d2b = (x) => x.toString(2); // decimal to binary
b2d(101); // 5
d2b(5); // 101

0b0001 << 1; // 2 (0010)
0b0001 << 2; // 4 (0100)
0b0001 << 3; // 8 (1000)

/** Turn off bits with &0 and turn on bits with &1 and flip bit with ^1 */

// turn ith bit off
const turnOFF = (num, i) => num & ~(1 << (i - 1));

// turn ith bit on
const turnON = (num, i) => num | (1 << (i - 1));

// flip ith bit
const flip = (num, i) => num ^ (1 << (i - 1));

// query ith bit
const query = (num, i) => num & (1 << (i - 1));

// create n 1's mask
(1 << n) - 1;

const obj = { x: 'xxx', y: 1 }

Object.values(obj); // ['xxx', 1]

const obj1 = ['e', 's', '8']; // same as { 0: 'e', 1: 's', 2: '8' };
Object.values(obj1); // ['e', 's', '8']

// when we use numeric keys, the values returned in a numerical 
// order according to the keys
const obj2 = { 10: 'xxx', 1: 'yyy', 3: 'zzz' };
Object.values(obj2); // ['yyy', 'zzz', 'xxx']
Object.values('es8'); // ['e', 's', '8']
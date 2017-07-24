const obj1 = { x: 'xxx', y: 1 };
Object.entries(obj1); // [[’x’, 'xxx’], [’y’, 1]]

const obj2 = ['e', 's', '8'];
Object.entries(obj2); // [[’0’, 'e’], [’1’, 's’], [’2’, '8’]]

const obj3 = { 10: 'xxx', 1: 'yyy', 3: 'zzz' };
Object.entries(obj); // [[’1’, 'yyy’], [’3’, 'zzz’], [’10’, 'xxx’]]
Object.entries('es8'); // [['0', 'e'], ['1', 's'], ['2', '8']]
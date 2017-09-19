'use strict';

const scalar1 = 100;
const scalar2 = scalar1;

const object1 = { field: scalar1 };
const object2 = object1;

console.dir({ object1 });
console.dir({ object2 });
console.dir({ scalar1 });

object1.field = 600;

console.dir({ object1 });
console.dir({ object2 });
console.dir({ scalar1 });

function merges<T extends object, U extends number>(ObjA:T, ObjB:U){
    return Object.assign(ObjA, ObjB)
}

const mergeObj = merge({name: "Max"}, {hobby:"Sport", age: 2})

console.log(mergeObj.name);
console.log(mergeObj.age);
function merge<T, U>(ObjA:T, ObjB:U){
    return Object.assign(ObjA, ObjB)
}

const mergedObj = merge({name: "Max"}, {hobby:"Sport", age: 2})

console.log(mergedObj.name);
console.log(mergedObj.age);

interface lengthy{
    length: number
}


function countAndDescribed<T extends lengthy>(element: T){
    let descriptionText = "Got No Value"
    if (element.length === 1){
        descriptionText = "Got 1 element"
    } else if(element.length > 1) {
        descriptionText = "Got " + element.length + " elements"
    }
    return [element, descriptionText]
}

// console.log(countAndDescribed("here we are"));
console.log(countAndDescribed(["sport", "game", "learning", "dancing"]));
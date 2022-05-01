
 function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return "Value is: " + obj[key]
 }

 console.log(  extractAndConvert({name: "Max"}, "name"));
//  console.log(  extractAndConvert({name: "Max"}, "age")); // sge won't work because it's not a key in the object passes to the first parameter

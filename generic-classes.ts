// This approach is majorly applicable to primitive values like string, number, boolean and not to non-primitive values like an object and array
class DataStorage<T extends string | number | boolean > {
    private data: T[] = []
 
    addItem(item: T){
     this.data.push(item)
    }
 
    // methods in class as well can make use of generic type if you don't want to use the general generic type in the class
    removeItem(item: T){
     this.data.splice(this.data.indexOf(item), 1)
    }
 
    getItems(){
        return [...this.data]
    }
 }
 
 const textStorage = new DataStorage<string>()
 textStorage.addItem("Manu")
 textStorage.addItem("Man")
 textStorage.addItem("ManT")
 textStorage.removeItem("Manu")
 console.log( textStorage.getItems());
 
 const numberStorage = new DataStorage<number>()
 numberStorage.addItem(1)
 numberStorage.addItem(12)
 numberStorage.addItem(3)
 numberStorage.addItem(77)
 numberStorage.removeItem(3)
 console.log( numberStorage.getItems());
 
 // const myObj = {name:"key"}
 
 // const objectStorage = new DataStorage<object>()
 // objectStorage.addItem(myObj)
 // objectStorage.addItem({name: "key1"})
 // objectStorage.addItem({name: "key2"})
 // objectStorage.removeItem(myObj)
 // console.log( objectStorage.getItems());
 
 
 
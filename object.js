let sum = 0;
function abc(numbers){
    for( let someArray of numbers){
        sum += someArray;
    }
    return sum
}
console.log(abc([1, 2, 3, 4, 5]));



// let sum = 0;
// function arrayNumber(array){
//     for(let i = 0; i < array.lenght; i++){
//         sum += array[i];
//     };
//     return sum;
// }
// const someOfArray = [1, 2, 3, 4, 5];
// console.log(arrayNumber(someOfArray));

// task -2:Create an object with properties name and age. Write a function to add a new property city to the object.
let person ={
    fullName : "Swarna" ,
    age : 22 ,
}
function addkey(objKey , Cityname){
    objKey.city = Cityname;
};
addkey(person, "khulna");
console.log(person);

// task -3: Write a function that takes a number and returns whether it is even or odd.
function abc(n){
    if(n % 2 === 0){
        return "The number is even"
    }
    else{
        return "The number is odd"
    }
}
// console.log(abc(8));

// Task -4: Create an object that represents a car with properties brand and model. Write a function to update the model of the car.

let car = {
    brand : "Suzuki ",
    model : "Solio"
};
function updateModel(keyName , keyValue){
    keyName.model = keyValue;
};
updateModel(car , "GXR")
// console.log(car);

// Task -5: Write a function that loops through an object and prints each property and its value.
let myself = {
    fullName : "Nurjahan Swarna",
    instituteName : "WIT",
    Roll: 16
}
function property( loops){
 for(let abc in loops){
    console.log(abc + " : " + (loops[abc]));
    
 }; 
} ;
property(myself);





let myObj = {
    name: "John",
    age: 56
}

let myObj_serialized = JSON.stringify(myObj);

localStorage.setItem("myObject", myObj_serialized);

let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
console.log(myObj_deserialized);
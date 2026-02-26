let array = [];
console.log(typeof array);

//Object :
// Thuộc tính (key - tên của thuộc tính : value - giá trị của thuộc tính)

// khởi tạo object
let person = {};

let person_v2 ={
    id: 0,
    fullName: "Đạt bé bỏng",
    age: 19,
    sex: "Male",
    "full name" : " Đạt Tít",
};
console.log(person_v2);

//CRUD : Cread - Read - Update - Detele

//Read

//Dot notation với Bracket notation 
//Cách 1 : Dot notation 
console.log(`Tên của bạn là ${person_v2.fullName}`);

//Cách 2 : Bracket notation
console.log(`Tên của bạn là ${person_v2["full name"]}`);


// Create
person_v2.email ="Đatz@gmail.com";
person_v2.handleSay = () => {
    console.log("Xin chào mình là đạt bé bỏng");
    
};
console.log(person_v2.handleSay());

//Update
person_v2.age = 20;

//Delete

delete person_v2["full name"];
console.log(person_v2);

let animalDog = {
    name : "john",
    age : 2,
};
let person_v5 ={
    email:"ma@gmail.com"
}

let animalCat ={
    ...animalDog,
    ...person_v5,
};
console.log(animalCat);

//Array Object
const players =[
    {id : 0, name :"Đạt bé bỏng", age : 19 , goals: -1},
    {id : 1, name :"Bệu", age : 19 , goals: 0},
];
//In ra các cầu thủ phản lưới nhà
//Hiện thị ra theo format tên - số bàn phản lưới
let listPlayer = players.filter((player) => {
    return player.goals < 0;
});
listPlayer.forEach((player) => {
    console.log(`${player.name} - ${player.goals}`);
    
});


//Object lồng
let person_max ={
    id: 1,
    fullName:{
        fistName:"Đạt",
        lastName:"Bé bỏng",
    },
};
console.log(person_max.fullName.fistName);

//Duyệt qua Object

console.log(Object.keys(person_v2));
console.log(Object.values(person_v2));
console.log(Object.entries(person_v2));



// console.log("Hello");

// let name = true;

// console.log(typeof name);

// class Customer{
//     name;
//     age;
//     address;

//     constructor(name,age,address){
//         this.name=name;
//         this.age=age;
//         this.address=address;
//     }

//     setName(name) {
//         this.name=name;
//     }
//     getName(){
//         return this.name;
//     }
// }

// let customer01 = new Customer("saman",12,"gamapaha");

// console.log(customer01.getName());

// let randomNumber = Math.floor((Math.random()*10)+1);
// console.log(randomNumber);

let customers = [
    {
        name:"saman",
        age:12,
        address:"gamapaha"
    },
    12,
    [
        {
            name:"wimal"
        },
        {
            name:"kamal"
        },
        {
            name:"sunil"
        },
        12
    ],
    "vimal",
    {},
    {},
    {}
]



console.log(customers[2]);

customers[2].forEach(nameObj => {
    console.log(nameObj.name);
})




interface User {  //User is interface name which can be used a datatype
    name:string,
    age:number,
    gender: string
    eid:number,
    email:string
}

const employee : User ={ //here employee is variable of User type 
    name:'Nitin Sharma',
    age:23,
    gender:'male',
    eid:101,
    email:'nitin101@gmail.com'
};

console.log(typeof employee)
console.log(employee)
const emp : User ={ //here employee is variable of User type 
    name:'Nitin Sharma',    
    gender:'male',    
    email:'nitin101@gmail.com'
};

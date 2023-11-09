// Task 1


let func = (obj) => {
    for (const key in obj) {
        console.log(key);
    }
}
let student = {
    name: "Khalil Kheyrulla",
    sclass: "II",
    rollno: 47
};

func(student);




// Task 2


console.log(student);
delete student.rollno;
console.log(student);




// Task 3


const objWithSum = {
    a: 10,
    b: 10
};

const newObjWithSum = {
    ...objWithSum,
    sum: objWithSum.a + objWithSum.b
}

console.log(newObjWithSum);


// Task 4


const objWithRes = {
    n: 9,
    info: "n is smaller than 20"
};

if (objWithRes.n > 10) {
    let newObjWithRes = {
        ...objWithRes,
        info: "n is bigger than 10"
    }
    console.log(newObjWithRes);
} else {
    console.log(objWithRes);
}
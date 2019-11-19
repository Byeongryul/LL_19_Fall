var a = 10;     // 재선언이   가능, 값 변경   가능
let b = 20;     // 재선언이 불가능, 값 변경   가능
const c = 30;   // 재선언이 불가능, 값 변경 불가능

var name = "호";
/*
console.log(
`제 이름은 "${name}" 입니다.
제 이름은 "${name}" 입니다.`
);
*/
function cal(mode){
    var funcs={
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    };
    return funcs[mode];
}

//console.log(cal('plus')(10,5));

class team1{
    constructor(n10){ // 생성자
        this.n1 = n10;
    }
    getOutfo(){
        return this.n1;
    }
}

class team extends team1{
    constructor(n10, n20){ // 생성자
        super(n10 + n20);
        this.n1 = n10;
        this.n2 = n20;
    }
    getInfo(){
        return this.n1 + this.n2;
    }
}

var num = new team(1, 2);

let tmp = num.getInfo();

console.log(tmp);

PlusTwo = (s) =>{
    return s + 2
}

//function(value){return value * 2}
//value => value * 2

arr = [1,2,3,4,5]
arr_map = arr.map(value => value * 2)
console.log(arr_map)

arr_filter = arr.filter(v => v % 2)
console.log(arr_filter)

//setTimeout(()=>{console.log("안녕히가세요")}, 2000) //비동기식

console.log("안녕하세요") //동기식






function sayHello2(name){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(name + "님 안녕하세요")
            resolve("city")
        }, 3000)
    })
}

async function sayHello3(name){ //파해책
    loc = await sayHello2(name)
    console.log(loc + "로 안녕히")
}

sayHello3("hohoho")
var name = "이이이이잉"
let name_1 = "이이이잉"
const name_2 = "이이아ㅏㅏㅏ"
console.log(
    "제 이름은 \"" + name + "\"입니다\n"
)
console.log(
    `제 이름은 "${name}" 입니다.`
);
var 승환 = 170;
var 재욱 = 160;
if (승환 > 재욱){
    console.log("승환이가 더 크네?");
}
else{
    console.log("재욱이가 더 크다고???");
}

var foo = "This is String";

for(i = 0; i < 10; i++){
    console.log(i);
    let result = 1;
    console.log(result);
}

let scan = process.argv;

console.log('A');
console.log('B');
if(scan[2] == "123"){
    console.log('C1');
}else{
    console.log('C2');
}
console.log('D');

let arr = ["홍길동","마리오","루이지","키노피코"];
arr[2] = "정승환";
arr.push("김승환");
let vv = arr.pop();
console.log(arr);
console.log(vv);
let slice = arr.slice(1,2);
console.log(slice);
console.log(arr);

let arr_1 = [12,34,22,45,123,22,37];
console.log(Math.max.apply(null,arr_1));
console.log(Math.min.apply(null,arr_1));

mail('홍길동','23세','kk동');
mail('가나다','12세','aa동');
mail('꼬부기','3세','pp동');

function mail(name, age, address){
    console.log(`name : ${name}`);
    console.log(`age : ${age}`);
    console.log(`adress : ${address}`);
    console.log();
}

(function(){
    i=7;
    while(i<10){
        console.log(i);
        i+=1;
    }
})();

let grades ={'egoing' : 10, 'k8805' : 0, 'sust' : 80};
console.log(grades);

let grades_1 = {}
grades_1['egoing'] = 10;
grades_1['k8805'] = 0;
grades_1['sust'] = 80;
console.log(grades_1);

let grades_2 = new Object();
grades_2['egoing'] = 10;
grades_2['k8805'] = 0;
grades_2['sust'] = 80;
console.log(grades_2);

function head(element){
    var element;
    this.element = element;
    this.next = null;

    return{
        empty(){
            console.log(element);
        }
    }
}
var a = head(10);
a.empty();
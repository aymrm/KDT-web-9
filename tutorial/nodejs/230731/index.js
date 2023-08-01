console.log(1);
setTimeout(()=>{
    console.log(2);
},2000);
console.log(3);


/*
// 오류 확인
function goMart(){
    console.log("마트에 가서 어떤 음료를 살지 고민한다");
}

function pickDrink(){
    setTimeout(()=>{
        console.log("고민 끝");
        product="제로 콜라";
        price=2000;
    },3000)
}

function pay(product,price){
    console.log(`상품명 : ${product} , 가격 : ${price}`)
}

let product;
let price;
goMart();
pickDrink();
pay(product,price);
// setTimeout이 걸려있는 부분이 나중에 되면서 결과가 모두 undefined가 나옴

*/

function mainFunc(param1,param2,callback){
    callback();
}

function callbackFunc(){
    console.log("콜백함수 입니다");
}

mainFunc(1,2,callbackFunc);
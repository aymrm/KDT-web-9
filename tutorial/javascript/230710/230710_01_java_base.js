// 변수 : 특정 값을 저장하는 공간

var number = 5;

var number1;
number1=5;

let string = "가나다";
string = "라마바";

const string2 = "가나다";
console.log(string2);

// var은 재선언 , 재할당이 가능
// let은 재선언 불가능 , 재할당은 가능 var보다 권장함
// const는 재선언 재할당 모두 불가능 

// " $(name)을 쓰면 변수값을 문자열 안에 넣어 사용 가능 (벡틱에서만)"

let names = ["홍","성"];

names.push("짱");

console.log(names);
console.log(names.length);

names.pop();
console.log(names);

names.unshift("신");
console.log(names);
// 배열 앞에 추가

names.shift();
console.log(names);
// 배열 맨 앞에 삭제

console.log(names.indexOf("홍"));
// 인덱스를 찾아주는데 없으면 -1 있으면 인덱스를 반환해줌

console.log(names[-1])
// 인덱스를 역으로 하거나 오버하는 경우에는 undefined가 나옴

names[4]="짱";
// 인덱스 3이 비어있으므로 빈 값을 채워넣고 4번째 값으로 넣음

let isIncludes=names.includes("짱")
console.log(isIncludes);

let cat={
    age:5,
    name:"",
    mew:function(){
        console.log("야옹");
    }
}

cat.mew;
console.log(cat);
console.log(cat.age);


// typeof는 자료형을 알려주는 함수

// let score1=prompt("첫번째 성적을 입력하세요");
// let score2=prompt("두번째 성적을 입력하세요");
// console.log(score1,score2);

// 문자열을 숫자로 변환할때는 Number() , 숫자를 문자열로 변환할때는 String()
// .tostring()형태로 뒤에 붙여서 사용 가능하나 null에는 불가능

// ==은 비교연산자 이기는 한데 여기서는 자료형을 구분하진 않는다
// 즉, 5=="5"가 성립하기에 이거까지 확인하기 위해서는 5==="5"로 3개를 써야한다




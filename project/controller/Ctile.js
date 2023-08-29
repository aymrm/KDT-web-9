const arrayBuild = (num) => {
    return Array(num).fill().map((v,i)=>i+1);
}

// 1~num 자연수가 들어있는 배열 생성

const shuffle = (array , iter) => {
    for (let i = 0 ; i < iter ; i++){
        for (let j = array.length - 1; j > 0; j--) {
          let m = Math.floor(Math.random() * (j + 1));
          [array[j], array[m]] = [array[m], array[j]];
        }
    }
    return array;
}

// 배열 전체를 셔플, 전체 셔플하는걸 몇번 반복할 것이냐인데
// 1로 해도 한번 전체 셔플 하는 것이라 너무 큰 숫자는 안 쓰는게 좋음

module.exports = {
    arrayBuild,
    shuffle,
}
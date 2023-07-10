const basic_tile_arr=Array(136).fill().map((v,i)=>i);
let game_tile_arr=basic_tile_arr;
const Crypto=window.crypto;

function tile_shuffle(n){
    let shuffle_arr=[];
    for (let i=0;i<n;i--){
        shuffle_arr[i]=(Math.random())*(n-i);
    }
    return shuffle_arr;
}``
let tile=tile_shuffle(4);

console.log(tile);
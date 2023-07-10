let myself={
    name:"je",
    age:25,
    hobby:"mahjong",
    condition:"sleepy",
    sleep:function(){
        console.log("zzz");
    },
    awake:function(){
        condition:"fresh";
    }
}

myself.sleep();
myself.awake();
console.log(myself)
// code your solution here
function saturdayFun(object1 = "roller-skate"){
    return `This Saturday, I want to ${object1}!`;
}

function mondayWork(object2 = "go to the office"){
    return `This Monday, I will ${object2}.`;
}

function wrapAdjective(special){
    return function(msg){
        return `You are ${special}${msg}${special}!`;
    }
}
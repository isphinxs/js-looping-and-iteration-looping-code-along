// Code your solutions in this file
function writeCards(arrOfNames, eventName) {
    const messages = [];
    for (let i = 0; i < arrOfNames.length; i ++) {
        messages[i] = `Thank you, ${arrOfNames[i]}, for the wonderful ${eventName} gift!`
    }
    return messages; 
}

function countDown(integer) {
    let countdown = integer;
    while (countdown >= 0) {
        console.log(countdown);
        countdown --;
    }
}
const credits = 23580;
const pricePerDroid = 3000;
let capability;

let question = prompt ("How many droids You want to buy?");

while (question/question != 1) {
    alert ('Введите, пожалуйста, число');
    question = prompt ("How many droids You want to buy?");
    continue;
}

if (question == null) {
    console.log ('Отменено пользователем!');
}
else {
    capability = question*pricePerDroid;
    if (capability > credits) {
        console.log ('Недостаточно средств на счету!');
    }
    else {
        console.log (`Вы купили ${question} дроидов, на счету осталось ${credits - capability} кредитов.`)
    }
}
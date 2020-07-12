let input;
let total = 0;

do {
    input = prompt ('Введите число:');
    let inputNumber = Number(input);
    console.log(inputNumber);
    if (String(inputNumber) == 'NaN') {
        alert (`Было введено не число, попробуйте еще раз`);
    }
    else {
        total = total + inputNumber;
        console.log(inputNumber);
    }
}
while (input != null);

alert (`Общая сумма чисел равна ${total}`);
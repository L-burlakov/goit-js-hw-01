let country;
const china = 100;
const chile = 250;
const australia = 170;
const india = 80;
const jamaica = 120;

let question = prompt("Пожалуйста, укажите страну доставки");
if (question == null) {
    console.log ('Отменено пользователем!');
}
else {
    question = question.toUpperCase();
    switch (question) {
        case 'КИТАЙ':
            alert (`Доставка в ${question} будет стоить ${china} кредитов`);
            break;
        case `ЧИЛИ`:
            alert (`Доставка в ${question} будет стоить ${chile} кредитов`);   
            break;
        case 'АВСТРАЛИЯ':
            alert (`Доставка в ${question} будет стоить ${australia} кредитов`);
            break;
        case 'ИНДИЯ':
            alert (`Доставка в ${question} будет стоить ${india} кредитов`);    
            break;
        case 'ЯМАЙКА':
            alert (`Доставка в ${question} будет стоить ${jamaica} кредитов`);  
            break;
        default:
            alert (`В вашей стране доставка не доступна`);
            break;
                    
        }                     
}
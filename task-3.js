const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

message = prompt ('Enter the password');

if (message == null) {
    console.log ('Отменено пользователем!');
}
else if (message === ADMIN_PASSWORD) {
    console.log ('Добро пожаловать!');
}
else if (message != ADMIN_PASSWORD) {
    console.log ('Доступ запрещен, неверный пароль!');
}

alert (`Your password is ${message}`);

// script.js

let daysOfWeek = {
    'понедельник': 'monday',
    'вторник': 'tuesday',
    'среда': 'wednesday',
    'четверг': 'thursday',
    'пятница': 'friday',
    'суббота': 'saturday',
    'воскресенье': 'sunday'
};

function translate(russian, object) {
    return russian + ' по-английски: ' + object[russian];
}

translate('вторник', daysOfWeek);
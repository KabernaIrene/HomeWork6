const birthYear = prompt('Ваш рік народження');
const cityLive = prompt ('В якому місті Ви проживаєте?');
const favoriteSport = prompt('Ваш улюблений вид спорту?');


let year;
let city;
let sport;

if (isNaN(birthYear)) {
    year = 'Ви невірно ввели рік народження.'
} else if  (birthYear == null) {
    year = 'Шкода, що ви не захотіли ввести свій рік народження'
} else {
    year = `Ви народились в ${birthYear} році`
} 

if (cityLive == 'Київ') {
    city = 'Ти живеш у столиці України.'
} else if (cityLive == 'Вашингтон') {
    city = 'Ти живеш у столиці США.'
} else if (cityLive == 'Лондон') {
    city = 'Ти живеш у столиці Великобританії.'
} else if (cityLive == null) {
    city = 'Шкода, що ви не захотіли ввести назву міста, де Ви проживаєте' 
} else {
    city = `Ти живеш у місті ${cityLive}.`
}

if (favoriteSport == 'бокс') {
    sport = 'Круто! Хочеш стати Олександром Усіком?'
 } else if (favoriteSport == 'футболл') {
    sport = 'Круто! Хочеш стати Кріштіану Роналду?'
 } else if (favoriteSport == 'плавання') {
    sport = 'Круто! Хочеш стати Кеті Ледекі?'
 } else if (favoriteSport == null) {
    sport = 'Шкода, що ви не захотіли ввести свій улюблений вид спорта'
 } else {
    sport = `Тобі подобається ${favoriteSport}. Бажаємо Успіху!`
 }


    alert (`${year}\n${city}\n${sport}`)
















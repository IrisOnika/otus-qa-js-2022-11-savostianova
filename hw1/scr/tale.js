import {strict as assert} from 'node:assert';

function kolobok(character) {
    switch(character) {
        case 'бабушка':
            return 'Я от бабушки ушёл';
        case 'дедушка':
            return 'Я от дедушки ушёл';
        case 'заяц':
            return 'Я от зайца ушёл';
        case 'волк':
            return 'Я от волка ушёл';
        case 'медведь':
            return 'От медведя ушёл';
        case 'лиса':
            return 'Меня съели';
        case undefined:
            //return 'Колобок никого не встретил';
            throw new Error('Колобок никого не встретил');
        default:
            throw new Error('Колобок такого не встречал');

    }
}
//тесты функции kolobok
assert.equal(kolobok('бабушка'), 'Я от бабушки ушёл')
assert.equal(kolobok('дедушка'), 'Я от дедушки ушёл')
assert.equal(kolobok('заяц'), 'Я от зайца ушёл')
assert.equal(kolobok('волк'), 'Я от волка ушёл')
assert.equal(kolobok('медведь'), 'От медведя ушёл')
assert.equal(kolobok('лиса'), 'Меня съели')
assert.throws(function(){
    kolobok()
}, Error('Колобок никого не встретил'), 'проверка на неопределённость не пройдена')
assert.throws(function(){
    kolobok('ёжик')
}, Error('Колобок такого не встречал'), 'проверка на ёжика не пройдена')
assert.throws(function(){
    kolobok(1)
}, Error('Колобок такого не встречал'), 'проверка на цифру не пройдена')
assert.throws(function(){
    kolobok(null)
}, Error('Колобок такого не встречал'), 'проверка на null не пройдена')
assert.throws(function(){
    kolobok(true)
}, Error('Колобок такого не встречал'), 'проверка на bool не пройдена')



function newYear(person) {
    if (person === 'Дед Мороз' || person === 'Снегурочка') {
        return `${person}! ${person}! ${person}!`
    }
    else {
        if (person === undefined) {
            throw new Error('Никого не позвали');
        }
        else {
            throw new Error('Позвали не того');
        }
    }
}
//тесты функции NewYear
assert.equal(newYear('Дед Мороз'), 'Дед Мороз! Дед Мороз! Дед Мороз!')
assert.equal(newYear('Снегурочка'), 'Снегурочка! Снегурочка! Снегурочка!')
assert.throws(function(){
    newYear()
}, Error('Никого не позвали'), 'проверка на неопределённость не пройдена')
assert.throws(function(){
    newYear('Яга')
}, Error('Позвали не того'), 'проверка на Ягу не пройдена')
assert.throws(function(){
    newYear(99)
}, Error('Позвали не того'), 'проверка на цифру не пройдена')
assert.throws(function(){
    newYear(null)
}, Error('Позвали не того'), 'проверка на null не пройдена')
assert.throws(function(){
    newYear(false)
}, Error('Позвали не того'), 'проверка на bool не пройдена')


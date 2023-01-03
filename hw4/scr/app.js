/**
 * Функция getScore суммирует все баллы учеников
 * @param {Object} scores - список учеников и их отметок
 * @returns {number} Сумма баллов всех учеников
 */
function getScore (scores) {
    switch (scores) {
        case undefined:
            throw new Error('Параметр функции не задан');
        case null:
            throw new Error('Список учеников пустой');
        default:
            if (typeof(scores)!== "object" || Array.isArray(scores)){
                throw new Error('На вход необходимо подавать объект в виде списка учеников с оценками');
            }
            else {
                let scoreSum = 0
                for (let key in scores) {
                    if (isNaN(scores[key])) {
                        throw new Error(`Оценка для ученика ${key} не является числом` ); 
                    }
                    else {
                        if (scores[key] < 0 || scores[key] > 10) {
                            throw new Error(`Оценка для ученика ${key} не может быть меньше 0 или больше 10` ); 
                        }
                        else {
                            scoreSum +=scores[key]   
                        }
                    }
                }
                    return scoreSum
            }  
    }
}

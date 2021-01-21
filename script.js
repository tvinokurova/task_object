/// Необходимо вывести в консоль браузера все свойства и 
///значения объекта `person` в следующем виде:
///<property>: <value>
const person = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
}

for (let key in person) {
    let result = ''

    if (key === 'firstName') {
        result += 'First name: '
    }
    if (key === 'lastName') {
        result += 'Last name: '
    }
    if (key === 'age') {
        result += 'Age: '
    }
    if (key === 'location') {
        result += 'Where to find: '
    }

    result += person[key]


    if (person[key] === 25) {
        result += ' ages'
    }

    console.log(result)

}


///Необходимо вывести в консоль браузера все свойства и 
///значения объекта `person` таким образом, чтобы 
///вывод выглядел следующим образом:

///   First name: Jack
///  Last name: Sparrow
///  Age: 25 ages
///  Where to find: Caribbean sea

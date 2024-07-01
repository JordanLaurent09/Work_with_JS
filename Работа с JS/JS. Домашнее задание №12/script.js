"use strict"

// Определение базового класса и создание аксессоров

class User{
    constructor(name, role, age, sex, height, weight, eyeColor) {
        this.name = name;
        this.role = role;
        this.age = age;
        this.sex = sex;
        this.height = height;
        this.weight = weight;
        this.eyeColor = eyeColor;
    }

    // Аксессоры name 

    get Name() {
        return this.name;
    }

    set Name(newName) {
        if (newName.length > 50) {
            console.log("Неверное имя");
            return;
        }
        this.name = newName;
    } 

    // Аксессоры role
    get Role() {
        return this.role;
    }


    // Аксессоры age
    get Age() {
        return this.age;
    }

    set Age(newAge) {
        if (newAge < 0 || newAge > 100) {
            console.log("Неверный возраст");
            return;
        }
        this.age = newAge;
    }

    // Аксессоры sex
    get Sex() {
        return this.sex;
    }

    set Sex(newSex) {
        if (newSex != 'm' || newSex != 'f') {
            console.log("У нас тут не Америка!");
            return;
        }
        this.sex = newSex;
    }

    // Аксессоры height
    get Height() {
        return this.height;
    }

    set Height(newHeight) {
        if (newHeight < 0 || newHeight > 220) {
            console.log("Неверный рост");
            return;
        }
        this.height = newHeight;
    }

    // Аксессоры weight
    get Weight() {
        return this.weight;
    }

    set Weight(newWeight) {
        if (newWeight < 0 || newWeight > 350) {
            console.log("Неверный вес");
            return;
        }
        this.weight = newWeight;
    }

    // Аксессоры eyeColor
    get EyeColor() {
        return this.eyeColor;
    }

    set EyeColor(newColor) {
        let colors = Array("green", "gray", "blue", "brown", "red", "black");

        if (!colors.includes(newColor)) {
            console.log("Цвет глаз указан неверно");
            return;
        }
        this.eyeColor = newColor;
    }

}

// Добавление классу нового метода при помощи обращения к его прототипу

User.prototype.checkAccess = function(resource, action) {
    
    let resourcePropertyDescription = null;

    switch (resource) {
        case "name":
            resourcePropertyDescription = Object.getOwnPropertyDescriptor(this, 'name');
        break;
        case "role":
            resourcePropertyDescription = Object.getOwnPropertyDescriptor(this, 'role');
        break;
        case "age":
            resourcePropertyDescription = Object.getOwnPropertyDescriptor(this, 'age');
        break;
        case "sex":
            resourcePropertyDescription = Object.getOwnPropertyDescriptor(this, 'sex');
        break;
        case "height":
            resourcePropertyDescription = Object.getOwnPropertyDescriptor(this, 'height');
        break;
        case "weight":
            resourcePropertyDescription = Object.getOwnPropertyDescriptor(this, 'weight');
        break;
        case "eyeColor":
            resourcePropertyDescription = Object.getOwnPropertyDescriptor(this, 'eyeColor');
        break;
        default:
            resourcePropertyDescription = Object.getOwnPropertyDescriptor(this, 'role');
            break;
    }

    switch (action) {
        case "enumerable":
            console.log(`Права доступа к ресурсу ${resource} - имеются, а право к действию ${action} -  ${resourcePropertyDescription.enumerable}`);
            break;
        case "configurable":
            console.log(`Права доступа к ресурсу ${resource} - имеются, а право к действию ${action} -  ${resourcePropertyDescription.configurable}`);
            break;
        case "writable":
            console.log(`Права доступа к ресурсу ${resource} - имеются, а право к действию ${action} -  ${resourcePropertyDescription.writable}`);
            break; 
        default: 
            console.log("Если я машина, разве это означает, что надо мной можно издеваться?");
            break;       
    }

}

// Использование методов defineProperty(...) & defineProperties(...)

Object.defineProperty(User.prototype, 'name', {

    value: this.name,
    writable : true,
    enumerable : true,
    configurable : true
});

Object.defineProperty(User.prototype, 'role', {
    value: this.role,
    writable: true,
    configurable: true,
    enumerable: true
});

Object.defineProperty(User.prototype, 'sex', {

    value: this.sex,
    writable : true,
    enumerable : true,
    configurable : true
});

Object.defineProperties(User.prototype, 
    {
        age : {
            value : this.age,
            writable : true,
            configurable : true,
            enumerable : true
        },

        height : {
            value : this.height,
            writable : true,
            configurable : true,
            enumerable : true
        },

        weight : {
            value : this.weight,
            writable : true,
            configurable : true,
            enumerable : true
        },

        eyeColor : {
            value : this.eyeColor,
            writable : true,
            configurable : true,
            enumerable : true
        }
    }
);

// 1. Admin неизменяем, поэтому к нему применен метод freeze()

let admin = new User("Max", "Admin", 21, 'm', 180, 75, "brown");

Object.freeze(admin);
console.log(admin);
admin.checkAccess('eyeColor', "writable");

// Проверка с помощью геттеров и сеттеров
admin.Age = 40000;

console.log(admin.Age);


// 2. Guest изменяем

let guest = new User("Malcolm", "Guest", 20, 'm', 185, 80, 'blue');

console.log(guest);

guest.checkAccess('role', 'writable');
guest.checkAccess('sex', 'writable');
guest.checkAccess('weight', 'writable');
guest.checkAccess('role', 'scooby-doo');
guest.checkAccess('eyeColor', 'writable');


// Проверка с помощью геттеров и сеттеров

guest.EyeColor = "orange";
guest.Sex = "o";
guest.Age = -20;
guest.Name = "hewalksaloneunderthebigcitylightshealwaysknowsjustwhenthetimeisright";
guest.Weight = 5000;
guest.Height = 1000000;

console.log(guest);


/* Закрепление лекционного материала */

class Student extends User {

}

//let johnny = new User("Johnny", "Programmer", 230, 'm', 180, 75, 'brown');
//console.log(johnny);

//johnny.Sex = 150;

//console.log(johnny.Sex);

//let student = new Student();

//console.log(student);

function Animal(name){
    this.name = name;
}

Animal.prototype.hello = function() {
    console.log(`${this.name} говорит тебе: Привет!`)
}

let animal = new Animal("Sebastian");

animal.hello();



var tommyInfo = {
    name: "Tommy"
}

var tommySurname = {
    surname: "Vercetti"
}

var tommyAge = {
    age: 35
}

var tommySex = {
    sex: 'm'
}

Object.assign(tommyInfo, tommySurname, tommyAge, tommySex);

console.log(tommyInfo);

console.log(Object.keys(tommyInfo));
console.log(Object.values(tommyInfo));
console.log(Object.entries(tommyInfo));

//Object.freeze(tommyInfo);
//Object.seal(tommyInfo);

tommyInfo.__proto__.talk = function() {
    console.log("VERCETTI! REMEMBER THE NAME!!!");
}

tommyInfo.race = "caucasian";


console.log(tommyInfo);

tommyInfo.talk();

console.log(Object.getPrototypeOf(tommyInfo));

console.log(Object.getOwnPropertyDescriptor(tommyInfo, 'sex'));

Object.defineProperty(tommyInfo, 'age', {
    value: 'Tommy',
    writable: false,
    configurable: false,
    enumerable: false
}); 

console.log(Object.getOwnPropertyDescriptor(tommyInfo, 'age'));

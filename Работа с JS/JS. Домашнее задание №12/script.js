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
        if (newName == undefined || newName.length() > 50) {
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

    set Set(newSex) {
        if (newSex != 'm' || newSex != 'f') {
            console.log("У нас тут не Америка!");
        }
        this.sex = newSex;
    }

    // Аксессоры height
    get Height() {
        return this.height;
    }

    set Height(newHeight) {
        if (newHeight < 0 || newHeight > 100) {
            console.log("Неверный возраст");
            return;
        }
        this.height = newHeight;
    }

    // Аксессоры weight
    get Weight() {
        return this.weight;
    }

    set Weight(newWeight) {
        if (newWeight < 0 || newWeight > 100) {
            console.log("Неверный возраст");
            return;
        }
        this.weight = newWeight;
    }


}
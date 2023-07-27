//Створити клас Людина.
class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}
//Створити клас Квартира.
class Apartment {
    constructor() {
        this.residents = [];
    }
    addResident(person) {
        this.residents.push(person);
    }
}
//додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
//Створити клас Будинок
class House {
    constructor (maxAmountOfApartments) {
        this.apartments = [];
        this.maxAmountOfApartments = maxAmountOfApartments;
    }
    addApartment(apartment) {
        if (this.apartment.lenght < this.maxAmountOfApartments) {
            this.apartments.push(apartment);
        } else {
console.log("Unable to add an apartment. Maximum number of apartments reached.")
        }
    }
}

//В якості демонстраціїї створити:декілька екземплярів класу Людина;
const person1 = new Person('Mary', 'female');
const person2 = new Person('Peter', 'male');
const person3 = new Person('Ana', 'female');

//В якості демонстраціїї створити:декілька екземплярів класу Квартира;
const apartment1 = new Apartment(1);
const apartment2 = new Apartment(2);
const apartment3 = new Apartment(3);

//додати екземпляри класу Людина до екземплярів класу Квартира;
apartment1.addResident(person1);
apartment2.addResident(person2);
apartment3.addResident(person3);

//екземпляр класу Будинок;
const house = new House(3);

//додадити екземпляри класу Квартира до екземплярів класу Будинок.
house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3);

import { v4 as uuidv4 } from 'uuid';

export class User {
    static errors = {
        username: "usernameError",
        age: "ageError",
        country: "countryError",
    };
    static age = {
        maxLength: 3,
        range: {
            min: 18,
            max: 119,
        }
    };

    userRegEx = /(^[A-ZÁÉÍÓÚ][a-záéíóú]{1,15}$)/;
    countryRegEx = /(^[A-ZÁÉÍÓÚ]{1,3}[a-záéíóú]{1,10}$)|(^[A-ZÁÉÍÓÚ][a-záéíóú]{1,20}\s[A-ZÁÉÍÓÚa-záéíóú]{1,20}\s([A-ZÁÉÍÓÚa-záéíóú][a-záéíóú]{1,15}\s)?[A-ZÁÉÍÓÚ][a-záéíóú]{1,10}$)/;

    constructor(username, age, country){
        this.id = uuidv4();
        this.username = username;
        this.age = age;
        this.country = country;
    }

    validate(){
        const errors = [];

        if(!this.username || !this.userRegEx.test(this.username)){
            errors.push(User.errors.username);
        }

        if(!this.age || typeof(this.age) !== "number" || this.age < User.age.range.min || this.age > User.age.range.max){
            errors.push(User.errors.age);
        }

        if(!this.username || !this.countryRegEx.test(this.country)){
            errors.push(User.errors.country);
        }

        return {
            isValid: errors.length === 0,
            errors,
        }
    }
    
    static getErrorKeys(errors){
        let keys = [];

        if(errors.includes(User.errors.username)){
            keys.push('popup.errors.userName');
        }
      
        if(errors.includes(User.errors.age)){
            keys.push('popup.errors.age');
        }
      
        if(errors.includes(User.errors.country)){
            keys.push('popup.errors.country');
        }
      
        return keys;
      };
    
}

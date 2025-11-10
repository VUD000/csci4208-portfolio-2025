<<<<<<< HEAD
class Guess{
    constructor(){
        this.hundreds = 0;
        this.tens = 0;
        this.ones = 0;
    }

    toString(){
        return "" + this.hundreds + this.tens + this.ones;
    }
    increment(key){
        this[key] = (this[key] + 1) % 10;
    }

    decrement(key){
        this[key] = (this[key] > 0) ? this[key]-1 : 9;
    }
=======
class Guess{
    constructor(){
        this.hundreds = 0;
        this.tens = 0;
        this.ones = 0;
    }

    toString(){
        return "" + this.hundreds + this.tens + this.ones;
    }
    increment(key){
        this[key] = (this[key] + 1) % 10;
    }

    decrement(key){
        this[key] = (this[key] > 0) ? this[key]-1 : 9;
    }
>>>>>>> d5be727ff6af186f9874a2a1a9d62c0a29ff78d8
}
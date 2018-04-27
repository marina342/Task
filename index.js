/**
 * Created by pidoi on 4/27/2018.
 */
class Animal{
    constructor(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }
}
class Dog extends Animal{
    constructor(name){
        super(name);
    }
    getName(){
        return super.getName();
    }
    bark(){
        return `Dog ${this.name} is barking`;
    }
}


function Animal(name) {
    this.name=name;
    this.getName=function() {
        return this.name;
    }
}
function Dog(name) {
    Animal.apply(this, arguments);
    this.bark= function() {
        return "Dog "+this.name +" is barking";
    }
}


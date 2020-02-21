class Pet{
    constructor(name){
    this._name = name;
    this._hunger = 15;
    this._thirst = 15;
    this._boredom = 15;
}   
    get name(){
        return this._name;
    }

    feed () {
        if (this._hunger < 20 && this._thirst >5){
            this._hunger++
            this._thirst--
            console.log(`${this._name} enjoyed it's food!`)
        }
        else if (this._hunger < 20 && this._thirst <=5){
            this._hunger++
            this._thirst--
            console.log(`${this._name} enjoyed it's food! But now it's thirsty`)
        }
        else if (this._hunger == 20 && this._thirst <=5){
            this._hunger++
            this._thirst--
            console.log(`${this._name} is already full and now it's thirsty!`)
        }
        else{
            this._thirst--
            console.log(`${this._name} is already full.`)     
    }
}

    drink () {
        if (this._thirst < 20 && this._boredom >5){
            this._thirst++
            this._boredom--
            console.log(`${this._name} drank a lot of water!`)
    }
        else if (this._thirst < 20 && this._boredom <5){
            this._thirst++
            this._boredom--
            console.log(`${this._name} drank lots of water! Now it's time to play`)
    }
        else if (this._thirst == 20 && this._boredom <=5){
            this._thirst++
            this._boredom--
            console.log(`${this._name} has had enough water for now, it really wants to play now!`)
    }
        else{
            this._boredom--
            console.log(`${this._name} has had enough water for now.`)    
    }
}  

    play () {
        if (this._boredom < 20 && this._hunger >5){
            this._boredom++
            this._hunger--
            console.log(`${this._name} had a lot of fun!`)
    }
        else if (this._boredom < 20 && this._hunger <5){
            this._boredom++
            this._hunger--
            console.log(`${this._name}  had a lot of fun, now it's really hungry`)
    }
        else if (this._thirst == 20 && this._boredom <=5){
            this._thirst++
            this._boredom--
            console.log(`${this._name} doesn't want to play, he's too hungry!`)
    }
        else{
            this._boredom--
            console.log(`${this._name} doesn't want to play right now.`)    
        }
    } 

    checkPet(){
    console.log (`Hunger: ${this._hunger} Thirst: ${this._thirst} Happiness: ${this._boredom}`)
}

}


const dog = new Pet ("Milo");
const cat = new Pet ("Tanooki");
const rabbit = new Pet ("Larry");

dog.checkPet()
dog.feed()
dog.feed()
dog.feed()
dog.checkPet()
dog.feed()
dog.feed()
dog.feed()
dog.feed()
dog.feed()
dog.feed()
dog.feed()
dog.feed()
dog.checkPet()
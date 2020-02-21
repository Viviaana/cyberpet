class Pet{
    constructor(name, hunger, thirst, fun){
    this._name = name;
    this._hunger = hunger;
    this._thirst = thirst;
    this._fun = fun;
}   
    get name(){
        return this._name;
    }

    feed () {
        if (this._hunger < 20 && this._thirst >5){
            this._hunger++
            this._thirst--
            window.alert(`${this._name} enjoyed it's food!`)
        }
        else if (this._hunger < 20 && this._thirst <=5){
            this._hunger++
            this._thirst--
            window.alert(`${this._name} enjoyed it's food! But now it's thirsty`)
        }
        else if (this._hunger == 20 && this._thirst <=5){
            this._hunger++
            this._thirst--
            window.alert(`${this._name} is already full and now it's thirsty!`)
        }
        else{
            this._thirst--
            window.alert(`${this._name} is already full.`)     
    }
}

    drink () {
        if (this._thirst < 20 && this._fun >5){
            this._thirst++
            this._fun--
            window.alert(`${this._name} drank a lot of water!`)
    }
        else if (this._thirst < 20 && this._fun <5){
            this._thirst++
            this._fun--
            window.alert(`${this._name} drank lots of water! Now it's time to play`)
    }
        else if (this._thirst == 20 && this._fun <=5){
            this._thirst++
            this._fun--
            window.alert(`${this._name} has had enough water for now, it really wants to play now!`)
    }
        else{
            this._fun--
            window.alert(`${this._name} has had enough water for now.`)    
    }
}  

    play () {
        if (this._fun < 20 && this._hunger >5){
            this._fun++
            this._hunger--
            window.alert(`${this._name} had a lot of fun!`)
    }
        else if (this._fun < 20 && this._hunger <5){
            this._fun++
            this._hunger--
            window.alert(`${this._name}  had a lot of fun, now it's really hungry`)
    }
        else if (this._thirst == 20 && this._fun <=5){
            this._thirst++
            this._fun--
            window.alert(`${this._name} doesn't want to play, he's too hungry!`)
    }
        else{
            this._fun--
            window.alert(`${this._name} doesn't want to play right now.`)    
        }
    } 

    checkPet(){
    window.alert(`Hunger: ${this._hunger} Thirst: ${this._thirst} Happiness: ${this._fun}`)
}

}

//assigning pet attributes
const dog = new Pet ("Milo",10,15,6);
const cat = new Pet ("Tanooki",6,10,15);
const rabbit = new Pet ("Larry",15,6,10);

//start of the main program 
let petChoice = "";

const dogSelect = document.getElementById("dog");
const catSelect = document.getElementById("cat");
const rabbitSelect = document.getElementById("rabbit");
const selectScreen = document.getElementById("selectScreen");
const mainPet = document.getElementById("mainPet");
// const image = document.getElementById("image")
const name = document.getElementById("petName")

//setting up selection buttons to pull through choise so this can be used as a shortcut in the main page

dogSelect.addEventListener("click", () =>{
    petChoice = dog
    selectScreen.style.display = "none"
    mainPet.style.display = "";
    document.getElementById('image').src = 'dog-sit.jpg';
    name.innerText = `${dog.name}`
});

catSelect.addEventListener("click", () =>{
    petChoice = cat
    selectScreen.style.display = "none"
    mainPet.style.display = "";
    document.getElementById('image').src = 'cat-sit.jpg';
    name.innerText = `${cat.name}`
});

rabbitSelect.addEventListener("click", () =>{
    petChoice = rabbit
    selectScreen.style.display = "none"
    mainPet.style.display = "";
    document.getElementById('image').src = 'rabbit-sit.jpg';
    name.innerText = `${rabbit.name}`
});

//setting up main page choices once pet is chosen

const feed = document.getElementById("feed");
const drink = document.getElementById("drink");
const fun = document.getElementById("fun");
const check = document.getElementById("check")

feed.addEventListener("click", () =>{
    (petChoice).feed();
})

drink.addEventListener("click", () =>{
    (petChoice).drink();
})

fun.addEventListener("click", () =>{
    (petChoice).play();
})

check.addEventListener("click", () =>{
    (petChoice).checkPet();
})
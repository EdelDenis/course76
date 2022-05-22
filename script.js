"use strict"

// Контекст вызова this


// Функция может вызываться 4 мя способами и в каждом контекст вызова отличается 

// 1 метод (просто вызов функции)

function showThis (a,b) {
    console.log(this);
    function sum(){
        console.log(this)
        return a + b;
    }

    console.log(sum());
}

showThis(4,5);

const obj = {
    a:20,
    b:15,
    sum : function (){
        function shout(){
            console.log(this)
        }
        shout();
    }
    
};

obj.sum();

function User (name,id){        // - это функция конструктор
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log("Hello! " + this.name);
    };
}

let ivan = new User ("Ivan",28);

function sayName (surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
   name: "John"
};

sayName.call(user, "Smith");
sayName.apply(user,["Smith"]);

function count (num) {
    return this*num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13));

// 1) Обычная функция : this = window, но если стоит use strict - то будет undefined

// 2) Контекст у методов обьекта - сам обьект 

// 3) this в конструкторах и классах - это новый экземпляр обьекта

//4) Ручная привязка this : call, apply , bind


const btn = document.querySelector("button");

btn.addEventListener("click", function(){
    this.style.backgroundColor = "red";
    console.log(this);
});                    // в таком случае контекст візова будет сам єлемент на котором стоит обработчик собітия

// У стрелочной функции нет контекста візова (будет брать у своего родителя)

const obje = {
   num : 5,
   sayNumber: function () {
       const say = () => {
           console.log(this);
       };

       say();
   }
};

obj.sayNumber();

const doublee = (a) => {
    return a * 2;
}

// const doublee = a => a*2;
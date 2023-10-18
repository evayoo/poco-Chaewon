// Kahirzat helped me write this

let array = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(array[2]);

array.shift();
array.sort();
array.push("Kiwi");
array.shift();
array.reverse();
console.log(array);

class Food {
    constructor (r1,r2,r3){
        this.r1 = r1;
        this.r2 = r2;
        this.r3 = r3;
    }
    myFav() {
        let arrayFood = [this.r1,this.r2,this.r3];
        for(let i = 0; i < arrayFood.length; i++) {
            console.log(`My #${i+1} choice is ${arrayFood[i]}`);
        }
    }
};

let Ranking = new Food("Korean food", "Japanese food", "Indian food");
console.log(Ranking.myFav());





// 
class Recipe {
    constructor (name, serves, ingredients) {
    this.name = name;
    this.serves = serves;
    this.ingredients = ingredients;
    }
};

let Malaxiangguo = new Recipe ("Malaxiangguo", 4, ["3 celery stalks", "2 carrots", "2 potatoes"]);

console.log(Malaxiangguo.name);
console.log(Malaxiangguo.serves);
console.log(Malaxiangguo.ingredients);




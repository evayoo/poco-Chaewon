let array = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(array[2]);

array.pop("Banana");
array.sort();
array.push("Kiwi");
array.pop("Apples");
array.reversesort();
console.log(array);

class GoodFood {
    constructor (r1,r2,r3){
        this.r1 = r1;
        this.r2 = r2;
        this.r3 = r3;
    }
    myFavoriteCusine() {
        let arrayOfFood = [this.r1,this.r2,this.r3];
        for(let i = 0; i < arrayOfFood.length; i++) {
            console.log(`My #${i+1} choice is ${arrayOfFood[i]}`);
        }
    }
};

let Ranking = new GoodFood("Korean food", "Japanese food", "Indian food");
console.log(Ranking.myFavoriteCusine());





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




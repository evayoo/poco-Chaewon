//Oct 17th 9:00 morning class by Susanne 

const food = {
    name: "Banana",
    calories: 250,
    vitamins: ["B12", "C", "A"], 
    contains: ["nuts", "gluten"],
    vegetarian: true,
    halal: false,
    expiry_date: "2023-10-18",
    category: "fruit",
    price: 5.90, 
    edible: function(){
        let today = new Date();
        console.log(today.toISOString);
        console.log(today.toISOString().split('T'));
        console.log(today.toISOString().split('T')[0]);
        if(today.toDateString().split('T')[0] < this.expiry_date){
return true;
        }
        return false;
    }
}

//object constuctor , new instance - giving different value 

console.table(food);
console.log(food.name);
console.log(food["expiry_date"]);

console.log(`Is my ${food.name} still edible?`);
console.log(food.edible());


function Food(calories, vitamins, name, contains, vegetarian = true, halal, expiry_date, category, price) {
    this.name = name;
    this.calories = calories;
    this.vitamins = vitamins; 
    this.contains = contains;
    this.vegetarian = vegetarian;
    this.halal = halal;
    this.expiry_date = expiry_date;
    this.category = category;
    this.price = price; 
    this.edible = function(){
        let today = new Date();
        console.log(today.toISOString);
        console.log(today.toISOString().split('T'));
        console.log(today.toISOString().split('T')[0]);
        if(today.toDateString().split('T')[0] < this.expiry_date){
return true;
        }
        return false;
    }
}

let banana = new Food2("Banana", 250, ["B12", "C", "A"], ["nuts", "gluten"], true, false, "2023-10-18", "fruit", 5.90)
//new instance of food. normal object. we can change property values. add new/delete. 
console.table(banana);
banana.mushy = true;
banana = null;

console.table(banana);
banana.expiry_date = "2023-10-16";
console.log(banana.isEdible());

//mushy = property, universal variables, 

class Food {
    constructor(calories, vitamins, name, contains, vegetarian = true, halal, expiry_date, category, price) {
        this.name = name;
        this.calories = calories;
        this.vitamins = vitamins; 
        this.contains = contains;
        this.vegetarian = vegetarian;
        this.halal = halal;
        this.expiry_date = expiry_date;
        this.category = category;
        this.price = price; 
    }

    isEdible(){
        let today = new Date();
        if(today.toDateString().split('T')[0] < this.expiry_date){
            return true;
        }
        return false;
    }
}

let apple = new Food(500, ["B12", "C"], ["nuts", "gluten"], true, false, "2023-10-18", "fruit", 5.90)

console.table(apple);


//method is the only thing not part of constructor. 



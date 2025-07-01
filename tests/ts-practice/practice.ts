//import { test, expect} from "@playwright/test";
import * as readline from 'readline';

export class FoodForToday {
    day: string ;
    food: string ;

    constructor (day : string, food : string ){
        this.day = day;
        this.food = food;
    }

    showMenu(){
        const read =readline.createInterface({
            input: process.stdin, 
            output: process.stdout,

        });
        read.question("Menu for what day?", (day)=>{
            this.food = "Subway";
            console.log(`For ${day} the food is ${this.food}`);
            read.close();
        });
        
    }
}

const meal = new FoodForToday("","");
meal.showMenu();
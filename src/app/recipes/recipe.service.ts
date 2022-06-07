import {Injectable} from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService{
// Place where we manage our recipes

    private recipes: Recipe[] = [
        new Recipe('Snitzel', 'Yum', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 
        [
            new Ingredient('Meat', 1), 
            new Ingredient(
                "French Fries", 1
                
            )
        ]),
        new Recipe('Burger', 'yum', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 
        [
            new Ingredient('Buns', 2), 
            new Ingredient('Meat', 1)
        ])
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }



}
import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService{

  selectedRecipeInService = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
               'A super tasty Schnitzel, just awesome!',
               'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
                [
                 new Ingredient('Potato',1),
                 new Ingredient('Buns',2)
                ]),
    new Recipe('Potato Fries',
               'Yummy fries! healty and easy cooking.',
               'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
               [
                 new Ingredient('Potato',1),
               ])

  ];

  getRecipes(){
      return this.recipes.slice(); //This will return a copy of this array.
  }

}

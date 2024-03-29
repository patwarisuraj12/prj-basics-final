import { Ingredient } from '../shared/ingredient.model';

import { EventEmitter } from '@angular/core';

export class ShoppingListService{

  ingredientsChanges = new EventEmitter<Ingredient[]>()

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredient(){
      return this.ingredients.slice();

  }

  addIngredients( ingredient : Ingredient ){
    this.ingredients.push( ingredient );
    this.ingredientsChanges.emit(this.ingredients.slice());

  }

}

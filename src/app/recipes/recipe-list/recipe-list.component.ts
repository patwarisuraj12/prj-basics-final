import { Component, OnInit, Output , EventEmitter} from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Noodles', 'This is simply a test-1', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Pan Cake', 'This is simply a test-2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Lasagne', 'This is simply a test-3', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Veg Sandwich', 'This is simply a test-4', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Burgar', 'This is simply a test-5', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Potato Fries', 'This is simply a test-6', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Momos', 'This is simply a test-7', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Pizza', 'This is simply a test-8', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),

  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onEmitRecipe(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}

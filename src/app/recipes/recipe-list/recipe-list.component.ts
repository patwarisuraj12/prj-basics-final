import { Component, OnInit, Output , EventEmitter} from '@angular/core';

import { RecipeService } from '../recipe.service';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(private recipeService : RecipeService) { }

  ngOnInit() {

    this.recipes = this.recipeService.getRecipes();
  }

  onEmitRecipe(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}

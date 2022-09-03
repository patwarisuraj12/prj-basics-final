import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('numberInput') numberInputRef : ElementRef;

  constructor( private slService : ShoppingListService ) { }

  ngOnInit() {
  }

  onAddIngredient(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingNumber = this.numberInputRef.nativeElement.value;
    const newIng = new Ingredient(ingName,ingNumber);
    this.slService.addIngredients(newIng);
  }

}

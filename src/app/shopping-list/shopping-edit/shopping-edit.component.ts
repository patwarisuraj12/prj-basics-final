import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('numberInput') numberInputRef : ElementRef;

  @Output() ingAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingNumber = this.numberInputRef.nativeElement.value;
    const newIng = new Ingredient(ingName,ingNumber);

    this.ingAdded.emit(newIng);

  }

}

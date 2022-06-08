import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

@Output() featureLoaded = new EventEmitter<string>();

  emitEvent(feature : string){
    this.featureLoaded.emit(feature)
  }

}

import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') mseEnter(e : Event){
      this.isOpen = !this.isOpen;
  }

  @HostListener('mouseleave') mseLeave(e : Event){
      this.isOpen = false;
  }
  constructor() { }

}

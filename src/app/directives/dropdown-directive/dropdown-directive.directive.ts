import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]',
})
export class DropdownDirectiveDirective {
  @Input() defaultClass: string = 'show';
  @Input('appDropdownDirective') customClass: string = '';
  // @HostBinding('style') backgroundColor: string = this.defaultClass;
  @HostBinding('class') classes: string = this.defaultClass;
  constructor(private elementRef: ElementRef, private render: Renderer2) {}

  @HostListener('click')
  public toggler(): void {
    this.classes = this.customClass ? this.customClass : this.defaultClass;
    this.toggleDropdown(this.classes);
  }

  @HostListener('document:keydown', ['$event'])
  public onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.removeClass(this.classes);
    }
  }
  @HostListener('document:click', ['$event.target'])
  public onClickOutside(targetElement: HTMLElement | null) {
    if (targetElement === null) {
      return;
    }

    const dropdown = this.elementRef.nativeElement.parentElement;
    const clickedInside = dropdown?.contains(targetElement);
    // console.log(targetElement);
    // console.log(clickedInside);
    if (!clickedInside) {
      this.removeClass(this.classes);
    }
  }

  private toggleDropdown(className: string) {
    const dropdownMenu = this.elementRef.nativeElement.nextElementSibling;
    const hasShowClass = dropdownMenu?.classList.contains(className);
    if (hasShowClass) {
      this.removeClass(className);
    } else {
      this.addClass(className);
    }
  }

  private addClass(className: string) {
    const dropdownMenu = this.elementRef.nativeElement.nextElementSibling;
    this.render.addClass(dropdownMenu, className);
  }
  private removeClass(className: string) {
    const dropdownMenu = this.elementRef.nativeElement.nextElementSibling;
    this.render.removeClass(dropdownMenu, className);
  }
}

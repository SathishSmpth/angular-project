import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighLight]',
})
export class BasicHightLight implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    console.log(this.elementRef.nativeElement);

    this.elementRef.nativeElement.style.background = 'red';
    this.elementRef.nativeElement.style.color = 'white';
  }
}

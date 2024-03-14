import { 
  Directive, 
  OnInit, 
  ElementRef,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class DirectivesComponent implements OnInit {
  
    constructor(
      private elementRef: ElementRef,
      private re: Renderer2
    ) { }
  
    ngOnInit(): void {
      this.re.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue')
      this.re.setStyle(this.elementRef.nativeElement, 'color', 'white');
    }
}

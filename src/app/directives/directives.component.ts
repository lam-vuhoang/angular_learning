import { 
  Directive, 
  OnInit, 
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class DirectivesComponent implements OnInit {
  
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'yellow';

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  constructor(
    private elementRef: ElementRef,
    private re: Renderer2
  ) { }

  ngOnInit(): void {
    // this.re.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue')
    // this.re.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.re.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'yellow');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.re.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColor = this.defaultColor;
  }
}

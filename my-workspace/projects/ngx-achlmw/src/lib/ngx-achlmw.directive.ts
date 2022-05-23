import {
  Directive,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
  AfterContentInit,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[libNgxAchlmw]',
})
export class NgxAchlmwDirective
  implements OnInit, AfterContentInit, OnChanges, OnDestroy
{
  @Input()
  searchTerm: string = '';

  originalHTML: any;
  spanMatOption: any;
  parentNode: any;

  constructor(
    private el: ElementRef,
    private viewContainer: ViewContainerRef,
    private render: Renderer2
  ) {}

  ngOnDestroy(): void {
    // console.log(this.el.nativeElement,this.originalText);
  }
  ngOnInit(): void {
    // console.log(this.el.nativeElement.querySelector(
    //   'span.mat-option-text'
    // ))
    // this.originalText = this.el.nativeElement.querySelector(
    //   'span.mat-option-text'
    // ).textContent;
    // this.render.
  }

  ngOnChanges(changes: SimpleChanges): void {
    const value: string = changes['searchTerm'].currentValue;
    if ((!value || value.length === 0) && this.originalHTML) {
      this.replaceAndAddSpanMatOption(this.originalHTML);
    } else {
      const regex = new RegExp(value, 'gi');
      const elementToRemove = this.el.nativeElement.querySelector(
        'span.mat-option-text'
      );
      const term: string = elementToRemove.textContent;
      if (!term) return;
      const newValue = term.replace(
        regex,
        (match) => `<span style="color:purple">${match}</span>`
      );

      this.replaceAndAddSpanMatOption(newValue);
    }
  }

  replaceAndAddSpanMatOption(newValue: string) {
    console.log(newValue, this.originalHTML, this.parentNode);
    this.render.removeChild(this.parentNode, this.spanMatOption);
    const span = this.render.createElement('span');
    this.render.addClass(span, 'mat-option-text');
    this.render.setProperty(span, 'innerHTML', newValue);

    this.render.appendChild(this.parentNode, span);
  }

  ngAfterContentInit(): void {
    console.count('ngAfterContentInit');
    this.parentNode = this.el.nativeElement;
    this.spanMatOption = this.el.nativeElement.querySelector(
      'span.mat-option-text'
    );
    this.originalHTML = this.spanMatOption.innerHTML;
  }
}

import {
  Directive,
  Renderer2,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[libNgxAchlmw]',
})
export class NgxAchlmwDirective implements OnChanges {
  readonly searchPropName = 'searchTerm';
  readonly optionTextPropName = 'optionText';
  @Input()
  searchTerm: string = '';

  @Input()
  optionText: string = '';

  originalHTML: any;
  spanMatOption: any;
  parentNode: any;

  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    const searchTermObj = changes[this.searchPropName];
    if (
      searchTermObj.currentValue === null ||
      searchTermObj.currentValue === undefined
    )
      return;

    // Start updating

    let searchTerm = searchTermObj.currentValue;
    const regex = new RegExp(searchTerm, 'gi');
    const span = this.el.nativeElement.querySelector('span.mat-option-text');
    const spanTextContent = span.textContent;
    let newNodeValue = spanTextContent.replace(
      regex,
      (match: string) => `<span style="color:purple">${match}</span>`
    );
    let value =
      regex.test(spanTextContent) && searchTermObj.currentValue !== ''
        ? newNodeValue
        : this.optionText;
    this.render.setProperty(span, 'innerHTML', value);
  }
}

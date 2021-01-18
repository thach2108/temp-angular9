import { Component, Input, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card-customize',
  templateUrl: './card-customize.component.html',
  styleUrls: ['./card-customize.component.css']
})
export class CardCustomizeComponent implements OnChanges {
  @Input()
  csTitle: TemplateRef<any> | string = 'Default title';
  isStringType: boolean = true;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const { currentValue } = changes.csTitle;
    this.isStringType = typeof currentValue === 'string';
  }

}

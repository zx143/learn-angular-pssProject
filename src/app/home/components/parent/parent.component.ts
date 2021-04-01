import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  @ViewChild('inputRef', { static: true }) inputRef: ElementRef;
  startDate = new Date(2021, 3, 31)
  futureDate = new Date(2021, 4, 1)
  constructor(private rd: Renderer2, private elr: ElementRef) { }

  ngOnInit() {
    fromEvent(this.inputRef.nativeElement, 'input')
      .subscribe((ev: any) => {
        console.log(ev.target.value);
      })
    console.log(123)
  }
}

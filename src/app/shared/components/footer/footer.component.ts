import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { HomeService } from 'src/app/home/services';
import { TabItem } from '../../domain';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  tabItems : TabItem[] = []
  @Input() selectedIndex:number = 0
  @Output() tabSelected = new EventEmitter<TabItem>()
  constructor(private service: HomeService) { }

  ngOnInit() {
    this.tabItems = this.service.getTabItems()
  }
  public toggleSelectedTabItem(i:number): void {
    this.selectedIndex = i
    this.tabSelected.emit(this.tabItems[this.selectedIndex])
  }
}

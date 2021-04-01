import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { TabItem } from './shared/domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedIndex$: Observable<number>
  constructor(private router: Router) { }
  public handleTabSelected(tab: TabItem): void {
    // console.log('click',tab);
    this.router.navigate([tab.link])
  }

  ngOnInit(): void {
    // console.log('events',this.router.events);
    this.selectedIndex$ = this.router.events
      .pipe(
        filter(ev => ev instanceof NavigationEnd),
        map((ev: NavigationEnd):string => {
          const arr = ev.url.split('/')
          // console.warn(arr)
          return arr.length > 1 ? arr[1] : 'home'
        }),
        map(path => this.getSelectedIndex(path)),
        // tap(i => console.log('路由索引', i))
      )
      console.log(this.selectedIndex$);
    }

  private getSelectedIndex(tab: string): number {
    // console.warn(tab)
    return (tab === 'recommend' ? 1 :
      tab === 'category' ? 2 :
        tab === 'chat' ? 3 :
          tab === 'my' ? 4 :
            0)
  }
}

import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from '../../../../redux/app.state';
import { selectRecentUpdates } from '../../../../redux/dashboard';

@Component({
  selector: 'app-ds-recent-updates',
  templateUrl: './ds-recent-updates.component.html',
  styleUrls: ['./ds-recent-updates.component.css']
})
export class DsRecentUpdatesComponent implements OnInit {
  isCollapseds: boolean[] = [];
  currentIndex: number = 0;
  model$: Observable<any[]>;

  constructor(private _store: Store<IAppState>) {
    this.model$ = this._store.pipe(select(selectRecentUpdates));
    this.model$.subscribe(res => {
      if (!res) return;
      res.forEach(elm => {
        this.isCollapseds.push(true);
      });
      if (this.isCollapseds.length) {
        this.isCollapseds[0] = false;
      }
    });
  }

  ngOnInit(): void {
  }

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  activeCollapse(index: number = 0): void {
    if (this.currentIndex === index) {
      this.isCollapseds[index] = !this.isCollapseds[index];
      return;
    }
    this.isCollapseds[this.currentIndex] = true;
    this.currentIndex = index;
    this.isCollapseds[index] = false;
  }
}

import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private router: Router) {
  }

  selectedItem: String = '';

  selectItem(item) {
    this.selectedItem = item.target.value;
  }

  logForm() {
      console.log(this.selectedItem);
      this.router.navigateByUrl('car/' + this.selectedItem);
  }
}

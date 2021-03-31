import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.scss']
})
export class HomeGrandComponent implements OnInit {
  // test 
  obj = {
    productName: 'xx手机',
    model: 'pro',
    type: '水墨屏'
  }
  date = new Date()
  price: number
  data: number[]
  constructor() { }

  ngOnInit() {
    this.price = 123.1314
    this.data = [1, 2, 3, 4, 5]
  }

}

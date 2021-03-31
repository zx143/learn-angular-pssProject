import { Component, Inject, Injectable, Injector, OnInit } from '@angular/core';

@Injectable()
export class Product {
  constructor(private name: string, private color: string) {
    
  }
}
@Injectable()
export class PurchaseOther {
  // private product: Product
  private amount: number
  constructor(private product: Product) {
    // this.product = new Product('iphone', 'pink')
  }
}

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
  date: Date
  price: number
  data: number[]
  constructor() { }

  ngOnInit() {
    this.date = this.minusDays(new Date(), 50)
    this.price = 123.1314
    this.data = [1, 2, 3, 4, 5]
    // this.pur = new PurchaseOther()
    const injector = Injector.create({
      providers: [
        {
          provide: Product, // provide标识符
          // useClass: Product // 见到标识符就new一个Product实例
          // 自定义创建实例操作
          useFactory: ()=> {
            return new Product('iphoneX', 'cyan')
          },
          // 描述依赖
          deps: []
        },
        {
          provide: PurchaseOther,
          useClass: PurchaseOther,
          deps: [Product]
        }
      ]
    })
    console.log(injector.get(Product));
    console.log(injector.get(PurchaseOther));
  }

  minusDays(date: Date, days: number): Date{
    const rs = new Date(date)
    // 设置减去传入天数后的天数
    rs.setDate(rs.getDate() - days)
    console.log(rs);
    return rs
  }

}

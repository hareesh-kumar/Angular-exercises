import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css', '../../bootstrap.min.css']
})
export class ListComponent implements OnInit {
  products: any;
  constructor(private _product: ProductsService) { }

  ngOnInit() {
    this._product.getAll().subscribe(data => {
      if (data['errors']) {
        console.log();
      } else {
        this.products = data;
      }
    });
  }

  deleteproduct(productid: string) {
    this._product.deletebyId(productid).subscribe(data => {
      if (data['errors']) {
        console.log();
      } else {
        this.ngOnInit();
      }
    });
  }
}

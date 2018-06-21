import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css', '../../bootstrap.min.css']
})
export class NewComponent implements OnInit {
  product: any;
  errors: any;
  constructor(private _product: ProductsService, private _router: Router) { }

  ngOnInit() {
    this.product = {
      title : '',
      price : 0,
      imageurl : ''
    };
    this.errors = {};
  }

  addNewProduct() {
    this._product.addNew(this.product).subscribe((data) => {
      if (data['errors']) {
        console.log('error', data);
        this.errors = data['errors'];
      } else {
        console.log('success', data);
        this._router.navigate(['/products/products']);
      }
    });
  }

}

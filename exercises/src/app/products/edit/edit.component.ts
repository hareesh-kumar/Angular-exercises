import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css' , '../../bootstrap.min.css']
})
export class EditComponent implements OnInit {

  product: any;
  errors: any;
  constructor(private _product: ProductsService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.product = {
      title: '',
      price: 0,
      imageurl: ''
    };
    this.errors = {};
    this._product.getbyId(this._route.snapshot.params.id).subscribe(data => {
      if (data['errors']) {
        console.log('error', data);
      } else {
        this.product = data;
      }
    });

  }

  updateProduct() {
    this._product.updatebyId(this.product._id,
     {title : this.product.title, price: this.product.price, imageurl: this.product.imageurl}).subscribe((data) => {
      if (data['errors']) {
        console.log(data);
        this.errors = data['errors'];
      } else {
        console.log('success', data);
        this._router.navigate(['/products/products']);
      }
    });
  }
  deleteproduct(productid: string) {
    this._product.deletebyId(productid).subscribe(data => {
      if (data['errors']) {
        console.log();
      } else {
        this._router.navigate(['/products/products']);
      }
    });
  }
}

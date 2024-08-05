import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetProductsService } from '../services/get-products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-page-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-page-product.component.html',
  styleUrl: './single-page-product.component.css',
})
export class SinglePageProductComponent implements OnInit {
  productId!: number;
  productDetails: any;
  singleProduct: any;
  constructor(
    private activatedRouter: ActivatedRoute,
    private productsService: GetProductsService
  ) {}

  ngOnInit() {
    this.productId = +this.activatedRouter.snapshot.params['id'];
    this.productsService.getProducts().subscribe((response: any) => {
      this.singleProduct = response.products;
      console.log(this.singleProduct);
      this.productDetails = this.singleProduct.find(
        (item: any) => item.id == this.productId
      );
    });
  }
}

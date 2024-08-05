import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { GetProductsService } from '../services/get-products.service';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  products!: any;
  constructor(
    private router: Router,
    private productsService: GetProductsService
  ) {
    productsService.getProducts().subscribe((respone: any) => {
      this.products = respone;
    });
  }

  viewSinglePage(id: number) {
    this.router.navigate(['single-page', id]);
  }
}

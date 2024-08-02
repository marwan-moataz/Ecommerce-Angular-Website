import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  constructor(private router: Router) {}
  products: any = [
    {
      id: 1,
      title: 'Essence Mascara Lash Princess',
      description:
        'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
      category: 'beauty',
      price: 9.99,
      discountPercentage: 7.17,
      rating: 4,
      stock: 5,
      thumbnail:
        'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
    },
    {
      id: 2,
      title: 'Eyeshadow Palette with Mirror',
      description:
        "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      category: 'beauty',
      price: 19.99,
      discountPercentage: 5.5,
      rating: 3,
      stock: 0,
      images: [
        'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png',
      ],
      thumbnail:
        'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png',
    },
    {
      id: 3,
      title: 'Powder Canister',
      description:
        'The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.',
      category: 'beauty',
      price: 14.99,
      discountPercentage: 18.14,
      rating: 4,
      stock: 59,
      images: [
        'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png',
      ],
      thumbnail:
        'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png',
    },
    {
      id: 4,
      title: 'Red Lipstick',
      description:
        'The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.',
      category: 'beauty',
      price: 12.99,
      discountPercentage: 19.03,
      rating: 2,
      stock: 0,
      images: [
        'https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png',
      ],
      thumbnail:
        'https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png',
    },
    {
      id: 5,
      title: 'Red Nail Polish',
      description:
        'The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.',
      category: 'beauty',
      price: 8.99,
      discountPercentage: 2.46,
      rating: 1,
      stock: 71,
      images: [
        'https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png',
      ],
      thumbnail:
        'https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png',
    },
  ];
  viewSinglePage(id: number) {
    this.router.navigate(['single-page', id]);
  }
}

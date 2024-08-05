import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  counterValue!: number;
  constructor(private changeCounter: ServicesService) {}
  ngOnInit() {
    this.changeCounter
      .getCounter()
      .subscribe((value) => (this.counterValue = value));
  }

  minusItem() {
    this.changeCounter.updateCounter(this.counterValue - 1);
  }

  addItem() {
    this.changeCounter.updateCounter(this.counterValue + 1);
  }
}

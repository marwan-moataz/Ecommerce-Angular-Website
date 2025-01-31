import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
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

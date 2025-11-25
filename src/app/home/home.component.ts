import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // ✅ avec un "s"
})
export class HomeComponent {
  title: string = 'Welcome to the Home Page';
color   !:string ;
nameFilter!: string ;
  products = [
    { name: 'iphone 15', price: 1500, quantity: 10, nbrLike: 0 },
    { name: 'iphone 16', price: 2500, quantity: 5, nbrLike: 0 },
    { name: 'iphone 17', price: 4500, quantity: 2, nbrLike: 0 }
  ];

  
  likeProduct(product: any): void {
    product.nbrLike++;
  }
 
  buyProduct(product: any): void {
    if (product.quantity > 0) {
      product.quantity--;  
    }
  }

  save(): void {
    alert('hello from save');
  }


  
}

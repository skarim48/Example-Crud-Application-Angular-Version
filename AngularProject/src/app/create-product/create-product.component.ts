import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyService } from '../MyService';
import { IProduct } from '../../../Model/IProduct';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  myForm: FormGroup;

  constructor(private myService: MyService) {
    this.myForm = new FormGroup({
      ProductName: new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    const formData = new FormData();
    let dateTimeNow = new Date();
    const newProduct: IProduct = {
      id: 0,
      name: this.myForm.get('ProductName')?.value,
      createdUpdatedOn:dateTimeNow
    };

    this.myService.createProduct(newProduct);
  }
}


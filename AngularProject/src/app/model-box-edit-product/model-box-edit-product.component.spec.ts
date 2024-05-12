import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelBoxEditProductComponent } from './model-box-edit-product.component';

describe('ModelBoxEditProductComponent', () => {
  let component: ModelBoxEditProductComponent;
  let fixture: ComponentFixture<ModelBoxEditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelBoxEditProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelBoxEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

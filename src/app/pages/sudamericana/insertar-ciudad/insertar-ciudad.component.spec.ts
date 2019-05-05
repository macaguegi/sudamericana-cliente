import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarCiudadComponent } from './insertar-ciudad.component';

describe('InsertarCiudadComponent', () => {
  let component: InsertarCiudadComponent;
  let fixture: ComponentFixture<InsertarCiudadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarCiudadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

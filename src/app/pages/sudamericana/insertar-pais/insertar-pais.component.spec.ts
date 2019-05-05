import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarPaisComponent } from './insertar-pais.component';

describe('InsertarPaisComponent', () => {
  let component: InsertarPaisComponent;
  let fixture: ComponentFixture<InsertarPaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarPaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardaDeDatosComponent } from './carda-de-datos.component';

describe('CardaDeDatosComponent', () => {
  let component: CardaDeDatosComponent;
  let fixture: ComponentFixture<CardaDeDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardaDeDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardaDeDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

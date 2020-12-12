import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalcularCaloriasPage } from './calcular-calorias.page';

describe('CalcularCaloriasPage', () => {
  let component: CalcularCaloriasPage;
  let fixture: ComponentFixture<CalcularCaloriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcularCaloriasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalcularCaloriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

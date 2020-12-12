import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalcularNutrientesPage } from './calcular-nutrientes.page';

describe('CalcularNutrientesPage', () => {
  let component: CalcularNutrientesPage;
  let fixture: ComponentFixture<CalcularNutrientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcularNutrientesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalcularNutrientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalcularTaxaMetabolicaPage } from './calcular-taxa-metabolica.page';

describe('CalcularTaxaMetabolicaPage', () => {
  let component: CalcularTaxaMetabolicaPage;
  let fixture: ComponentFixture<CalcularTaxaMetabolicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcularTaxaMetabolicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalcularTaxaMetabolicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

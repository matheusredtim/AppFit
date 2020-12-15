import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalcularRmfPage } from './calcular-rmf.page';

describe('CalcularRmfPage', () => {
  let component: CalcularRmfPage;
  let fixture: ComponentFixture<CalcularRmfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcularRmfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalcularRmfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

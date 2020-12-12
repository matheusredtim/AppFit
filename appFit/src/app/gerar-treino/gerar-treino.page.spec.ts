import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GerarTreinoPage } from './gerar-treino.page';

describe('GerarTreinoPage', () => {
  let component: GerarTreinoPage;
  let fixture: ComponentFixture<GerarTreinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerarTreinoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GerarTreinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

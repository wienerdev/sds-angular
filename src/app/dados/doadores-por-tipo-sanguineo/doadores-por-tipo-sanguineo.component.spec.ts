import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoadoresPorTipoSanguineoComponent } from './doadores-por-tipo-sanguineo.component';

describe('DoadoresPorTipoSanguineoComponent', () => {
  let component: DoadoresPorTipoSanguineoComponent;
  let fixture: ComponentFixture<DoadoresPorTipoSanguineoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoadoresPorTipoSanguineoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoadoresPorTipoSanguineoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

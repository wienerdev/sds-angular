import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PercObesidadePorSexoComponent } from './perc-obesidade-por-sexo.component';

describe('PercObesidadePorSexoComponent', () => {
  let component: PercObesidadePorSexoComponent;
  let fixture: ComponentFixture<PercObesidadePorSexoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercObesidadePorSexoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercObesidadePorSexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

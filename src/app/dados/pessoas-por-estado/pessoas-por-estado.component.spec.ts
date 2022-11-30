import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PessoasPorEstadoComponent } from './pessoas-por-estado.component';

describe('PessoasPorEstadoComponent', () => {
  let component: PessoasPorEstadoComponent;
  let fixture: ComponentFixture<PessoasPorEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoasPorEstadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoasPorEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

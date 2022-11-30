import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaImcPorIdadeComponent } from './media-imc-por-idade.component';

describe('MediaImcPorIdadeComponent', () => {
  let component: MediaImcPorIdadeComponent;
  let fixture: ComponentFixture<MediaImcPorIdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaImcPorIdadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaImcPorIdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

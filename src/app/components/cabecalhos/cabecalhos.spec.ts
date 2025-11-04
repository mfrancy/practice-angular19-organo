import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cabecalhos } from './cabecalhos';

describe('Cabecalhos', () => {
  let component: Cabecalhos;
  let fixture: ComponentFixture<Cabecalhos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cabecalhos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cabecalhos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

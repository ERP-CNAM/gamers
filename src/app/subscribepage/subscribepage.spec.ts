import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subscribepage } from './subscribepage';

describe('Subscribepage', () => {
  let component: Subscribepage;
  let fixture: ComponentFixture<Subscribepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subscribepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subscribepage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

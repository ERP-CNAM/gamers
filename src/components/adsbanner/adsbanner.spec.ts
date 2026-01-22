import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adsbanner } from './adsbanner';

describe('Adsbanner', () => {
  let component: Adsbanner;
  let fixture: ComponentFixture<Adsbanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adsbanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adsbanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

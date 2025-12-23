import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactuspage } from './contactuspage';

describe('Contactuspage', () => {
  let component: Contactuspage;
  let fixture: ComponentFixture<Contactuspage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contactuspage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contactuspage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

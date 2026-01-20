import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cataloguepage } from './cataloguepage';

describe('Cataloguepage', () => {
  let component: Cataloguepage;
  let fixture: ComponentFixture<Cataloguepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cataloguepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cataloguepage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

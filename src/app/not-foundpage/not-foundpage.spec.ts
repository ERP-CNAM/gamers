import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundpage } from './not-foundpage';

describe('NotFoundpage', () => {
  let component: NotFoundpage;
  let fixture: ComponentFixture<NotFoundpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

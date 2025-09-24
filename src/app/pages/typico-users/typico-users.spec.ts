import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypicoUsers } from './typico-users';

describe('TypicoUsers', () => {
  let component: TypicoUsers;
  let fixture: ComponentFixture<TypicoUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypicoUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypicoUsers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUsers } from './github-users';

describe('GithubUsers', () => {
  let component: GithubUsers;
  let fixture: ComponentFixture<GithubUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubUsers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

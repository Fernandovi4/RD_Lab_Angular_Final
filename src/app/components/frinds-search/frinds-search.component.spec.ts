import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsSearchComponent } from './frinds-search.component';
import {HttpClientModule} from "@angular/common/http";

describe('FrindsSearchComponent', () => {
  let component: FriendsSearchComponent;
  let fixture: ComponentFixture<FriendsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendsSearchComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

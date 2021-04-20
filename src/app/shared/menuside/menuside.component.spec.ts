import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusideComponent } from './menuside.component';

describe('MenusideComponent', () => {
  let component: MenusideComponent;
  let fixture: ComponentFixture<MenusideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

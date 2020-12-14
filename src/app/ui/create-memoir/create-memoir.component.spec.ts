import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMemoirComponent } from './create-memoir.component';

describe('CreateMemoirComponent', () => {
  let component: CreateMemoirComponent;
  let fixture: ComponentFixture<CreateMemoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMemoirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMemoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

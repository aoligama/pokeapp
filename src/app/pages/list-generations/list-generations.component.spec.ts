import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGenerationsComponent } from './list-generations.component';

describe('ListGenerationsComponent', () => {
  let component: ListGenerationsComponent;
  let fixture: ComponentFixture<ListGenerationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGenerationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGenerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

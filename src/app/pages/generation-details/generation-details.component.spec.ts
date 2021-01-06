import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationDetailsComponent } from './generation-details.component';

describe('GenerationDetailsComponent', () => {
  let component: GenerationDetailsComponent;
  let fixture: ComponentFixture<GenerationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

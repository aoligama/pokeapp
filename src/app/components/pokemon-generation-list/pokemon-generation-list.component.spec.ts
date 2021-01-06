import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonGenerationListComponent } from './pokemon-generation-list.component';

describe('PokemonGenerationListComponent', () => {
  let component: PokemonGenerationListComponent;
  let fixture: ComponentFixture<PokemonGenerationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonGenerationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonGenerationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

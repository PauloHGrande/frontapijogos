import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesGameComponent } from './detalhes-game.component';

describe('DetalhesGameComponent', () => {
  let component: DetalhesGameComponent;
  let fixture: ComponentFixture<DetalhesGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

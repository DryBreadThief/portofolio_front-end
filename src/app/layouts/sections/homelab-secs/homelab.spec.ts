import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homelab } from './homelab';

describe('Homelab', () => {
  let component: Homelab;
  let fixture: ComponentFixture<Homelab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homelab],
    }).compileComponents();

    fixture = TestBed.createComponent(Homelab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

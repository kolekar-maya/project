import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasegeComponent } from './masege.component';

describe('MasegeComponent', () => {
  let component: MasegeComponent;
  let fixture: ComponentFixture<MasegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

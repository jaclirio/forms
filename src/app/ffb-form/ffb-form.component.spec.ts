import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FfbFormComponent } from './ffb-form.component';

describe('FfbFormComponent', () => {
  let component: FfbFormComponent;
  let fixture: ComponentFixture<FfbFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FfbFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FfbFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationPageComponent } from './innovation-page.component';

describe('InnovationPageComponent', () => {
  let component: InnovationPageComponent;
  let fixture: ComponentFixture<InnovationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnovationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

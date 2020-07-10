import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifebuoysComponent } from './lifebuoys.component';

describe('LifebuoysComponent', () => {
  let component: LifebuoysComponent;
  let fixture: ComponentFixture<LifebuoysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifebuoysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifebuoysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

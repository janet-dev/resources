import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleResourceComponent } from './single-resource.component';

describe('SingleResourceComponent', () => {
  let component: SingleResourceComponent;
  let fixture: ComponentFixture<SingleResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SingleResourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

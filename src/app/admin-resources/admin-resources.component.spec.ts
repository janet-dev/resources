import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResourcesComponent } from './admin-resources.component';

describe('AdminResourcesComponent', () => {
  let component: AdminResourcesComponent;
  let fixture: ComponentFixture<AdminResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AdminResourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAchlmwComponent } from './ngx-achlmw.component';

describe('NgxAchlmwComponent', () => {
  let component: NgxAchlmwComponent;
  let fixture: ComponentFixture<NgxAchlmwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAchlmwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAchlmwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

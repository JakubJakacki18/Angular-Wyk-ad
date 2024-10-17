import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTasksComponent } from './print-tasks.component';

describe('PrintTasksComponent', () => {
  let component: PrintTasksComponent;
  let fixture: ComponentFixture<PrintTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

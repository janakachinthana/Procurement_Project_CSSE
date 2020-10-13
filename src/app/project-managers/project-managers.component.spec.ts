import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagersComponent } from './project-managers.component';

describe('ProjectManagersComponent', () => {
  let component: ProjectManagersComponent;
  let fixture: ComponentFixture<ProjectManagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectManagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

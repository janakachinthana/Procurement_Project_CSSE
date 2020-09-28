import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JjjComponent } from './jjj.component';

describe('JjjComponent', () => {
  let component: JjjComponent;
  let fixture: ComponentFixture<JjjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JjjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JjjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CataloguesInsertionFormComponent } from './catalogues-insertion-form.component';

describe('CataloguesInsertionFormComponent', () => {
  let component: CataloguesInsertionFormComponent;
  let fixture: ComponentFixture<CataloguesInsertionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CataloguesInsertionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CataloguesInsertionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

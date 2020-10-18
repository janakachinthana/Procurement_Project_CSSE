import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

import { CataloguesInsertionFormComponent } from './catalogues-insertion-form.component';

describe('CataloguesInsertionFormComponent', () => {
  let component: CataloguesInsertionFormComponent;
  let fixture: ComponentFixture<CataloguesInsertionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CataloguesInsertionFormComponent ],
      imports: [
        AngularFirestore
      ]
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
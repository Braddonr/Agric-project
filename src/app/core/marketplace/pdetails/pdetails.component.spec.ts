import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PdetailsComponent } from './pdetails.component';

describe('PdetailsComponent', () => {
  let component: PdetailsComponent;
  let fixture: ComponentFixture<PdetailsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

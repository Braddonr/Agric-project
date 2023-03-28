import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmfailComponent } from './confirmfail.component';

describe('ConfirmfailComponent', () => {
  let component: ConfirmfailComponent;
  let fixture: ComponentFixture<ConfirmfailComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmfailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmfailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

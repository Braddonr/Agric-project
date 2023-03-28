import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmedComponent } from './confirmed.component';

describe('ConfirmedComponent', () => {
  let component: ConfirmedComponent;
  let fixture: ComponentFixture<ConfirmedComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

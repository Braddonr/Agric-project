import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfComponent } from './prof.component';

describe('ProfComponent', () => {
  let component: ProfComponent;
  let fixture: ComponentFixture<ProfComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

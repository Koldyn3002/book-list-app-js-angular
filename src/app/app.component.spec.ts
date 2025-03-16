import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // Импортируем standalone компонент
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render the book form and book list', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-book-form')).toBeTruthy(); 
    expect(compiled.querySelector('app-book-list')).toBeTruthy(); 
  });
});
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalScriptComponent } from './external-script.component';

describe('ExternalScriptComponent', () => {
  let component: ExternalScriptComponent;
  let fixture: ComponentFixture<ExternalScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalScriptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExternalScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

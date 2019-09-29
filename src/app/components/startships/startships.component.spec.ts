import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartshipsComponent } from './startships.component';

describe('StartshipsComponent', () => {
  let component: StartshipsComponent;
  let fixture: ComponentFixture<StartshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

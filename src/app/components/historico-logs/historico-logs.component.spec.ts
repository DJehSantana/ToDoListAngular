import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoLogsComponent } from './historico-logs.component';

describe('HistoricoLogsComponent', () => {
  let component: HistoricoLogsComponent;
  let fixture: ComponentFixture<HistoricoLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

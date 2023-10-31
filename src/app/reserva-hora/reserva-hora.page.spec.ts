import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservaHoraPage } from './reserva-hora.page';

describe('ReservaHoraPage', () => {
  let component: ReservaHoraPage;
  let fixture: ComponentFixture<ReservaHoraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReservaHoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

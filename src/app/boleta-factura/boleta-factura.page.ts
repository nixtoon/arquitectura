import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boleta-factura',
  templateUrl: './boleta-factura.page.html',
  styleUrls: ['./boleta-factura.page.scss'],
})
export class BoletaFacturaPage implements OnInit {

  public actionSheetButtons = [
    {
      text: 'Cancelar',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Cuardar y cerrar',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Registrar',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

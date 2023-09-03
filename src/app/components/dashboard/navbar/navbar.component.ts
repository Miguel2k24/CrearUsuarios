import { Component } from '@angular/core';
import { Menu } from 'src/app/interface/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menu: Menu[] = [];

  constructor( private _menuServices: MenuService ){}

  ngOnInit(): void {
    this.cargarMenu();
  }

  cargarMenu(){
    this._menuServices.getMenu().subscribe(data => {
      this.menu = data;
    });
  }

}

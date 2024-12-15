import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Menu } from '../core/models/Menu';
import { Title } from '@angular/platform-browser';
import { MenuSerivceService } from '../services/menu-serivce.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent {


  constructor(private ms: MenuSerivceService, private rt:Router) { }

  ngOnInit(): void {
    //this.ListMenu = this.ms.ListeMenu
    this.ms.getAllMenus().subscribe(
      data => this.ListMenu = data
    )
  }

  ListMenu: any= []

  private generateRandomId(): number {
    return Math.floor(Math.random() * 100000);
  }

  MenuForm = new FormGroup ({
    id: new FormControl(this.generateRandomId()),
    title: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.minLength(10), Validators.required]),
    approved: new FormControl(false),
  reservations: new FormControl([]) 
  })

  addMenu(): void {
    
    const menu: Menu = {
      id: this.MenuForm.value.id as number, // Cast explicite vers 'number'
      title: this.MenuForm.value.title!,
      image: this.MenuForm.value.image!,
      description: this.MenuForm.value.description!,
      approved: this.MenuForm.value.approved!,
      reservations: this.MenuForm.value.reservations!
    };
    
    this.ms.addMenu(menu).subscribe({
      next: () => {
        this.rt.navigate(['/Home']);
      },
      error: (err) => console.log(err)
    })
    alert("Menu added successfully")
    this.MenuForm.reset()
  }

  supp(id: number) {
    this.ms.deleteMenu(id).subscribe(
      () => this.ngOnInit()
    )
  }

}

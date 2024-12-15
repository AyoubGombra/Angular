import { Injectable } from '@angular/core';
import { Menu } from '../core/models/Menu';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuSerivceService {

ListeMenu: Menu[] = [

  {id: 1, title: 'Pizza', image: 'assets/images/pizza.jpg', description: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients baked at a high temperature, traditionally in a wood-fired oven.', approved: false, reservations: [10, 20, 30]},
  {id: 2, title: 'Burger', image: 'assets/images/burger.jpg', description: 'A hamburger is a food consisting of fillings —usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.', approved: false, reservations: [10, 20, 30]},
  {id: 3, title: 'Pasta', image: 'assets/images/pasta.jpg', description: 'Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking.', approved: false, reservations: [10, 20, 30]},
  {id: 4, title: 'Salad', image: 'assets/images/salad.jpg', description: 'A salad is a dish consisting of a mixture of small pieces of food, typically with at least one raw ingredient. They are typically served at room temperature or chilled, though some can be served warm.', approved: false, reservations: [10, 20, 30]},
];

  constructor(private http: HttpClient) { }
  apiEndPoint = 'http://localhost:3000/ListeMenu'

  getAllMenus() : Observable <Menu[]> {
    return this.http.get<Menu[]>(this.apiEndPoint)
  }

  getMenuById(id: number): Observable<Menu> {
    return this.http.get<Menu>(`${this.apiEndPoint}/${id}`);
  }
  addMenu(menu: Menu): Observable<any> {
    return this.http.post(this.apiEndPoint, menu);
  }

  deleteMenu(id: number): Observable<any> {
    return this.http.delete(`${this.apiEndPoint}/${id}`);
  }
}

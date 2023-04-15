import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  firstName: string = 'Vishal';
  lastName: string = 'Kumar';
  city: string = 'Jalandhar City';

  whoAreYou() {
    return `My name is ${this.firstName} ${this.lastName} from ${this.city}`;
  }
}

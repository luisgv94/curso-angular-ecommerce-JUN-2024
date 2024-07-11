import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.css',
})
export class UserComponentComponent {
  private _firstName: string;
  private _lastName: string;

  constructor() {
    this._firstName = 'John';
    this._lastName = 'Doe';
  }

  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  set fullName(value: string) {
    const [firstName, lastName] = value.split(' ');
    this._firstName = this.capitalize(firstName || '');
    this._lastName = this.capitalize(lastName || '');
  }

  private capitalize(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }
}

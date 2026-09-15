import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  nom: string = '';
  email: string = '';
  message: string = '';
  messageEnvoye: boolean = false;

  envoyerMessage() {
    console.log('Formulaire soumis :', {
      nom: this.nom,
      email: this.email,
      message: this.message
    });
    this.messageEnvoye = true;
  }
}
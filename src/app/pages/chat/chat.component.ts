import { Component } from '@angular/core';
import { ArrowLeftComponent } from '../icons/arrow-left/arrow-left.component';
import { MuseuComponent } from '../icons/museu/museu.component';
import { ChatSugestionsComponent } from "../../components/chat-sugestions/chat-sugestions.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-chat',
    standalone: true,
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.scss',
    imports: [ArrowLeftComponent, MuseuComponent, ChatSugestionsComponent]
})
export class ChatComponent {

  constructor(private router: Router ){}

  openmenu(){
    this.router.navigate([""]);

  }

  initialQuestions: string[] = [
    'Qual o valor para entrar no museu?',
    'Quando o museu está aberto?',
  ];
  initialCuriosity: string[] = [
    'Quem era o prefeito na época da criação?',
    'Quantos cômodos existem no museu?',
    'Quantas peças estão exibidas no museu?',
  ];
  initialHistory: string[] = [
    'Quando o museu foi criado?',
    'Qual o estilo arquitetônico do prédio?',
    'Quem foi o arquiteto do prédio?',
  ];
}

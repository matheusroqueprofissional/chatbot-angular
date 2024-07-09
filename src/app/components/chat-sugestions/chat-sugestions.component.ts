import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-sugestions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-sugestions.component.html',
  styleUrl: './chat-sugestions.component.scss',
})
export class ChatSugestionsComponent {
  sugestions = [
    {
      title: 'Dúvidas',
      icon: 'teste',
      questions: [
        'Qual o valor para entrar no museu?',
        'Quando o museu está aberto?',
      ],
    },

    {
      title: 'Curiosidades',
      icon: 'teste',
      questions: [
        'Quem era o prefeito na época da criação?',
        'Quantos cômodos existem no museu?',
        'Quantas peças estão exibidas no museu?',
      ],
    },
    {
      title: 'História',
      icon: 'teste',
      questions: [
        'Quando o museu foi criado?',
        'Qual o estilo arquitetônico do prédio?',
        'Quem foi o arquiteto do prédio?',
      ],
    },
  ];
}

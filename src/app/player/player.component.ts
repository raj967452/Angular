import { Component, Input } from '@angular/core';
import { Player } from '../players';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  @Input({required: true}) player!: Player;
  @Input() index = -1;
}

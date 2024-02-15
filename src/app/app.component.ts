import { Component } from '@angular/core';
import { Player, players } from './players';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // If Statement Example
  // ---------------------------------------------------------
  protected player: Player = {
    name: 'LeBron James',
    games: 1421,
    points: 38652,
    fieldGoalPercentage: 0.505,
    threePointPercentage: 0.345,
    imageName: 'lebron-james',
  };

  // Switch Statement Example
  // ---------------------------------------------------------
  protected options = new FormControl<'LeBron' | 'Kareem' | 'Default'>(
    'Default',
    { nonNullable: true }
  );
  protected optionChoices = ['LeBron', 'Kareem', 'Default'];
  protected player1: Player = {
    name: 'LeBron James',
    games: 1421,
    points: 38652,
    fieldGoalPercentage: 0.505,
    threePointPercentage: 0.345,
    imageName: 'lebron-james',
  };
  protected player2: Player = {
    name: 'Kareem Abdul-Jabbar',
    games: 1560,
    points: 38387,
    fieldGoalPercentage: 0.559,
    threePointPercentage: 0.056,
    imageName: 'kareem-abdul-jabbar',
  };
  protected player3: Player = {
    name: 'Karl Malone',
    games: 1476,
    points: 36928,
    fieldGoalPercentage: 0.516,
    threePointPercentage: 0.274,
    imageName: 'karl-malone',
  };

  // For Loop Example
  // ---------------------------------------------------------
  protected players: Player[] = players;
}

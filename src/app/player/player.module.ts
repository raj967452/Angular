import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlayerComponent } from './player.component';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  imports: [CommonModule, NgOptimizedImage],
  declarations: [PlayerComponent],
  exports: [PlayerComponent]
})
export class PlayerModule {}

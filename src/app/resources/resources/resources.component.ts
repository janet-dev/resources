import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleResourceComponent } from '../single-resource/single-resource.component';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [
    CommonModule, 
    SingleResourceComponent, 
    MaterialDesignModule],
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent {

}

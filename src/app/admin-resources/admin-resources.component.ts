import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '../material-design/material-design.module';

@Component({
  selector: 'app-admin-resources',
  standalone: true,
  imports: [CommonModule, MaterialDesignModule],
  templateUrl: './admin-resources.component.html',
  styleUrls: ['./admin-resources.component.scss']
})
export class AdminResourcesComponent {

}

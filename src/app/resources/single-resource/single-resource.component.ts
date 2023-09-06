import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-resource',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MaterialDesignModule,
  ],
  templateUrl: './single-resource.component.html',
  styleUrls: ['./single-resource.component.scss']
})
export class SingleResourceComponent {

}

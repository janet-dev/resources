import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
import { RouterLink } from '@angular/router';
import { ResourcesService } from 'src/app/services/resources.service';

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
  @Input() fromResources: any;

  constructor(public resourcesService: ResourcesService) {}

  //public ngOnInit(): void {}
  ngOnInit(): void {
  }

}

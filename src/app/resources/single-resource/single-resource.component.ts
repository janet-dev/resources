import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
import { Router, RouterLink } from '@angular/router';
import { ResourcesService } from 'src/app/services/resources.service';
import { ResourceModel } from '../models/resource.model';

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
  @Input() fromResources: ResourceModel = {} as ResourceModel;

  @Output() fromResourcesData: ResourceModel = {} as ResourceModel;

  constructor(public resourcesService: ResourcesService, private router: Router) {}

  //public ngOnInit(): void {}
  ngOnInit(): void {
  }

  // get key-value pair data from clicked resource for resources-detail
  details() {
    const fromResourcesData = {
      id: this.fromResources.id, 
      category: this.fromResources.category, 
      name: this.fromResources.name, 
      description: this.fromResources.description,
      website: this.fromResources.website,
      price: this.fromResources.price,
      imageUrl: this.fromResources.imageUrl,
      tag: this.fromResources.tag,
      createdBy: this.fromResources.createdBy,
      date: this.fromResources.date,
    }
    console.log(fromResourcesData);

    // Set the data in the service
    this.resourcesService.setResourceData(fromResourcesData);
  }


}

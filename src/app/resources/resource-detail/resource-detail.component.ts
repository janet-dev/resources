import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
import { ResourcesService } from 'src/app/services/resources.service';
import { SingleResourceComponent } from '../single-resource/single-resource.component';
import { ResourceModel } from '../models/resource.model';


@Component({
  selector: 'app-resource-detail',
  standalone: true,
  imports: [CommonModule, MaterialDesignModule, SingleResourceComponent],
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.scss']
})
export class ResourceDetailComponent implements OnInit{

  resourceData:  ResourceModel = {} as ResourceModel;

  constructor(public resourcesService: ResourcesService) {}

  ngOnInit(): void {
    // Retrieve the data from the service
    this.resourceData = this.resourcesService.getResourceData();
  }

}

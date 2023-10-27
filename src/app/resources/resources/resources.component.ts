import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleResourceComponent } from '../single-resource/single-resource.component';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
import { ResourceModel } from '../models/resource.model';
import { ResourcesService } from 'src/app/services/resources.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [
    CommonModule, 
    SingleResourceComponent, 
    MaterialDesignModule,
  ],
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit{
  
/*
This depends on the ResourcesService for fetching resource data. 
The component's ngOnInit method is used to trigger the HTTP request to fetch the data from the service, 
and it only subscribes to the observable for one emission of data.
*/
  constructor(
    public resourcesService: ResourcesService,
    ) {}

  ngOnInit(): void {
    this.resourcesService.getResources().pipe(
      take(1)
    ).subscribe();
  }
  

}

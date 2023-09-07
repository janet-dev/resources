import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { MaterialDesignModule } from '../material-design/material-design.module';

@Component({
  selector: 'app-admin-resources',
  standalone: true,
  imports: [CommonModule, MaterialDesignModule],
  templateUrl: './admin-resources.component.html',
  styleUrls: ['./admin-resources.component.scss']
})
export class AdminResourcesComponent {
  public resourceInfo: any;
  public constructor(private http: HttpClient) {}

  public ngOnInit(): void {
    const url: string = '/assets/data.json';
    this.http.get(url).subscribe((response) => {
      this.resourceInfo = response;
    });
  }
}

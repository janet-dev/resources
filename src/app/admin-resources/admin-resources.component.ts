import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { MaterialDesignModule } from '../material-design/material-design.module';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-resources',
  standalone: true,
  imports: [CommonModule, MaterialDesignModule],
  templateUrl: './admin-resources.component.html',
  styleUrls: ['./admin-resources.component.scss']
})
export class AdminResourcesComponent {
  public resourceInfo: any;
  public constructor(
    private http: HttpClient,
    public dialog: MatDialog
    ) {}

  displayedColumns: string[] = [
    'id', 
    'category', 
    'name', 
    'description',
    'website',
    'price',
    'imageUrl',
    'tag',
    'createdBy',
    'date',
    'actions'
  ];

  public ngOnInit(): void {
    const url: string = '/assets/data.json';
    this.http.get(url).subscribe((response) => {
      this.resourceInfo = response;
    });
  }

  delete(id: number) {
    this.dialog.open(DeleteDialog);
  }

}

@Component({
  selector: 'delete-dialog',
  template: 'Delete? Are you sure?'
})
export class DeleteDialog {}

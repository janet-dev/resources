import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { MaterialDesignModule } from '../material-design/material-design.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-admin-resources',
  standalone: true,
  imports: [CommonModule, MaterialDesignModule, MatDialogModule],
  templateUrl: './admin-resources.component.html',
  styleUrls: ['./admin-resources.component.scss']
})

/*
Manages and displays resource information, 
allowing users to hide or perform actions on specific resources through a dialog. 
The resource data is fetched from a JSON file during initialization.
*/
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
      console.log('resourceInfo: ', this.resourceInfo);
    });
    
  }

  openDialog(id: number) {
    
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { title: `Hide resource: ${id}` }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === "true") {
        console.log('resource: ', this.resourceInfo[id-1])
        // add code to hide resource - cannot delete data from files
        alert(`Resource ${id} is hidden`);
      }
    });

  }

}

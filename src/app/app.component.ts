import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public resourceInfo: any;
  public constructor(private http: HttpClient) {}

  public ngOnInit(): void {
    const url: string = '/assets/data.json';
    this.http.get(url).subscribe((response) => {
      this.resourceInfo = response;
    });
  }
  title = 'Resources';
}

import { Injectable } from '@angular/core';
import { ResourceModel } from '../resources/models/resource.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  
  // get data from data.json file
  private _data$$ = new BehaviorSubject<ResourceModel[]>([]);
  get data$() {return this._data$$.asObservable()};

  constructor(
    private http: HttpClient
  ) { }

  public getResources(): Observable<ResourceModel[]>  {
    return this.http.get<ResourceModel[]>('/assets/data.json').pipe(
      tap((data: ResourceModel[]) => this._data$$.next(data))
    );
  }


  // data from single-resource to resource detail
  private resourceData: any;

  setResourceData(data: any) {
    this.resourceData = data;
  }

  getResourceData() {
    return this.resourceData;
  }

}

import { Injectable } from '@angular/core';
import { Environment} from "../../../Environments/Environment";
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceMovieService {
  baseUrl: string = Environment.baseUrl;
  constructor(private http: HttpClient) {}
  getAll(){
    return this.http.get(this.baseUrl);
  }
}

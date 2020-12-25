import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class GetReposService {

  constructor(private httpClient: HttpClient) { }

  getRepos(page){
    let date = new Date();
    let newDate  = moment(date);
    let calculDate = newDate.subtract(30, 'days');
    let exactDate = calculDate.format("YYYY-MM-DD")
    return this.httpClient.get('https://api.github.com/search/repositories?q=created:>'+exactDate+'&sort=stars&order=desc&page='+page);
  }
}

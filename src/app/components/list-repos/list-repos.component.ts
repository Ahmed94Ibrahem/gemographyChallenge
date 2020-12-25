import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { GetReposService } from 'src/app/services/get-repos.service';

@Component({
  selector: 'app-list-repos',
  templateUrl: './list-repos.component.html',
  styleUrls: ['./list-repos.component.css']
})
export class ListReposComponent implements OnInit {
page:number;
  reposList:[];
  constructor(private getRepos: GetReposService) { }

  ngOnInit(): void {
    this.onPageChange(this.page);
  }

  onPageChange(page){
    this.getRepos.getRepos(this.page).subscribe( (data:any) =>{
      this.reposList = data.items;
      console.log(this.reposList)

      this.reposList.forEach( (repository:any) => {
        let date = new Date();
        let newDate  = moment(date);
        let createdAtDate= moment(repository.created_at);
        repository.created_at = newDate.diff(createdAtDate, 'days');
      })
    })
  }
}

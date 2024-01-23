import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {gql} from "@apollo/client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FE';
  mockData: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo.watchQuery({
      query: gql`
        {
          getMockData {
            id
            name
            description
          }
        }
      `,
    }).valueChanges.subscribe((result: any) => {
      if (result.data) {
        this.mockData = result.data.getMockData;
      }
    });
  }
}

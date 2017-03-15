/*
  CSV parsing code is copyright ©2016 SodhanaLibrary, from their angular2-examples repository on GitHub.
  License: https://github.com/SodhanaLibrary/angular2-examples/blob/master/LICENSE
  Repository: https://github.com/SodhanaLibrary/angular2-examples
*/

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CatalogService {

  csvUrl = '../assets/sample.csv';

  constructor(private http: Http) { }

  getCatalog(): Observable<any[][]> {
    return this.http.get(this.csvUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {

    let csvData = res['_body'] || '';
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');
    let lines: any[][] = [];

    for (let i = 0; i < allTextLines.length; i++) {
      // split content based on comma
      let data = allTextLines[i].split(',');
      if (data.length == headers.length) {
        let tarr = [];
        for (let j = 0; j < headers.length; j++) {
          tarr.push(data[j]);
        }
        lines.push(tarr);
      }
    }
    return lines;
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return errMsg;
  }

}

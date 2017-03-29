import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { CatalogService } from './catalog.service';

describe('CatalogService', () => {
  let httpStub;
  let mockCsv = "categoryCode,productCode,productName,bv,price\n101,1011,Produk Sampel 1,20,35.00\n101,1012,Produk Sampel 2,15,30.00\n102,1021,Produk Sampel 3,30,12.90\n102,1022,Produk Sampel 4,40,22.50\n102,1023,Produk Sampel 5,10,11.95\n03,1031,Produk Sampel 6,50,40.99\n104,1041,Produk Sampel 7,50,33.90";

  beforeEach(() => {
    httpStub = {
      get(url) {
        return new Observable(observer => {
          observer.next(mockCsv);
          observer.complete();
        });
      }
    }

    TestBed.configureTestingModule({
      providers: [
        CatalogService,
        { provide: Http, useValue: httpStub }]
    });
  });

  it('should ...', fakeAsync(inject([CatalogService], (service: CatalogService) => {
    expect(service).toBeTruthy();
    // let catalog = [];
    // service.getCatalog()
    //   .subscribe(
    //     cat => {
    //       for (let i = 0; i < cat.length; i++) {
    //         let subArr = [];
    //         for (let j = 0; j < cat[i].length; j++) {
    //           subArr.push(cat[i][j]);
    //         }
    //         catalog.push(subArr);
    //       }
    //     },
    //     err => console.error(err)
    //   )
    //   .unsubscribe();
    // tick();
    // expect(catalog[0][0]).toBe("categoryCode");
  })));
});
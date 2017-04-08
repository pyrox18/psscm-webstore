import { CatalogItem } from './catalog-item';

export class Catalog {

  categoryCodes: any[];
  catalogMap: Map<any, any>;

  constructor(rawCatalog: any[][]) {
    this.categoryCodes = [];
    this.catalogMap = new Map();

    // Get category codes from csv data first
    for (let i = 1; i < rawCatalog.length; i++) {
      this.categoryCodes.push(rawCatalog[i][0]);
    }
    this.categoryCodes = this.categoryCodes.filter((item, pos) => {
      return this.categoryCodes.indexOf(item) === pos;
    });

    // Then build catalog inside catalogMap
    for (let i of this.categoryCodes) {
      let items: CatalogItem[] = [];
      for (let j = 1; j < rawCatalog.length; j++) {
        if (rawCatalog[j][0] == i) {
          items.push(new CatalogItem(rawCatalog[j][0], rawCatalog[j][1], rawCatalog[j][2], rawCatalog[j][3], rawCatalog[j][4]));
        }
      }
      this.catalogMap.set(i, items);
    }
  }

  getProduct(categoryCode: any, productCode: any) {
    if (this.categoryCodes.includes(categoryCode)) {
      let items = this.catalogMap.get(categoryCode);
      for (let i of items) {
        if (productCode == i.productCode) {
          return i;
        }
      }
    }
    return null;
  }

}

export class OrderItem {

  constructor(
    public categoryCode?: any,
    public productCode?: any,
    public productName?: string,
    public bv?: number,
    public price?: number,
    public quantity?: number
  ) {}

}
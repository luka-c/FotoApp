export class Option {
  size: string;
  resolution: string;
  type: string;
  price: number;
  signature: boolean;

  constructor(size: string, resolution: string, type: string, price: number, signature: boolean) {
    this.size = size;
    this.resolution = resolution;
    this.type = type;
    this.price = price;
    this.signature = signature;
  }
}

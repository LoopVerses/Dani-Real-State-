import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(price: number): string {
  if (price >= 10000000) {
    const cr = price / 10000000;
    return `PKR ${cr % 1 === 0 ? cr : cr.toFixed(1)} Cr`;
  }
  if (price >= 100000) {
    const lac = price / 100000;
    return `PKR ${lac % 1 === 0 ? lac : lac.toFixed(1)} Lac`;
  }
  return `PKR ${price.toLocaleString("en-PK")}`;
}

export function formatArea(area: number): string {
  return `${area.toLocaleString("en-PK")} sq ft`;
}

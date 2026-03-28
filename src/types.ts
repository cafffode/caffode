export interface CartItem {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  quantity: number;
  weight?: number; // in kg
}

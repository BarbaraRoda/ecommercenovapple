import { User } from "./user.interface";
import { Product } from "./products.interface";

export interface Order {
  id: number;
  status: "pending" | "approved" | "rejected";
  date: Date;
  user: User;
  products: Product[];
}

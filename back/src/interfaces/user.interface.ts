import { Order } from "./orders.interface";

export enum Role {
  ADMIN = "admin",
  USER = "user",
}

export interface Credential {
    id: number;
    password: string;
  }

export interface User {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: Role;
  credential: Credential;
  orders: Order[];
}

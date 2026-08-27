export type Product = {
  name: string;
  price: string;
  variant: "amber" | "red" | "espresso" | "green";
  category: string;
};

export const products: Product[] = [
  { name: "Heritage Tee", price: "$32.00", variant: "red", category: "Tees" },
  { name: "Backroad Hoodie", price: "$58.00", variant: "green", category: "Hoodies & Flannels" },
  { name: "Tailgate Cap", price: "$28.00", variant: "amber", category: "Hats" },
  { name: "Gravel Road Flannel", price: "$54.00", variant: "red", category: "Hoodies & Flannels" },
  { name: "Bourbon Trail Tee", price: "$30.00", variant: "espresso", category: "Tees" },
  { name: "Bluegrass Trucker Hat", price: "$26.00", variant: "amber", category: "Hats" },
  { name: "Backyard Fire Crewneck", price: "$50.00", variant: "red", category: "Hoodies & Flannels" },
  { name: "Dirt Road Koozie", price: "$24.00", variant: "green", category: "Accessories" },
];

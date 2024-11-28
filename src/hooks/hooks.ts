import { useQuery } from "@tanstack/react-query";
import { getProduct, getProducts } from "../api/api";

export function useProduct(id: string) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });
}

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}

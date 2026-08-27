import Image from "next/image";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import BuyButton from "@/components/BuyButton";
import { formatPrice, type Product } from "@/lib/products";

export default function ProductCard({
  product,
  height = 280,
}: {
  product: Product;
  height?: number;
}) {
  return (
    <div className="flex flex-col">
      {product.image ? (
        <div className="relative w-full overflow-hidden" style={{ height }}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
      ) : (
        <PlaceholderPhoto
          variant={product.variant ?? "espresso"}
          height={height}
          label="Photo coming"
        />
      )}
      <div className="pt-4">
        <div className="text-[17px] font-semibold">{product.name}</div>
        {typeof product.priceCents === "number" && (
          <div className="text-[var(--espresso-2)] mt-1">
            {formatPrice(product.priceCents)}
          </div>
        )}
      </div>
      <BuyButton product={product} />
    </div>
  );
}

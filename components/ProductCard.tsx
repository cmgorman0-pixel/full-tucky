import Image from "next/image";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import BuyButton from "@/components/BuyButton";
import { formatPrice } from "@/lib/products";
import type { CatalogItem } from "@/lib/catalog";

export default function ProductCard({
  product,
  priority = false,
}: {
  product: CatalogItem;
  priority?: boolean;
}) {
  return (
    <div className="group flex flex-col">
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[var(--cream-2)]">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 30vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <PlaceholderPhoto variant={product.variant ?? "espresso"} height={480} label="Photo coming" />
        )}
      </div>

      <div className="pt-5 flex items-baseline justify-between gap-3">
        <h3 className="text-[15px] font-semibold tracking-tight text-[var(--espresso)] font-[family-name:var(--font-body)]">
          {product.name}
        </h3>
        {typeof product.priceCents === "number" && (
          <span className="text-[15px] text-[var(--espresso-2)] whitespace-nowrap">
            {formatPrice(product.priceCents)}
          </span>
        )}
      </div>

      {product.category && (
        <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-[var(--espresso-2)] opacity-70">
          {product.category}
        </div>
      )}

      <BuyButton product={product} />
    </div>
  );
}

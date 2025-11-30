import Link from "next/link"
import type { Product } from "@/lib/types"
import { VendorIcon } from "./vendor-icon"
import { vendorConfig } from "@/lib/vendor-config"
import { cn } from "@/lib/utils"
import { ArrowRightIcon } from "@radix-ui/react-icons"

interface ProductCardProps {
  product: Product
  score?: number
  className?: string
}

export function ProductCard({ product, score, className }: ProductCardProps) {
  const vendorName = vendorConfig[product.vendor]?.name || product.vendor

  return (
    <Link
      href={`/product/${product.slug}`}
      className={cn(
        "group relative block overflow-hidden",
        "rounded-2xl transition-all duration-300",
        "bg-card border border-border",
        "hover:border-foreground/20 hover:shadow-lg",
        className,
      )}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="space-y-3 mb-6">
          {/* Vendor Badge */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <VendorIcon vendor={product.vendor} className="h-3.5 w-3.5" />
              <span className="font-mono text-xs uppercase tracking-wider">{vendorName}</span>
            </div>
            {score !== undefined && (
              <div className="rounded-full bg-primary/10 px-2 py-0.5">
                <span className="font-mono text-xs font-bold text-primary">{score.toFixed(1)}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="font-sans text-lg font-medium leading-tight text-foreground line-clamp-2 min-h-[3.5rem]">
            {product.title}
          </h3>

          {/* Price */}
          <div className="flex items-baseline gap-1.5">
            <span className="font-sans text-3xl font-light text-foreground">${product.price}</span>
            <span className="text-xs text-muted-foreground">USD</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6 flex-grow border-b border-border pb-6">
          {product.short}
        </p>

        {/* Features/Goals */}
        <div className="space-y-3 mb-6">
          {product.goals.slice(0, 3).map((goal) => (
            <div key={goal} className="flex items-center gap-2 text-sm text-foreground">
              <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              <span className="capitalize">{goal}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-4">
          <div className="w-full h-10 rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 font-medium text-sm group-hover:gap-3">
            <span>View Details</span>
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  )
}

import { notFound } from "next/navigation"
import Link from "next/link"
import { products } from "@/lib/seed"
import { Button } from "@/components/ui/button"
import { VendorIcon } from "@/components/vendor-icon"
import { vendorConfig } from "@/lib/vendor-config"
import { ProductCard } from "@/components/product-card"
import { BuyButton } from "@/components/buy-button"
import { CheckIcon } from "@radix-ui/react-icons"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  const vendorName = vendorConfig[product.vendor]?.name || product.vendor

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.goals.some((g) => product.goals.includes(g)))
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/15 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-foreground/25">
              <span className="font-sans text-xl font-bold text-foreground">L</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/products">
              <Button variant="ghost" size="sm">
                Back to Catalog
              </Button>
            </Link>
            <Link href="/quiz">
              <Button variant="secondary" size="sm" className="rounded-2xl">
                Take Quiz
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left: Compact Info Card */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              {/* Vendor & Category */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1.5 rounded-full bg-secondary/50 px-3 py-1">
                  <VendorIcon vendor={product.vendor} className="h-3.5 w-3.5" />
                  <span className="font-mono text-xs uppercase tracking-wider text-secondary-foreground">
                    {vendorName}
                  </span>
                </div>
                <div className="rounded-full bg-accent/20 px-3 py-1">
                  <span className="font-mono text-xs capitalize text-accent-foreground">{product.category}</span>
                </div>
                {product.stockStatus === "in_stock" && (
                  <div className="rounded-full bg-primary/10 px-3 py-1">
                    <span className="font-mono text-xs text-primary">In Stock</span>
                  </div>
                )}
              </div>

              {/* Title */}
              <h1 className="font-sans text-3xl font-light leading-tight tracking-tight text-foreground mb-4">
                {product.title}
              </h1>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating!) ? "text-accent" : "text-muted"}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="font-mono text-sm font-semibold text-foreground">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">out of 5</span>
                </div>
              )}

              {/* Description */}
              <p className="text-base leading-relaxed text-foreground mb-6 pb-6 border-b border-border">
                {product.short}
              </p>

              {/* Goals */}
              <div className="space-y-3 mb-6">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Benefits</p>
                <div className="space-y-2">
                  {product.goals.map((goal) => (
                    <div key={goal} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckIcon className="w-4 h-4 text-primary" />
                      <span className="capitalize">{goal} optimization</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pros & Cons */}
              {(product.pros || product.cons) && (
                <div className="grid gap-4 sm:grid-cols-2 pt-6 border-t border-border">
                  {product.pros && (
                    <div className="space-y-3">
                      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Pros</p>
                      <ul className="space-y-2">
                        {product.pros.map((pro, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                            <CheckIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {product.cons && (
                    <div className="space-y-3">
                      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Cons</p>
                      <ul className="space-y-2">
                        {product.cons.map((con, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                            <span className="text-muted-foreground flex-shrink-0 mt-0.5">•</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right: Price & CTA Sticky Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 rounded-2xl border border-border bg-card p-6 space-y-6">
              {/* Price */}
              <div className="space-y-2 pb-6 border-b border-border">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Price</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-sans text-4xl font-light text-foreground">${product.price}</span>
                  <span className="text-sm text-muted-foreground">USD</span>
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-3">
                <BuyButton
                  productId={product.id}
                  productTitle={product.title}
                  vendorName={vendorName}
                  hasStripePrice={!!product.priceInCents}
                  affiliateUrl={product.affiliateUrl}
                />
                <p className="text-center text-xs text-muted-foreground">
                  {product.priceInCents ? "Secure checkout powered by Stripe" : "External link • Affiliate partnership"}
                </p>
              </div>

              {/* Affiliate Disclosure */}
              <div className="rounded-lg bg-muted/20 p-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Disclosure:</strong> We may earn a commission when you purchase
                  through this link. This helps us provide free personalized recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 border-t border-border pt-16">
            <h2 className="mb-8 font-sans text-2xl font-light tracking-tight text-foreground">Pairs Well With</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

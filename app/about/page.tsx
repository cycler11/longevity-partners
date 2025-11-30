import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function AboutPage() {
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
            <Link href="/quiz">
              <Button variant="secondary" className="rounded-2xl">
                Take Quiz
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background px-6 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-4 inline-block rounded-full border border-foreground/20 bg-foreground/15 px-4 py-1.5 backdrop-blur-md">
            <p className="font-mono text-xs text-foreground/90">Our Story</p>
          </div>
          <h1 className="mb-6 font-sans text-5xl font-light leading-tight tracking-tight text-foreground md:text-6xl">
            <span className="text-balance">Making longevity accessible to everyone</span>
          </h1>
          <p className="text-xl leading-relaxed text-muted-foreground">
            Longevity Base was founded on a simple belief: everyone deserves access to evidence-based tools and products
            that can help them live longer, healthier lives.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-16">
          {/* Our Mission */}
          <section>
            <h2 className="mb-4 font-sans text-3xl font-light tracking-tight text-foreground">Our Mission</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We cut through the noise of the longevity industry to curate only the most effective, science-backed
              products. Our personalized quiz system ensures you discover products that align with your unique goals,
              budget, and lifestyle—not just what's trending.
            </p>
          </section>

          {/* Why We're Different */}
          <section>
            <h2 className="mb-6 font-sans text-3xl font-light tracking-tight text-foreground">Why We're Different</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-foreground/10 bg-foreground/5 p-6">
                <h3 className="mb-2 font-sans text-xl font-medium text-foreground">Personalized Recommendations</h3>
                <p className="text-muted-foreground">
                  Our quiz-driven approach understands your specific goals and constraints
                </p>
              </div>
              <div className="rounded-2xl border border-foreground/10 bg-foreground/5 p-6">
                <h3 className="mb-2 font-sans text-xl font-medium text-foreground">Curated Selection</h3>
                <p className="text-muted-foreground">
                  Every product is vetted for quality and backed by scientific evidence
                </p>
              </div>
              <div className="rounded-2xl border border-foreground/10 bg-foreground/5 p-6">
                <h3 className="mb-2 font-sans text-xl font-medium text-foreground">Multi-Vendor Marketplace</h3>
                <p className="text-muted-foreground">We aggregate the best products from top brands and retailers</p>
              </div>
              <div className="rounded-2xl border border-foreground/10 bg-foreground/5 p-6">
                <h3 className="mb-2 font-sans text-xl font-medium text-foreground">Transparent Partnerships</h3>
                <p className="text-muted-foreground">All affiliate relationships are clearly disclosed</p>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section>
            <h2 className="mb-4 font-sans text-3xl font-light tracking-tight text-foreground">Our Values</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We believe in transparency, scientific rigor, and putting your health first. We only recommend products
              we'd use ourselves, and we're committed to helping you make informed decisions about your longevity
              journey.
            </p>
          </section>

          {/* CTA */}
          <section className="flex justify-center pt-8">
            <Link href="/quiz">
              <Button size="lg" className="rounded-2xl">
                Start Your Longevity Journey
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}

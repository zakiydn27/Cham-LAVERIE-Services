import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Fresh, Clean
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Professional laundry service that saves you time. We handle your clothes with care, using premium
              detergents and eco-friendly practicess.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                Learn More
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">4.9★</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">24h</p>
                <p className="text-sm text-muted-foreground">Quick Turnaround</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 md:h-full">
            <img
              src="./professional-laundry-service-clean-clothes.jpg"
              alt="Fresh laundry"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

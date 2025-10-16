import { Droplet, Zap, Leaf } from "lucide-react"

const services = [
  {
    icon: Droplet,
    title: "Wash & Fold",
    description:
      "Professional washing and folding service with premium care for all fabric types.",
  },
  {
    icon: Zap,
    title: "Express Service",
    description:
      "Need it fast? Our express service delivers clean clothes in 24 hours.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "We use sustainable, biodegradable detergents that are safe for the environment.",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive laundry solutions tailored to your needs
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

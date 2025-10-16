export default function OpeningHours() {
  const hours = [
    { day: "Monday", time: "09:00 AM - 02:00 PM" },
    { day: "Tuesday", time: "09:00 AM - 02:00 PM" },
    { day: "Wednesday", time: "09:00 AM - 02:00 PM" },
    { day: "Thursday", time: "09:00 AM - 02:00 PM" },
    { day: "Friday", time: "09:00 AM - 02:00 PM" },
    { day: "Saturday", time: "09:00 AM - 02:00 PM" },
    { day: "Sunday", time: "Closed" },
  ]

  return (
    <section id="opening-hour" className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Opening Hours</h2>
          <p className="text-muted-foreground text-lg">Visit us during our convenient business hours</p>
        </div>

        <div className="grid md:grid-cols-7 gap-3 max-w-5xl mx-auto">
          {hours.map((item, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-lg p-4 text-center hover:border-primary transition"
            >
              <h3 className="font-semibold text-foreground mb-2 text-sm">{item.day}</h3>
              <p className={`font-bold text-sm ${item.time === "Closed" ? "text-destructive" : "text-primary"}`}>
                {item.time}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Need service outside these hours? Contact us for special arrangements.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

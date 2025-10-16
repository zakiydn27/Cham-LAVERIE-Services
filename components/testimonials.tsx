import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Vessela Nalbancheva",
    role: "Tourist",
    content: "Fast, clean and efficient. You just leave your clothes and return in 45min.  If you don’t want to dry clothes they will be slightly damp so take a plastic bag.",
    rating: 5,
  },
  {
    name: "Steve",
    role: "Travel Enthusiast",
    content: "Best laundry in Chamonix. I highly recommend. Quick, efficient and friendly service.",
    rating: 5,
  },
  {
    name: "Sergey Zinovyev",
    role: "College Student",
    content: "Cham'LAVERIE is the name of the laundry that we visited at this address. The service was great. The guy who washed (perfectly) our clothes was very polite and helpful, although it was his last day at work before his vacation. Thank you so much!",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Join hundreds of satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

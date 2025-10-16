export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">C</span>
              </div>
              <span className="font-bold text-foreground">Cham'LAVERIE Services</span>
            </div>
            <p className="text-muted-foreground text-sm">Professional laundry service for busy people.</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Wash & Fold
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Express Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Dry Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Ironing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Cham'LAVERIE Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

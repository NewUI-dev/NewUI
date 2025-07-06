const companies = [
  { name: "Vercel", logo: "V" },
  { name: "GitHub", logo: "G" },
  { name: "Stripe", logo: "S" },
  { name: "Linear", logo: "L" },
  { name: "Notion", logo: "N" },
  { name: "Figma", logo: "F" },
  { name: "Discord", logo: "D" },
  { name: "Spotify", logo: "S" },
]

export function TrustedBySection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-sm sm:text-base text-muted-foreground font-medium">
            Trusted by teams at leading companies
          </p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 sm:gap-8 items-center justify-items-center max-w-4xl mx-auto">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
            >
              <span className="text-lg sm:text-xl font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                {company.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

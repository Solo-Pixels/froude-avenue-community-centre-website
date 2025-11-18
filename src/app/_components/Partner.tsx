const Partner = () => {
  const partners = [
    "Newfoundland and Labrador Housing",
    "Fry Family Foundation",
    "College of the North Atlantic",
    "Memorial University",
    "Marine Institute",
    "City of St.John's",
    "Kids Eat Smart Foundation",
    "NL Health Services",
    "O'Brien's Farm",
    "Food First NL",
    "NL Public Libraries",
  ];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="partner" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-4xl font-bold text-[rgba(8,88,95,1)] md:text-5xl">
          Our Partners
        </h2>
        <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
          We&apos;re grateful for the support of our community partners who help
          make our programs and services possible.
        </p>

        <div className="relative overflow-hidden py-8">
          <div className="animate-slide-partners flex">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="text-foreground mx-8 flex shrink-0 items-center text-2xl font-semibold whitespace-nowrap"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        <p className="text-muted-foreground mt-12 text-center text-sm">
          Interested in becoming a partner? Contact us to learn more about
          partnership opportunities.
        </p>
      </div>
    </section>
  );
};

export default Partner;

import { FC } from "react"

interface PartnersSectionProps {}

const PartnersSection: FC<PartnersSectionProps> = ({}) => {
  return (
    <section
      id="our-Partners"
      className="container relative w-full md:mb-96 mb-52 max-lg:mt-40"
    >
      <p className="text-base leading-6 text-[#f8fafc]/60">
        A reliable partner for the world&apos;s foremost companies ↘︎
      </p>
      {/* Forge Brands */}
      <div className="flex flex-wrap justify-between items-center">
        <img
          src="https://github.githubassets.com/images/modules/site/home-campaign/logos/stripe.svg"
          alt="Stripe logo"
          height="44"
          className="my-3 scale-90"
        />
        <img
          src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pinterest.svg"
          alt="Pinterest logo"
          height="44"
          className="my-3 scale-90"
        />
        <img
          src="https://github.githubassets.com/images/modules/site/home-campaign/logos/kpmg.svg"
          alt="KPMG logo"
          height="44"
          className="my-3 scale-90"
        />
        <img
          src="https://github.githubassets.com/images/modules/site/home-campaign/logos/mercedes.svg"
          alt="Mercedes-Benz logo"
          height="44"
          className="my-3 w-[200px]"
        />
        <img
          src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pg.svg"
          alt="P&amp;G logo"
          height="32"
          className="my-3 scale-90"
        />
        <img
          src="https://github.githubassets.com/images/modules/site/home-campaign/logos/telus.svg"
          alt="Telus logo"
          height="32"
          className="my-3 scale-90"
        />
      </div>
    </section>
  )
}

export default PartnersSection

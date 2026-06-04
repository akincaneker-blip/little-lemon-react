import FeatureCard from './FeatureCard';

import menuImage from '../assets/menu/menu-banner.webp';
import reservationImage from '../assets/images/reservation.webp';
import aboutImage from '../assets/images/about.webp';

function FeatureGrid() {
  return (
    <section className="content-grid" aria-label="Little Lemon highlights">
      <FeatureCard
        image={menuImage}
        alt="A colorful Mediterranean dish served at Little Lemon"
        title="Our Menu"
        description="Explore salads, pastas, grilled dishes and refreshing drinks prepared with simple, high-quality ingredients and bright Mediterranean flavors."
        linkText="View Menu"
        href="#menu"
      />

      <FeatureCard
        image={reservationImage}
        alt="A reserved restaurant table at Little Lemon"
        title="Reservations"
        description="Planning lunch, dinner or a special evening? Reserve your table in advance and enjoy a smooth dining experience without waiting."
        linkText="Reserve Now"
        href="#reservations"
      />

      <FeatureCard
        image={aboutImage}
        alt="The warmly lit exterior of the Little Lemon restaurant"
        title="About Us"
        description="Little Lemon is a family-owned restaurant focused on fresh food, friendly service and a relaxed neighborhood dining experience."
        linkText="Learn More"
        href="#about"
      />
    </section>
  );
}

export default FeatureGrid;
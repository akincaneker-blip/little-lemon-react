import aboutImage from '../assets/images/about.webp';

function AboutSection() {
  return (
    <section
      className="page-section about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="about-layout">
        <div className="about-content">
          <p className="section-label">Our story</p>

          <h2 id="about-title">
            A Neighborhood Restaurant with Mediterranean Roots
          </h2>

          <p>
            Little Lemon is a family-owned restaurant built around fresh
            ingredients, seasonal dishes and warm hospitality. Our menu
            combines familiar Mediterranean flavors with a relaxed
            neighborhood atmosphere.
          </p>

          <p>
            Whether you are joining us for a casual lunch, a family gathering
            or a special evening, our goal is to make every visit simple,
            welcoming and memorable.
          </p>

          <a href="#menu" className="button-link">
            Explore the Menu
          </a>
        </div>

        <img
          src={aboutImage}
          alt="The warmly lit exterior of the Little Lemon restaurant"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default AboutSection;
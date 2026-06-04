function Hero() {
  return (
    <section className="hero-banner" id="home" aria-labelledby="hero-title">
      <div className="hero-content">
        <h1 id="hero-title">Fresh Mediterranean Flavors</h1>

        <p>
          Enjoy fresh, locally sourced Mediterranean dishes in a warm and
          welcoming atmosphere. Discover seasonal specials, handmade favorites
          and our signature lemon-inspired recipes.
        </p>

        <a href="#reservations" className="button-link">
          Book a Table
        </a>
      </div>
    </section>
  );
}

export default Hero;
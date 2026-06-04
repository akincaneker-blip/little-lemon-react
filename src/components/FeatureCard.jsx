function FeatureCard({ image, alt, title, description, linkText, href }) {
  return (
    <article className="feature-card">
      <img src={image} alt={alt} loading="lazy" />

      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={href}>{linkText}</a>
      </div>
    </article>
  );
}

export default FeatureCard;
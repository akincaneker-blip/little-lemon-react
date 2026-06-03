function MenuItem({ item }) {
  return (
    <article className="menu-item-card">
      <img
        src={item.image}
        alt={`${item.name} served at Little Lemon`}
        loading="lazy"
      />

      <div className="menu-item-content">
        <div className="menu-item-heading">
          <h3>{item.name}</h3>
          <span className="menu-price">€{item.price.toFixed(2)}</span>
        </div>

        <p>{item.description}</p>

        {item.vegetarian && (
          <span className="menu-tag">Vegetarian</span>
        )}
      </div>
    </article>
  );
}

export default MenuItem;
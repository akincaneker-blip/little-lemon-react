import { useState } from 'react';
import menuItems from '../data/menuItems';
import MenuItem from './MenuItem';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'starters', label: 'Starters' },
  { id: 'main-courses', label: 'Main Courses' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'drinks', label: 'Drinks' },
];

function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems =
    selectedCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section
      className="page-section menu-section"
      id="menu"
      aria-labelledby="menu-title"
    >
      <div className="section-heading">
        <p className="section-label">Freshly prepared</p>
        <h2 id="menu-title">Explore Our Menu</h2>
        <p>
          Discover Mediterranean-inspired dishes prepared with fresh
          ingredients and simple, vibrant flavors.
        </p>
      </div>

      <div
        className="menu-filters"
        aria-label="Filter menu items by category"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={
              selectedCategory === category.id
                ? 'filter-button active'
                : 'filter-button'
            }
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default MenuSection;
import menuImage from '../assets/images/menu.webp';

const menuItems = [
  {
    id: 1,
    name: 'Greek Salad',
    description:
      'Tomatoes, cucumber, red onion, olives and feta cheese with a light herb dressing.',
    category: 'starters',
    price: 9.5,
    image: menuImage,
    vegetarian: true,
  },
  {
    id: 2,
    name: 'Bruschetta',
    description:
      'Toasted bread topped with tomatoes, basil, garlic and extra virgin olive oil.',
    category: 'starters',
    price: 7.9,
    image: menuImage,
    vegetarian: true,
  },
  {
    id: 3,
    name: 'Grilled Lemon Chicken',
    description:
      'Herb-marinated chicken served with roasted vegetables and couscous.',
    category: 'main-courses',
    price: 17.9,
    image: menuImage,
    vegetarian: false,
  },
  {
    id: 4,
    name: 'Mediterranean Pasta',
    description:
      'Pasta with cherry tomatoes, zucchini, basil and a lemon-infused olive oil sauce.',
    category: 'main-courses',
    price: 14.5,
    image: menuImage,
    vegetarian: true,
  },
  {
    id: 5,
    name: 'Lemon Cheesecake',
    description:
      'Creamy cheesecake with a fresh lemon topping and a crisp biscuit base.',
    category: 'desserts',
    price: 6.9,
    image: menuImage,
    vegetarian: true,
  },
  {
    id: 6,
    name: 'Homemade Lemonade',
    description:
      'Freshly squeezed lemon juice served chilled with mint and sparkling water.',
    category: 'drinks',
    price: 4.5,
    image: menuImage,
    vegetarian: true,
  },
];

export default menuItems;
import greekSaladImage from '../assets/menu/greek-salad.webp';
import bruschettaImage from '../assets/menu/bruschetta.webp';
import mediterraneanPastaImage from '../assets/menu/mediterranean-pasta.webp';
import lemonCheesecakeImage from '../assets/menu/lemon-cheesecake.webp';
import grilledLemonChickenImage from '../assets/menu/grilled-lemon-chicken.webp';
import homemadeLemonadeImage from '../assets/menu/homemade-lemonade.webp';


const menuItems = [
  {
    id: 1,
    name: 'Greek Salad',
    description:
      'Tomatoes, cucumber, red onion, olives and feta cheese with a light herb dressing.',
    category: 'starters',
    price: 9.5,
    image: greekSaladImage,
    vegetarian: true,
  },
  {
    id: 2,
    name: 'Bruschetta',
    description:
      'Toasted bread topped with tomatoes, basil, garlic and extra virgin olive oil.',
    category: 'starters',
    price: 7.9,
    image: bruschettaImage,
    vegetarian: true,
  },
  {
    id: 3,
    name: 'Grilled Lemon Chicken',
    description:
      'Herb-marinated chicken served with roasted vegetables and couscous.',
    category: 'main-courses',
    price: 17.9,
    image: grilledLemonChickenImage,
    vegetarian: false,
  },
  {
    id: 4,
    name: 'Mediterranean Pasta',
    description:
      'Pasta with cherry tomatoes, zucchini, basil and a lemon-infused olive oil sauce.',
    category: 'main-courses',
    price: 14.5,
    image: mediterraneanPastaImage,
    vegetarian: true,
  },
  {
    id: 5,
    name: 'Lemon Cheesecake',
    description:
      'Creamy cheesecake with a fresh lemon topping and a crisp biscuit base.',
    category: 'desserts',
    price: 6.9,
    image: lemonCheesecakeImage,
    vegetarian: true,
  },
  {
    id: 6,
    name: 'Homemade Lemonade',
    description:
      'Freshly squeezed lemon juice served chilled with mint and sparkling water.',
    category: 'drinks',
    price: 4.5,
    image: homemadeLemonadeImage,
    vegetarian: true,
  },
];

export default menuItems;
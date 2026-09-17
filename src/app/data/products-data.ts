import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Casque audio sans fil',
    price: 79.99,
    description: 'Casque bluetooth avec réduction de bruit active et 20h d\'autonomie.',
    category: 'Électronique',
    stock: 12,
    image: 'images/casque.jpg'
  },
  {
    id: 2,
    name: 'Clavier mécanique RGB',
    price: 59.90,
    description: 'Clavier mécanique rétroéclairé, switches bleus, format compact.',
    category: 'Électronique',
    stock: 8,
    image: 'images/clavier.jpg'
  },
  {
    id: 3,
    name: 'Sac à dos urbain',
    price: 45.00,
    description: 'Sac à dos imperméable avec compartiment ordinateur portable 15 pouces.',
    category: 'Accessoires',
    stock: 20,
    image: 'images/sac.jpg'
  },
  {
    id: 4,
    name: 'Gourde isotherme',
    price: 19.90,
    description: 'Garde les boissons froides 24h ou chaudes 12h. Contenance 750ml.',
    category: 'Accessoires',
    stock: 35,
    image: 'images/gourde.jpg'
  },
  {
    id: 5,
    name: 'Lampe de bureau LED',
    price: 29.99,
    description: 'Lampe articulée avec 3 niveaux de luminosité et port USB intégré.',
    category: 'Maison',
    stock: 0,
    image: 'images/lampe.jpg'
  },
  {
    id: 6,
    name: 'Plante d\'intérieur - Pothos',
    price: 14.50,
    description: 'Plante facile d\'entretien, idéale pour purifier l\'air intérieur.',
    category: 'Maison',
    stock: 15,
    image: 'images/plante.jpg'
  }
];
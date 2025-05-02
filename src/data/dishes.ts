import { Dish } from '../types';

export const dishes: Dish[] = [
  {
    id: '1',
    restaurantId: '1',
    name: 'Butter Chicken',
    description: 'Tender chicken cooked in a rich, creamy tomato sauce with butter and spices',
    price: 320,
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeg: false,
    popular: true
  },
  {
    id: '2',
    restaurantId: '1',
    name: 'Paneer Tikka Masala',
    description: 'Chunks of paneer marinated in spices and grilled, then cooked in a creamy sauce',
    price: 280,
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeg: true,
    popular: true
  },
  {
    id: '3',
    restaurantId: '2',
    name: 'Prawn Curry',
    description: 'Fresh prawns cooked in a coconut-based curry with coastal spices',
    price: 350,
    image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeg: false,
    popular: true
  },
  {
    id: '4',
    restaurantId: '2',
    name: 'Fish Tawa Fry',
    description: 'Fresh fish marinated with spices and shallow fried on a tawa',
    price: 300,
    image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeg: false,
    popular: false
  },
  {
    id: '5',
    restaurantId: '3',
    name: 'Mishti Doi',
    description: 'Traditional Bengali sweet yogurt dessert',
    price: 120,
    image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeg: true,
    popular: true
  },
  {
    id: '6',
    restaurantId: '3',
    name: 'Ilish Bhapa',
    description: 'Hilsa fish steamed with mustard paste, a Bengali delicacy',
    price: 400,
    image: 'https://images.pexels.com/photos/3296279/pexels-photo-3296279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeg: false,
    popular: true
  },
  {
    id: '7',
    restaurantId: '4',
    name: 'Masala Dosa',
    description: 'Crispy rice crepe filled with spiced potato filling, served with sambhar and chutney',
    price: 150,
    image: 'https://images.pexels.com/photos/4331490/pexels-photo-4331490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeg: true,
    popular: true
  },
  {
    id: '8',
    restaurantId: '4',
    name: 'Idli Sambhar',
    description: 'Steamed rice cakes served with lentil stew and coconut chutney',
    price: 120,
    image: 'https://images.pexels.com/photos/4331477/pexels-photo-4331477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeg: true,
    popular: false
  },
  {
    id: '9',
    restaurantId: '5',
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice cooked with chicken, herbs, and spices in the Mughlai style',
    price: 350,
    image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeg: false,
    popular: true
  },
  {
    id: '10',
    restaurantId: '5',
    name: 'Rogan Josh',
    description: 'Aromatic lamb curry with a deep red sauce made from Kashmiri chilies',
    price: 380,
    image: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeg: false,
    popular: false
  },
  {
    id: '11',
    restaurantId: '6',
    name: 'Chettinad Chicken',
    description: 'Spicy chicken curry from the Chettinad region, known for its aromatic spices',
    price: 320,
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeg: false,
    popular: true
  },
  {
    id: '12',
    restaurantId: '6',
    name: 'Pongal',
    description: 'Traditional Tamil rice and lentil dish seasoned with cumin, pepper, and ghee',
    price: 180,
    image: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeg: true,
    popular: false
  },
  {
    id: '13',
    restaurantId: '7',
    name: 'Hyderabadi Biryani',
    description: 'Fragrant rice dish with marinated meat, herbs, and spices, cooked in the dum style',
    price: 380,
    image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeg: false,
    popular: true
  },
  {
    id: '14',
    restaurantId: '7',
    name: 'Haleem',
    description: 'Slow-cooked stew of wheat, lentils, and meat, a Hyderabadi specialty',
    price: 320,
    image: 'https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeg: false,
    popular: true
  },
  {
    id: '15',
    restaurantId: '8',
    name: 'Vada Pav',
    description: 'Mumbai\'s famous street food - spicy potato fritter in a bread roll with chutneys',
    price: 80,
    image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeg: true,
    popular: true
  },
  {
    id: '16',
    restaurantId: '8',
    name: 'Pav Bhaji',
    description: 'Mashed vegetable curry served with buttered bread rolls',
    price: 120,
    image: 'https://images.pexels.com/photos/15511108/pexels-photo-15511108/free-photo-of-pav-bhaji-with-butter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isVeg: true,
    popular: true
  }
];
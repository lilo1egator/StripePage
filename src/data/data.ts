import type {ReviewsType, NavItem, BenefitsItem, DriversPerson, ServicesItem, CountryItem} from '../types/types'
import { FR, IT, DE, NL, ES, UA, BG, PL } from 'country-flag-icons/react/3x2'

export const reviews: ReviewsType[] = [
  {id: 1, name: 'Ben Yardley', location: 'Київ - Кишинів', date: '12 Mar 2023', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', src: '/reviews/1.png', stars: 5},
  {id: 2, name: 'Craig Martin', location: 'Львів - Париж', date: '1 May 2023', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', src: '/reviews/2.png', stars: 5},
  {id: 3, name: 'Anna Petrova', location: 'Одеса - Рим', date: '15 Feb 2023', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', src: '/reviews/1.png', stars: 4},
  {id: 4, name: 'Michael Smith', location: 'Харків - Варшава', date: '22 Jan 2023', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', src: '/reviews/1.png', stars: 5},
  {id: 5, name: 'Olga Ivanova', location: 'Дніпро - Берлін', date: '3 Apr 2023', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', src: '/reviews/1.png', stars: 5},
  {id: 6, name: 'John Lee', location: 'Київ - Лондон', date: '18 Mar 2023', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', src: '/reviews/1.png', stars: 4},
  {id: 7, name: 'Sofia Kuznetsova', location: 'Львів - Відень', date: '7 May 2023', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', src: '/reviews/1.png', stars: 5},
  {id: 8, name: 'David Brown', location: 'Одеса - Барселона', date: '30 Apr 2023', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', src: '/reviews/2.png', stars: 5},
  {id: 9, name: 'Maria Antonova', location: 'Харків - Прага', date: '12 Feb 2023', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', src: '/reviews/1.png', stars: 3},
  {id: 10, name: 'Alex Johnson', location: 'Дніпро - Мілан', date: '25 Mar 2023', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', src: '/reviews/2.png', stars: 5},
  {id: 11, name: 'Elena Petrova', location: 'Київ - Вільнюс', date: '10 Jan 2023', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', src: '/reviews/1.png', stars: 4},
  {id: 12, name: 'Tom Wilson', location: 'Львів - Мадрид', date: '16 Feb 2023', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', src: '/reviews/2.png', stars: 5},
  {id: 13, name: 'Victoria Romanova', location: 'Одеса - Копенгаген', date: '28 Mar 2023', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', src: '/reviews/1.png', stars: 5},
  {id: 14, name: 'Mark Evans', location: 'Харків - Амстердам', date: '5 May 2023', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', src: '/reviews/2.png', stars: 5},
  {id: 15, name: 'Natalia Sokolova', location: 'Дніпро - Париж', date: '12 Apr 2023', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', src: '/reviews/1.png', stars: 4},
  {id: 16, name: 'Chris Green', location: 'Київ - Рим', date: '20 Feb 2023', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', src: '/reviews/1.png', stars: 4},
  {id: 17, name: 'Irina Volkova', location: 'Львів - Мюнхен', date: '8 Mar 2023', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', src: '/reviews/2.png', stars: 5},
  {id: 18, name: 'Robert King', location: 'Одеса - Лісабон', date: '15 Apr 2023', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', src: '/reviews/1.png', stars: 5},
];

export const nav: NavItem[] = [
  { id: "home", label: "Головна", href: "#" },
  { id: "for-carriers", label: "Перевізникам", href: "#" },
  { id: "about", label: "Про нас", href: "#" },
  { id: "profile", label: "Профіль перевізника", href: "/" },
];

export const benefits: BenefitsItem[] = [
  { id: "date", title: 'На ринку від:', img: '/intro/fire.svg', label: "Травень  31, 2011" },
  { id: "passengers", title: 'Перевезених пасажирів', img: '/intro/people.svg', label: "4000+"},
  { id: "carpark", title: 'Автопарк', img: '/intro/train.svg', label: "8 бусів"},
  { id: "country", title: 'Обслуговуємо', img: '/intro/geo.svg', label: "8 країн"},
  { id: "city", title: 'Місто', img: '/intro/city.svg', label: "Львів"},
];

export const drivers: DriversPerson[] = [
    {id: 'oleksandr', name: 'Олександр', experience: 5, instagram: '#', linkedin: '#', img: '/drivers/Avatar1.png'},
    {id: 'volodymir', name: 'Володимир', experience: 7, instagram: '#', linkedin: '#', img: '/drivers/Avatar2.png'},
    {id: 'irina', name: 'Ірина', experience: 1, instagram: '#', linkedin: '#', img: '/drivers/Avatar1.png'},
    {id: 'myhailo', name: 'Михайло', experience: 1, instagram: '#', linkedin: '#', img: '/drivers/Avatar2.png'},
    {id: 'yulia', name: 'Юлія', experience: 2, instagram: '#', linkedin: '#', img: '/drivers/Avatar3.png'},
    {id: 'maksim', name: 'Максим', experience: 2, instagram: '#', linkedin: '#', img: '/drivers/Avatar1.png'},
    {id: 'bogdana', name: 'Богдана', experience: 4, instagram: '#', linkedin: '#', img: '/drivers/Avatar2.png'},
]

export const services: ServicesItem[] = [
    {id: 'cond', title: 'Кондиціонер', img: '/services/cond.svg'},
    {id: 'wifi', title: 'Wi-Fi', img: '/services/wifi.svg'},
    {id: 'tv', title: 'TV', img: '/services/tv.svg'},
    {id: 'wc', title: 'Туалет', img: '/services/wc.svg'},
    {id: 'weekend', title: 'Зручні сидіння', img: '/services/weekend.svg'},
    {id: 'animal', title: 'Перевозимо тварин', img: '/services/animal.svg'},
]

export const country: CountryItem[] = [
  { id: 'FR', title: 'Франція', Flag: FR },
  { id: 'IT', title: 'Італія', Flag: IT },
  { id: 'DE', title: 'Німеччина', Flag: DE },
  { id: 'NL', title: 'Нідерланди', Flag: NL },
  { id: 'ES', title: 'Іспанія', Flag: ES },
  { id: 'UA', title: 'Україна', Flag: UA },
  { id: 'BG', title: 'Болгарія', Flag: BG },
  { id: 'PL', title: 'Польща', Flag: PL },
];
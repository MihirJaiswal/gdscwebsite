//for navigation
export const navigation = [
    {
      label: "0",
      title: "Home",
      route: "/",
    },
    {
      label: "1",
      title: "Event",
      route: "/event",
    },
    {
      label: "2",
      title: "Team",
      route: "/team",
    },
    {
      label: "3",
      title: "Contact",
      route: "/contact",
    }
  ];

//for partners
interface PartnerProps {
    id: number;
    image: string;
    alt: string;
  }
export const partnersData: PartnerProps[] = [
    { id: 1, image: '/github.svg', alt: 'Partner 1' },
    { id: 2, image: '/facebook.svg', alt: 'Partner 2' },
    { id: 3, image: '/linkedin.svg', alt: 'Partner 3' },
    { id: 4, image: '/twitter.svg', alt: 'Partner 4' },
  ]

  //for featured events on homepage

  interface CardProps {
    imageSrc: string;
    title: string;
    content: string;
    authorName: string;
    authorDate: string;
    authorAvatar: string;
  }
  
  export const cardData: CardProps[] = [
    {
      imageSrc: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      title: 'Can coffee make you a better developer?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      authorName: 'Jonathan Reinink',
      authorDate: 'Aug 18',
      authorAvatar: 'https://tailwindcss.com/img/jonathan.jpg',
    },
  
  ];
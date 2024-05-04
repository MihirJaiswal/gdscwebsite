//for navigation
export const navigation = [
    {
      label: "0",
      title: "Home",
      route: "/",
    },
    {
      label: "1",
      title: "Events",
      route: "/events",
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
    { id: 1, image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/gdg%20indore.png', alt: 'Partner 1' },
    { id: 2, image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/download%20%283%29_3HE9SvO.png', alt: 'Partner 2' },
    { id: 3, image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/MDD%20logo.jpeg', alt: 'Partner 3' },
    { id: 4, image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/IMG-20230907-WA0003.jpg', alt: 'Partner 4' },
  ]

  //for upcoming events

  interface CardProps {
    imageSrc: string;
    title: string;
    content: string;
    authorName: string;
    authorDate: string;
    authorAvatar: string;
    membersOnly?: boolean;
    color?: string;
  }
  
  export const cardData: CardProps[] = [
    {
      imageSrc: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/Screenshot%202024-05-01%20183526.png',
      title: 'Build with AI Workshop',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      authorName: 'Faculty Advisor',
      authorDate: '2024',
      authorAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi4YEP4gQqE1zGteIRZeO_-LYJpBKRD3eToft5WmboUw&s',
      membersOnly: true,
      color: 'text-red-600',
    },
    {
      imageSrc: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/contentbuilder/GDG-Bevy-EventThumbnail.png',
      title: 'Data and AI Nexus 3.0',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      authorName: 'Lead',
      authorDate: '2024',
      authorAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi4YEP4gQqE1zGteIRZeO_-LYJpBKRD3eToft5WmboUw&s',
      membersOnly: true,
      color: 'text-green-600',
    },
    {
      imageSrc: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/event_type_logos/Screenshot_2023-01-02_at_10.18.12_AM_mGpw3xV_kJOQVUu_ei79VQF_Hqy4HB8_ix_eODZlzg.png',
      title: 'ML Study Jam - Informative Session',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      authorName: 'Foster',
      authorDate: '2024',
      authorAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi4YEP4gQqE1zGteIRZeO_-LYJpBKRD3eToft5WmboUw&s',
      membersOnly: false,
      color: 'text-blue-600',
    },
  
  ];

  //for past events
  
  interface PastProps {
    imageSrc: string;
    title: string;
    content: string;
    date: string;
    color?: string;
  }
  
  export const PastData: PastProps[] = [
    {
      imageSrc: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/event_type_logos/Screenshot_2023-01-02_at_10.18.12_AM_mGpw3xV_kJOQVUu_ei79VQF_Hqy4HB8_ix_eODZlzg.png',
      title: 'Info session ',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      date: '2024',
      color: 'text-blue-600',
    },
    {
      imageSrc: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/Purple%20and%20Yellow%20Modern%20Online%20Event%20Instagram%20Post%20%281%29.png',
      title: 'GSoC Connect',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      date: '2024',
      color: 'text-blue-600',
    },
    {
      imageSrc: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/nivesh_Wh97jfv.png',
      title: 'Flutter Fun',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      date: '2024',
      color: 'text-blue-600',
    },
    {
      imageSrc: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/%28For%20Bevy%29%20solutionchallenge-2022-EventThumbnail_oSBXFzI_OSGKhiA.png',
      title: 'Solution Challenge Info sesion',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
     date: '2024',
      color: 'text-blue-600',
    },
    {
      imageSrc: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/Link2Git%20Session.jpg',
      title: 'Link2Git',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      date: '2024',
      color: 'text-blue-600',
    },
    {
      imageSrc: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/Backpacking%20India%20Poster.jpg',
      title: 'Backpacking India',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      date: '2024',
      color: 'text-blue-600',
    },
    {
      imageSrc: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/Copy%20of%20Blue%20Futuristic%20IT%20Event%20Zoom%20Virtual%20Background.png',
      title: 'Indore Blockchain Days',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      date: '2024',
      color: 'text-blue-600',
    },
    {
      imageSrc: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/Add%20a%20heading_rIly6bE.png',
      title: 'Google cloud study jams',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      date: '2024',
      color: 'text-blue-600',
    },
  
  ];




  //team data

  export interface Member {
    photo: string;
    name: string;
    jobTitle: string;
    department: string;
    introduction: string;
    instagram: string;
    github: string;
    linkedin: string;
}

export const data: {
  [key: string]: {
      members: Array<Member>;
  };
} = {
  "2023-2024": {
      members: [
          {
              photo: ``,
              name: "Aryan ",
              jobTitle: "",
              department: "",
              introduction: "",
              instagram: "",
              github: "",
              linkedin: "",
          },
          {
              photo: ``,
              name: "Mihir",
              jobTitle: "",
              department: "",
              introduction: "",
              instagram: "",
              github: "",
              linkedin: "",
          },
          
      ],
  },
  "2022-2023": {
      members: [
          {
              photo: ``,
              name: "Mohit",
              jobTitle: "",
              department: "",
              introduction: "",
              instagram: "",
              github: "",
              linkedin: "",
          },
          {
              photo: ``,
              name: "simran",
              jobTitle: "",
              department: "",
              introduction: "",
              instagram: "",
              github: "",
              linkedin: "",
          },
        
      ],
  },
};

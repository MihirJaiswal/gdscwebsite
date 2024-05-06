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

  //FAQ section
  export const faqdata=[
    {
        question: 'What is Google Developer Student Club',
        answer: ' GDSC is a community of student developers who are passionate about Google technologies. It organize events, workshops and seminars to foster learning.'
    },
    {
         question: 'Who should join this club?',
         answer: ' College and university students are encouraged to join Google Developer Student Clubs.'
    },
    {
      question: 'Do I need prior coding experience for GDSC? ',
      answer: 'No, prior coding experience is not needed. GDSC is open to all, including beginners. '  
    },
    {
        question: 'What kind of events does GDSC organize?',
        answer: 'GDSC host a variety of events, including coding workshops, hackathons, seminars, and networking events.'
    }
]




  //team data

  export interface Member {
    photo: string;
    name: string;
    jobTitle: string;
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
              photo: `https://i.postimg.cc/0ydbjsKN/Professional-Pic-Aryan-Chachra.jpg`,
              name: "Aryan Chachra",
              jobTitle: "Lead",
              introduction: "Hi! I'm Aryan Chachra, a Flutter developer and the lead of the Google Developer Student Club at my college. I love building innovative apps and have a passion for aviation. When I'm not coding, I enjoy planespotting and keeping up with the latest in flight. Feel free to reach out—I’m always open to new ideas and collaborations!",
              instagram: "https://www.instagram.com/aryanchachra14/",
              github: "https://github.com/AryanChachra",
              linkedin: "https://www.linkedin.com/in/aryan-chachra-519927232/",
          },
          {
              photo: `https://i.postimg.cc/W167MzHL/1672583376862-Sourabh-Pawar-1.jpg`,
              name: "Sourabh Pawar",
              jobTitle: "Executive Member",
              introduction: "I am Sourabh Pawar, currently pursuing B.Tech in Computer Science and Information Technology. My passion lies in technology, particularly in the field of machine learning. As an intermediate level developer in this domain, I'm constantly exploring new avenues to enhance my skills and contribute meaningfully to the tech community.",
              instagram: "https://www.instagram.com/_sourabh_4896?igsh=Y3BnN3RwZ2RwcXI=",
              github: "https://github.com/Sourabh4896",
              linkedin: "https://www.linkedin.com/in/sourabh-pawar-02a18724b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          },
          {
              photo: `
              https://i.postimg.cc/SQ3qpvst/IMG-20230922-WA0012-Ambika-Mishra.jpg
              `,
              name: "Ambika Mishra ",
              jobTitle: "Executive Member",
              introduction: "Hello, I'm Ambika Mishra, currently in my second year of B.Tech in Computer Science and Engineering. Proficient in languages like C, C++, Java and Data Structure & Algorithm(DSA). I also have a keen interest in frontend development. As a data analysis enthusiast, I'm passionate about exploring insights and patterns within datasets",
              instagram: "https://instagram.com/mishra_am_27",
              github: "https://github.com/ambikagettech",
              linkedin: "https://www.linkedin.com/in/ambika-mishra-034169286",
          },
          {
              photo: `https://i.postimg.cc/7LKh1nV8/IMG-20240214-191714-Aakash-Benarjee.jpg`,
              name: "Akash Benarjee ",
              jobTitle: "Insider ",
              introduction: "Executive member  @Google DSC  || persuing bachelor's from CDGI || [C++ DSA] || Web development enthusiast ||",
              instagram: "https://www.instagram.com/aakash._.benarjee._?igsh=Y2lyaTZ3ajBneW5t",
              github: "https://github.com/AakashCpp",
              linkedin: "https://www.linkedin.com/in/aakash-benarjee-587049252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          },
          {
              photo: `https://i.postimg.cc/15Fgx69w/IMG-20231007-104505-Gunjan-Rathore.jpg`,
              name: "Gunjan Rathore",
              jobTitle: "Executive Member",
              introduction: "Enthusiastic BTech-CSE 2nd year currently honing my skills in Data Structures and Algorithms using C++.",
              instagram: "https://instagram.com/gunjanrathore0011?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
              github: "https://github.com/GunjanRathore0011",
              linkedin: "https://www.linkedin.com/in/gunjan-rathore-a00261252",
          }
          
      ],
  },
  "2022-2023": {
      members: [
          {
              photo: ``,
              name: "Mohit",
              jobTitle: "",
              introduction: "",
              instagram: "",
              github: "",
              linkedin: "",
          },
          {
              photo: ``,
              name: "simran",
              jobTitle: "",
              introduction: "",
              instagram: "",
              github: "",
              linkedin: "",
          },
        
      ],
  },
};

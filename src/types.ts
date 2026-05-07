export interface Service {
  id: string;
  name: string;
  description: string;
  price?: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
  isLocalGuide?: boolean;
  reviewCount?: number;
}

export const SERVICES: Service[] = [
  {
    id: 'haircut-women',
    name: "Women's Haircut & Styling",
    description: "Professional cuts tailored to your face shape, including wash and expert styling.",
    price: "$20 - $40+",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'haircut-men',
    name: "Men's Barber Services",
    description: "Sharp fades, tapers, and classic cuts. Susy is highly recommended for barber cuts.",
    price: "$20.00",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'hair-color',
    name: "Color & Highlights",
    description: "Full color, balayage, or highlights. Professional products that keep hair healthy.",
    price: "$80 - $140+",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'children-cut',
    name: "Children's Haircuts",
    description: "Patient and professional service for our youngest clients.",
    price: "$15 - $20",
    image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'blowouts',
    name: "Blowouts & Magic Magic",
    description: "Naomi works her magic with blowouts that leave hair looking amazing.",
    price: "$25+",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800"
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: "Eduardo Banda",
    rating: 5,
    date: "2 months ago",
    content: "I've been to Danna hair salon a couple of times now for haircuts. They have always done a great job leaving my hair exactly as I asked for. They are very attentive and respectful and accept walk-ins, so that's is definitely a plus.",
    isLocalGuide: true,
    reviewCount: 15
  },
  {
    id: '2',
    author: "Gricelda Gomez",
    rating: 5,
    date: "10 months ago",
    content: "I was seen by Susy and she did a great job. She was so welcoming and patient with me. She listened attentively to what I wanted and made sure I was happy with my haircut and hair color. I'm absolutely coming back to see her!",
    reviewCount: 10
  },
  {
    id: '3',
    author: "Hottmess1",
    rating: 5,
    date: "9 months ago",
    content: "I've been here twice and I will not go anywhere else... Yesi and Susie make me feel at home ..I suffer from cancer effects and they constantly check on me ..Yesi makes me laugh 😂..I absolutely love this place.. wonderful people...love my hair!!!",
    isLocalGuide: true,
    reviewCount: 28
  },
  {
    id: '4',
    author: "Karina Pascual",
    rating: 5,
    date: "a year ago",
    content: "Came in for a hair trim and Naomi worked her magic! She cut the perfect amount and gave me the most amazing blow out! My hair has never looked this good. Completely in love with it!! Highly recommend",
    reviewCount: 6
  },
  {
    id: '5',
    author: "ANGEL TORRES",
    rating: 5,
    date: "a year ago",
    content: "This is the only place that knows how to cut good hair in north Las Vegas they know how to take care of there customers and very welcoming I will for sure be coming here from now on. Ask for Susy!",
    isLocalGuide: true,
    reviewCount: 13
  }
];

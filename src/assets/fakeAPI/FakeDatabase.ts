import {
  bikeDataInterface,
  coverCaroselInterface,
  brandsInterface,
  showroomInterface,
  shopInterface,
  relativePicInterface,
} from "./interfaceFakeAPI";

const bikeData: bikeDataInterface[] = [
  {
    pictures: [
      "/images/products/Yamaha_Mio_1/1.jpg",
      "/images/products/Yamaha_Mio_1/2.jpg",
      "/images/products/Yamaha_Mio_1/3.jpg",
      "/images/products/Yamaha_Mio_1/4.jpg",
    ],
    brand: "Yamaha",
    version: "Mio i",
    year: 2021,
    mile: "18,000",
    price: "39,000",
    monthlyPayment: "12,000",
    downPayment: "80,000",
    cc: "125",
    isAvailable: "Available",
    type: "Scooter",
    tags: ["Yamaha", "Mio"],
  },
  {
    pictures: [
      "images/products/Yamaha_Mio_2/1.jpg",
      "images/products/Yamaha_Mio_2/2.jpg",
      "images/products/Yamaha_Mio_2/3.jpg",
    ],

    brand: "Yamaha",
    version: "Mio i",
    year: 2019,
    mile: "11,000",
    price: "37,000",
    monthlyPayment: "9,800",
    downPayment: "20,000",
    cc: "125",
    isAvailable: "Available",
    type: "Scooter",
    tags: ["Yamaha", "Mio"],
  },
  {
    pictures: [
      "images/products/Honda_Beat_1/1.jpg",
      "images/products/Honda_Beat_1/2.jpg",
      "images/products/Honda_Beat_1/3.jpg",
      "images/products/Honda_Beat_1/4.jpg",
    ],

    brand: "Honda",
    version: "Beat V2",
    year: 2020,
    mile: "34,000",
    price: "36,000",
    monthlyPayment: "13,800",
    downPayment: "90,000",
    cc: "125",
    isAvailable: "Available",
    type: "Scooter",
    tags: ["Honda", "Beat"],
  },
  {
    pictures: [
      "/images/products/Yamaha_Mio_Soul_1/1.jpg",
      "/images/products/Yamaha_Mio_Soul_1/2.jpg",
      "/images/products/Yamaha_Mio_Soul_1/3.jpg",
      "/images/products/Yamaha_Mio_Soul_1/4.jpg",
    ],

    brand: "Yamaha",
    version: "Mio Soul i",
    year: 2019,
    mile: "30,000",
    price: "37,000",
    monthlyPayment: "3,900",
    downPayment: "10,000",
    cc: "125",
    isAvailable: "Sold",
    type: "Scooter",
    tags: ["Yamaha", "Mio Soul i"],
  },
  {
    pictures: [
      "/images/products/Honda_Beat_2/1.jpg",
      "/images/products/Honda_Beat_2/2.jpg",
      "/images/products/Honda_Beat_2/3.jpg",
      "/images/products/Honda_Beat_2/4.jpg",
    ],

    brand: "Honda",
    version: "Beat V2",
    year: 2019,
    mile: "12,000",
    price: "37,000",
    monthlyPayment: "11,800",
    downPayment: "70,000",
    cc: "125",
    isAvailable: "Booked",
    type: "Scooter",
    tags: ["Honda", "Beat"],
  },
  {
    pictures: [
      "/images/products/Yamaha_Mio_3/1.jpg",
      "/images/products/Yamaha_Mio_3/2.jpg",
      "/images/products/Yamaha_Mio_3/3.jpg",
      "/images/products/Yamaha_Mio_3/4.jpg",
    ],

    brand: "Yamaha",
    version: "Mio i",
    year: 2020,
    mile: "13,000",
    price: "30,000",
    monthlyPayment: "6,800",
    downPayment: "25,000",
    cc: "125",
    isAvailable: "Available",
    type: "Scooter",
    tags: ["Yamaha", "Mio i"],
  },
  {
    pictures: [
      "/images/products/Nmax/1.jpg",
      "/images/products/Nmax/2.jpg",
      "/images/products/Nmax/3.jpg",
      "/images/products/Nmax/4.jpg",
      "/images/products/Nmax/5.jpg",
      "/images/products/Nmax/6.jpg",
    ],

    brand: "Yamaha",
    version: "NMAX V1",
    year: 2020,
    mile: "18,000",
    price: "74,000",
    monthlyPayment: "7,800",
    downPayment: "40,000",
    cc: "155",
    isAvailable: "Available",
    type: "Scooter",
    tags: ["Yamaha", "NMAX V1"],
  },
  {
    pictures: [
      "/images/products/Honda_Click_1/1.jpg",
      "/images/products/Honda_Click_1/2.jpg",
      "/images/products/Honda_Click_1/3.jpg",
      "/images/products/Honda_Click_1/4.jpg",
    ],
    brand: "Honda",
    version: "Click V2",
    year: 2021,
    mile: "18,000",
    price: "46,000",
    monthlyPayment: "12,000",
    downPayment: "80,000",
    cc: "125",
    isAvailable: "Available",
    type: "Scooter",
    tags: ["Honda", "Click V2"],
  },
  {
    pictures: [
      "/images/products/Honda_Click_2/1.jpg",
      "/images/products/Honda_Click_2/2.jpg",
      "/images/products/Honda_Click_2/3.jpg",
      "/images/products/Honda_Click_2/4.jpg",
    ],

    brand: "Honda",
    version: "Click V2",
    year: 2021,
    mile: "11,000",
    price: "47,000",
    monthlyPayment: "9,800",
    downPayment: "20,000",
    cc: "125",
    isAvailable: "Available",
    type: "Scooter",
    tags: ["Honda", "Click V2"],
  },
  {
    pictures: [
      "/images/products/Honda_Click_3/1.jpg",
      "/images/products/Honda_Click_3/2.jpg",
      "/images/products/Honda_Click_3/3.jpg",
      "/images/products/Honda_Click_3/4.jpg",
    ],

    brand: "Honda",
    version: "Click V2",
    year: 2021,
    mile: "8,000",
    price: "46,000",
    monthlyPayment: "13,800",
    downPayment: "90,000",
    cc: "125",
    isAvailable: "Available",
    type: "Scooter",
    tags: ["Honda", "Click V2"],
  },
  {
    pictures: [
      "/images/products/Yamaha_Mio_6/1.jpg",
      "/images/products/Yamaha_Mio_6/2.jpg",
      "/images/products/Yamaha_Mio_6/3.jpg",
      "/images/products/Yamaha_Mio_6/4.jpg",
    ],

    brand: "Yamaha",
    version: "Mio i",
    year: 2019,
    mile: "30,000",
    price: "38,000",
    monthlyPayment: "3,900",
    downPayment: "10,000",
    cc: "125",
    isAvailable: "Booked",
    type: "Scooter",
    tags: ["Yamaha", "Mio i"],
  },
  {
    pictures: [
      "/images/products/Yamaha_Mio_Soul_2/1.jpg",
      "/images/products/Yamaha_Mio_Soul_2/2.jpg",
      "/images/products/Yamaha_Mio_Soul_2/3.jpg",
      "/images/products/Yamaha_Mio_Soul_2/4.jpg",
    ],

    brand: "Yamaha",
    version: "Mio Soul",
    year: 2019,
    mile: "12,000",
    price: "34,000",
    monthlyPayment: "11,800",
    downPayment: "70,000",
    cc: "125",
    isAvailable: "Available",
    type: "Scooter",
    tags: ["Yamaha", "Mio Soul"],
  },
  {
    pictures: [
      "/images/products/Yamaha_Mio_Soul_1/1.jpg",
      "/images/products/Yamaha_Mio_Soul_1/2.jpg",
      "/images/products/Yamaha_Mio_Soul_1/3.jpg",
      "/images/products/Yamaha_Mio_Soul_1/4.jpg",
    ],

    brand: "Yamaha",
    version: "Mio Soul i",
    year: 2018,
    mile: "13,000",
    price: "28,000",
    monthlyPayment: "6,800",
    downPayment: "25,000",
    cc: "125",
    isAvailable: "Available",
    type: "Scooter",
    tags: ["Yamaha", "Mio Soul i"],
  },
  {
    pictures: [
      "/images/products/Yamaha_Mio_4/1.jpg",
      "/images/products/Yamaha_Mio_4/2.jpg",
      "/images/products/Yamaha_Mio_4/3.jpg",
    ],

    brand: "Yamaha",
    version: "Mio",
    year: 2018,
    mile: "18,000",
    price: "29,000",
    monthlyPayment: "7,800",
    downPayment: "40,000",
    cc: "125",
    isAvailable: "Available",
    type: "Scooter",
    tags: ["Yamaha", "Mio"],
  },
  {
    pictures: [
      "/images/products/Yamaha_Mio_5/1.jpg",
      "/images/products/Yamaha_Mio_5/2.jpg",
      "/images/products/Yamaha_Mio_5/3.jpg",
      "/images/products/Yamaha_Mio_5/4.jpg",
    ],
    brand: "Yamaha",
    version: "Mio",
    year: 2018,
    mile: "18,000",
    price: "27,000",
    monthlyPayment: "12,000",
    downPayment: "80,000",
    cc: "125",
    isAvailable: "Available",
    type: "Scooter",
    tags: ["BMW", "GSA", "touring"],
  },
  {
    pictures: [
      "/images/products/Yamaha_Mio_Soul_3/1.jpg",
      "/images/products/Yamaha_Mio_Soul_3/2.jpg",
      "/images/products/Yamaha_Mio_Soul_3/3.jpg",
    ],

    brand: "Yamaha",
    version: "Mio Soul",
    year: 2020,
    mile: "11,000",
    price: "27,000",
    monthlyPayment: "9,800",
    downPayment: "20,000",
    cc: "125",
    isAvailable: "Available",
    type: "Scooter",
    tags: ["Yamaha", "Mio Soul"],
  },
  
];

const coverCarosel: coverCaroselInterface[] = [
  {
    url: "/images/posters/1.jpg",
    tags: ["bigbike"],
  },
  {
    url: "/images/posters/2.jpg",
    tags: ["bigbike"],
  },
  {
    url: "/images/posters/3.webp",
    tags: ["bigbike"],
  },
  {
    url: "/images/posters/4.avif",
    tags: ["bigbike"],
  },
  {
    url: "/images/posters/5.jpg",
    tags: ["bigbike"],
  },
  {
    url: "/images/posters/6.jpg",
    tags: ["bigbike"],
  },
];

const brands: brandsInterface[] = [
  { url: "/images/brands/bmw.png", brandName: "BMW" },
  { url: "/images/brands/ducati.png", brandName: "Ducati" },
  { url: "/images/brands/honda.png", brandName: "Honda" },
  { url: "/images/brands/kawasaki.png", brandName: "Kawasaki" },
  { url: "/images/brands/suzuki.png", brandName: "Suzuki" },
  {
    url: "/images/brands/yamaha.png",
    brandName: "Yamaha",
  },
  {
    url: "/images/brands/ktm.png",
    brandName: "KTM",
  },
];

const showroom: showroomInterface[] = [
  {
    url: "/images/logo.jpg",
    showroomName: "Philip Moto Garage",
    since: "2020",
  },
];

const frontShop: shopInterface[] = [
  {
    url: "/images/shop/2.jpg",
    alt: "Philip Moto Garage",
    name: "Philip Moto Garage",
    phone: "0969 574 1682",
  },
  {
    url: "/images/shop/3.jpg",
    alt: "Philip Moto Garage",
    name: "Philip Moto Garage",
    phone: "0969 574 1682",
  },

];

const maintenanceShop: shopInterface[] = [
  {
    url: "/images/shop/maintenance/1.jpg",
    alt: "maintenance shop",
    name: "Chiang Mai Bigbike & Travel",
    phone: "063-194-2344",
  },
  {
    url: "/images/shop/maintenance/2.webp",
    alt: "maintenance shop",
    name: "Bangkok The Best Group BB",
    phone: "025-488-6841",
  },
  {
    url: "/images/shop/maintenance/3.jpg",
    alt: "maintenance shop",
    name: "maintenance shop",
    phone: "025-488-6841",
  },
  {
    url: "/images/shop/maintenance/4.jpg",
    alt: "maintenance shop",
    name: "Phuket Bike & Travel",
    phone: "046-248-6471",
  },
];

const relativePic: relativePicInterface[] = [
  {
    url: "/images/shop/relative/1.webp",
    alt: "group travel",
    name: "group travel",
  },
];

export {
  bikeData,
  coverCarosel,
  brands,
  showroom,
  frontShop,
  maintenanceShop,
  relativePic,
};

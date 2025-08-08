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
      "/src/assets/images/products/Yamaha_Mio 4810/1.jpg",
      "/src/assets/images/products/Yamaha_Mio 4810/2.jpg",
      "/src/assets/images/products/Yamaha_Mio 4810/3.jpg",
      "/src/assets/images/products/Yamaha_Mio 4810/4.jpg",
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
    tags: ["Yamaha", "Mio"],
  },
  {
    pictures: [
      "/src/assets/images/products/Yamaha Mio i 2019 yellow/photo_2025-08-08_10-39-29.jpg",
      "/src/assets/images/products/Yamaha Mio i 2019 yellow/photo_2025-08-08_10-39-30.jpg",
      "/src/assets/images/products/Yamaha Mio i 2019 yellow/photo_2025-08-08_10-39-31.jpg",
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
    tags: ["Yamaha", "Mio"],
  },
  {
    pictures: [
      "/src/assets/images/products/Honda Beat 2020/photo_2025-08-08_10-39-27.jpg",
      "/src/assets/images/products/Honda Beat 2020/photo_2025-08-08_10-39-26 (2).jpg",
      "/src/assets/images/products/Honda Beat 2020/photo_2025-08-08_10-39-28 (2).jpg",
      "/src/assets/images/products/Honda Beat 2020/photo_2025-08-08_10-39-28.jpg",
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
    tags: ["Honda", "Beat"],
  },
  {
    pictures: [
      "/src/assets/images/products/Yamaha Mio Soul 2018 453/photo_2025-08-08_11-28-41 (2).jpg",
      "/src/assets/images/products/Yamaha Mio Soul 2018 453/photo_2025-08-08_11-28-40.jpg",
      "/src/assets/images/products/Yamaha Mio Soul 2018 453/photo_2025-08-08_11-28-41 (3).jpg",
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
    tags: ["Yamaha", "Mio Soul i"],
  },
  {
    pictures: [
      "/src/assets/images/products/Honda Beat/photo_2025-08-08_10-39-23 (2).jpg",
      "/src/assets/images/products/Honda Beat/photo_2025-08-08_10-39-22.jpg",
      "/src/assets/images/products/Honda Beat/photo_2025-08-08_10-39-23.jpg",
      "/src/assets/images/products/Honda Beat/photo_2025-08-08_10-39-24.jpg",
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
    tags: ["Honda", "Beat"],
  },
  {
    pictures: [
      "/src/assets/images/products/Yamaha Mio 1303/photo_2025-08-08_10-39-20.jpg",
      "/src/assets/images/products/Yamaha Mio 1303/photo_2025-08-08_10-39-19.jpg",
      "/src/assets/images/products/Yamaha Mio 1303/photo_2025-08-08_10-39-21 (2).jpg",
      "/src/assets/images/products/Yamaha Mio 1303/photo_2025-08-08_10-39-21.jpg",
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
    tags: ["Yamaha", "Mio i"],
  },
  {
    pictures: [
      "/src/assets/images/products/Nmax/photo_2025-08-08_10-39-13.jpg",
      "/src/assets/images/products/Nmax/photo_2025-08-08_10-39-14.jpg",
      "/src/assets/images/products/Nmax/photo_2025-08-08_10-39-15 (2).jpg",
      "/src/assets/images/products/Nmax/photo_2025-08-08_10-39-15.jpg",
      "/src/assets/images/products/Nmax/photo_2025-08-08_10-39-16.jpg",
      "/src/assets/images/products/Nmax/photo_2025-08-08_10-39-17.jpg",
      "/src/assets/images/products/Nmax/photo_2025-08-08_10-39-18.jpg",
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
    tags: ["Yamaha", "NMAX V1"],
  },
  {
    pictures: [
      "/src/assets/images/products/Honda Click 904/photo_2025-08-08_10-39-11.jpg",
      "/src/assets/images/products/Honda Click 904/photo_2025-08-08_10-39-10.jpg",
      "/src/assets/images/products/Honda Click 904/photo_2025-08-08_10-39-12 (2).jpg",
      "/src/assets/images/products/Honda Click 904/photo_2025-08-08_10-39-12.jpg",
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
    tags: ["Honda", "Click V2"],
  },
  {
    pictures: [
      "/src/assets/images/products/Honda Click 369/photo_2025-08-08_10-39-08 (2).jpg",
      "/src/assets/images/products/Honda Click 369/photo_2025-08-08_10-39-06 (2).jpg",
      "/src/assets/images/products/Honda Click 369/photo_2025-08-08_10-39-08.jpg",
      "/src/assets/images/products/Honda Click 369/photo_2025-08-08_10-39-09.jpg",
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
    tags: ["Honda", "Click V2"],
  },
  {
    pictures: [
      "/src/assets/images/products/Honda Click v2 2021/photo_2025-08-08_10-39-05 (2).jpg",
      "/src/assets/images/products/Honda Click v2 2021/photo_2025-08-08_10-39-04.jpg",
      "/src/assets/images/products/Honda Click v2 2021/photo_2025-08-08_10-39-05.jpg",
      "/src/assets/images/products/Honda Click v2 2021/photo_2025-08-08_10-39-06.jpg",
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
    tags: ["Honda", "Click V2"],
  },
  {
    pictures: [
      "/src/assets/images/products/Yamaha Mio i 2019 yellow/photo_2025-08-08_10-39-29.jpg",
      "/src/assets/images/products/Yamaha Mio i 2019 yellow/photo_2025-08-08_10-39-30.jpg",
      "/src/assets/images/products/Yamaha Mio i 2019 yellow/photo_2025-08-08_10-39-31.jpg.jpg",
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
    tags: ["Yamaha", "Mio i"],
  },
  {
    pictures: [
      "/src/assets/images/products/Yamaha Mio Soul 62767/photo_2025-08-08_10-39-25 (2).jpg",
      "/src/assets/images/products/Yamaha Mio Soul 62767/photo_2025-08-08_10-39-24 (2).jpg",
      "/src/assets/images/products/Yamaha Mio Soul 62767/photo_2025-08-08_10-39-25.jpg",
      "/src/assets/images/products/Yamaha Mio Soul 62767/photo_2025-08-08_10-39-26.jpg",
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
    tags: ["Yamaha", "Mio Soul"],
  },
  {
    pictures: [
      "/src/assets/images/products/Yamaha Mio Soul 2018 453/photo_2025-08-08_11-28-41 (2).jpg",
      "/src/assets/images/products/Yamaha Mio Soul 2018 453/photo_2025-08-08_11-28-40.jpg",
      "/src/assets/images/products/Yamaha Mio Soul 2018 453/photo_2025-08-08_11-28-41 (3).jpg",
      "/src/assets/images/products/Yamaha Mio Soul 2018 453/photo_2025-08-08_11-28-41.jpg",
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
    tags: ["Yamaha", "Mio Soul i"],
  },
  {
    pictures: [
      "/src/assets/images/products/Yamaha Mio Orange/photo_2025-08-08_11-24-52 (2).jpg",
      "/src/assets/images/products/Yamaha Mio Orange/photo_2025-08-08_11-24-52.jpg",
      "/src/assets/images/products/Yamaha Mio Orange/photo_2025-08-08_11-24-53.jpg",
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
    tags: ["Yamaha", "Mio"],
  },
  {
    pictures: [
      "/src/assets/images/products/Yamaha Mio 2018 803/photo_2025-08-08_11-24-49 (2).jpg",
      "/src/assets/images/products/Yamaha Mio 2018 803/photo_2025-08-08_11-24-49.jpg",
      "/src/assets/images/products/Yamaha Mio 2018 803/photo_2025-08-08_11-24-50.jpg",
      "/src/assets/images/products/Yamaha Mio 2018 803/photo_2025-08-08_11-24-51.jpg",
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
    tags: ["BMW", "GSA", "touring"],
  },
  {
    pictures: [
      "/src/assets/images/products/Yamaha Mio Soul 2020 green/photo_2025-08-08_11-24-48 (2).jpg",
      "/src/assets/images/products/Yamaha Mio Soul 2020 green/photo_2025-08-08_11-24-48 (3).jpg",
      "/src/assets/images/products/Yamaha Mio Soul 2020 green/photo_2025-08-08_11-24-48.jpg",
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
    tags: ["Yamaha", "Mio Soul"],
  },
  
];

const coverCarosel: coverCaroselInterface[] = [
  {
    url: "/src/assets/images/posters/motor10.jpg",
    tags: ["bigbike"],
  },
  {
    url: "src/assets/images/posters/motor9.jpg",
    tags: ["bigbike"],
  },
  {
    url: "src/assets/images/posters/motor7.webp",
    tags: ["bigbike"],
  },
  {
    url: "src/assets/images/posters/motor6.avif",
    tags: ["bigbike"],
  },
  {
    url: "src/assets/images/posters/motor3.jpg",
    tags: ["bigbike"],
  },
  {
    url: "src/assets/images/posters/motor4.avif",
    tags: ["bigbike"],
  },
];

const brands: brandsInterface[] = [
  { url: "src/assets/images/brands/bmw_PNG99531.png", brandName: "BMW" },
  { url: "src/assets/images/brands/ducati.png", brandName: "Ducati" },
  { url: "src/assets/images/brands/honda.png", brandName: "Honda" },
  { url: "src/assets/images/brands/kawasaki.png", brandName: "Kawasaki" },
  { url: "src/assets/images/brands/suzuki.png", brandName: "Suzuki" },
  {
    url: "src/assets/images/brands/yamaha.png",
    brandName: "Yamaha",
  },
  {
    url: "src/assets/images/brands/ktm.png",
    brandName: "KTM",
  },
];

const showroom: showroomInterface[] = [
  {
    url: "src/assets/images/logo.jpg",
    showroomName: "Philip Moto Garage",
    since: "2020",
  },
];

const frontShop: shopInterface[] = [
  {
    url: "src/assets/images/shop/photo_2025-08-08_12-35-02.jpg",
    alt: "Philip Moto Garage",
    name: "Philip Moto Garage",
    phone: "0969 574 1682",
  },
  {
    url: "src/assets/images/shop/photo_2025-08-08_12-35-03.jpg",
    alt: "Philip Moto Garage",
    name: "Philip Moto Garage",
    phone: "0969 574 1682",
  },

];

const maintenanceShop: shopInterface[] = [
  {
    url: "src/assets/images/shop/maintenance/188-Motorcycle-Maintenance-Repair.jpg",
    alt: "maintenance shop",
    name: "Chiang Mai Bigbike & Travel",
    phone: "063-194-2344",
  },
  {
    url: "src/assets/images/shop/maintenance/istockphoto-1318840986-170667a.webp",
    alt: "maintenance shop",
    name: "Bangkok The Best Group BB",
    phone: "025-488-6841",
  },
  {
    url: "src/assets/images/shop/maintenance/POWR SCC 03648_v2.jpg",
    alt: "maintenance shop",
    name: "maintenance shop",
    phone: "025-488-6841",
  },
  {
    url: "src/assets/images/shop/maintenance/Service_Full_2_875_v5-e1625796185711.jpg",
    alt: "maintenance shop",
    name: "Phuket Bike & Travel",
    phone: "046-248-6471",
  },
];

const relativePic: relativePicInterface[] = [
  {
    url: "src/assets/images/shop/relative/groupTravel.webp",
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

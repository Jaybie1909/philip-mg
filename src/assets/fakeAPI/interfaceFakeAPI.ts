interface bikeDataInterface {
  pictures: string[];
  brand: string;
  version: string;
  year: number;
  mile: string;
  price: string;
  monthlyPayment: string;
  downPayment: string;
  cc: string;
  isAvailable: "Available" | "Booked" | "Sold";
  tags: string[];
}

interface relatedBikeInterface {
  url: string;
}

interface coverCaroselInterface {
  url: string;
  tags: string[];
}

interface brandsInterface {
  url: string;
  brandName: string;
}

interface showroomInterface {
  url: string;
  showroomName: string;
  since: string;
}

interface shopInterface {
  url: string;
  name: string;
  phone: string;
  alt: string;
}

interface relativePicInterface {
  url: string;
  alt: string;
  name: string;
}

interface data {
  bikeData: bikeDataInterface[];
  coverCarosel: coverCaroselInterface[];
  brands: brandsInterface[];
  showroom: showroomInterface[];
  frontShop: shopInterface[];
  maintenanceShop: shopInterface[];
  relativePic: relativePicInterface[];
}

interface FakeAPIRespondInterface {
  data: data;
  status: number;
}

export type {
  bikeDataInterface,
  relatedBikeInterface,
  coverCaroselInterface,
  brandsInterface,
  showroomInterface,
  shopInterface,
  relativePicInterface,
  data,
  FakeAPIRespondInterface,
};

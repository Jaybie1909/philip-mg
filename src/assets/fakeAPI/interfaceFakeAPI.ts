interface bikeDataInterface {
  url1: string;
  url2: string;
  url3: string;
  url4: string;
  url5: string;
  url6: string;
  url7: string;
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
  sine: string;
}

interface shopInterface {
  url: string;
  name: string;
  alt: string;
}

interface relativePicInterface {
  url: string;
  alt: string;
  name: string;
}

export type {
  bikeDataInterface,
  relatedBikeInterface,
  coverCaroselInterface,
  brandsInterface,
  showroomInterface,
  shopInterface,
  relativePicInterface,
};

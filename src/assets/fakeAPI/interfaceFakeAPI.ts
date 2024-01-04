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
  avalible: "Avalible" | "Booked" | "Sold";
}

interface relatedBikeInterface {
  url: string;
}

interface coverCaroselInterface {
  url: string;
  tags: string[];
}

export type { bikeDataInterface, relatedBikeInterface, coverCaroselInterface };

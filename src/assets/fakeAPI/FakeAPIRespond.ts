import {
  bikeData,
  coverCarosel,
  brands,
  showroom,
  frontShop,
  maintenanceShop,
  relativePic,
} from "./FakeDatabase";

import { FakeAPIRespondInterface } from "./interfaceFakeAPI";

export const FakeAPIRespond: FakeAPIRespondInterface = {
  data: {
    bikeData,
    coverCarosel,
    brands,
    showroom,
    frontShop,
    maintenanceShop,
    relativePic,
  },
  status: 200,
};

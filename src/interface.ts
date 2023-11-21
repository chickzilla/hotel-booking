export interface HotelItem {
  id: string;
  name: string;
  picture: string;
  tel: string;
  address: string;
  provice: string;
  postalcode: string;
  pictureUrl: string;
}

export interface HotelJson {
  count: number;
  data: HotelItem[];
}

export interface HotelCatalogProps {
  HotelJson: HotelJson;
}

export interface BookingItem {
  _id: string;
  hotel: {
    name: string;
  };
  user: {
    name: string;
  };
  bookingDate: string;
  checkoutDate: string;
}

export interface BookingJson {
  count: number;
  data: BookingItem[];
}

export interface Accommodation {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
}

export interface AccommodationMockData extends Accommodation {
  unavailableDates: {
    start: string;
    end: string;
  }[];
}

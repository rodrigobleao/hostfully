import { Accommodation } from '@/types';
import { populateAccommodationsFromMock } from '@/utils/mock';
import { create } from 'zustand';

interface AccommodationStore {
  accommodations: Accommodation[];
  createAccommodation: (accommodation: Accommodation) => void;
  getAccommodation: (id: string) => Accommodation | undefined;
  removeAccommodation: (id: string) => void;
  updateAccommodation: (id: string, newDetails: Partial<Accommodation>) => void;
}

const accommodationStore = create<AccommodationStore>((set, get) => ({
  accommodations: populateAccommodationsFromMock(),

  createAccommodation: (accommodation: Accommodation) =>
    set((state) => ({
      accommodations: [...state.accommodations, accommodation],
    })),

  removeAccommodation: (id: string) =>
    set((state) => ({
      accommodations: state.accommodations.filter(
        (accommodation) => accommodation.id !== id
      ),
    })),

  updateAccommodation: (id: string, newDetails: Partial<Accommodation>) =>
    set((state) => ({
      accommodations: state.accommodations.map((accommodation) =>
        accommodation.id === id
          ? { ...accommodation, ...newDetails }
          : accommodation
      ),
    })),

  getAccommodation: (id: string) =>
    get().accommodations.find((accommodation) => accommodation.id === id),
}));

export default accommodationStore;

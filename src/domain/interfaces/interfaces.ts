export interface LoginFormProps {
  onSubmit: (formData: { username: string; password: string }) => void;
}

export interface Country {
  id: number;
  name: string;
  description: string;
  stateCapital: string;
  surface: number;
  population: number;
  languages: [string];
  timeZone: string;
  currency: string;
  currencyCode: string;
  currencySymbol: string;
  isoCode: string;
  internetDomain: string;
  phonePrefix: string;
  radioPrefix: string;
  aircraftPrefix: string;
  subRegion: string;
  region: string;
  borders: [string];
  flags: [string];
}

export interface Department {
  id: number;
  name: string;
  description: string;
  cityCapitalId: number;
  municipalities: number;
  surface: number;
  population: number;
  phonePrefix: string;
  countryId: number;
  cityCapital: null;
  country: null;
  cities: null;
  regionId: 3;
  region: null;
}

export interface City {
  id: number;
  name: string;
  description: string;
  surface: null;
  population: null;
  postalCode: null;
  departmentId: number;
  department: null;
  touristAttractions: null;
  indigenousReservations: null;
  airports: null;
  radios: null;
}

export interface Region {
  id: number;
  name: string;
  description: string;
  departments: null;
}

export interface Presidents {
  id: number;
  image: string;
  name: string;
  lastName: string;
  startPeriodDate: string;
  politicalParty: string;
  description: string;
  cityId: number;
  city: null;
}

export interface State {
  country?: Country[];
  department?: Department[];
  city?: City[];
  region?: Region[];
  presidents?: Presidents[];
  isLoading: boolean;
}

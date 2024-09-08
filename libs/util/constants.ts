import { LocationInfo } from './types'

export const initialViewState = {
  latitude: 40.7128,
  longitude: -74.006,
  zoom: 11.5,
}

export const majorCitiesLocationInfo: LocationInfo[] = [
  {
    placeName: 'New York, New York, United States',
    latLng: [40.7128, -74.006],
  },
  {
    placeName: 'San Francisco, California, United States',
    latLng: [37.7749, -122.4194],
  },
  {
    placeName: 'Delhi, National Capital Territory, India',
    latLng: [28.7041, 77.1025],
  },
  {
    placeName: 'London, Greater London, England, United Kingdom',
    latLng: [51.5074, -0.1278],
  },
  {
    placeName: 'Paris, France',
    latLng: [48.8566, 2.3522],
  },
  {
    placeName: 'Berlin, Germany',
    latLng: [52.52, 13.405],
  },
  {
    placeName: 'Sydney, New South Wales, Australia',
    latLng: [-33.8688, 151.2093],
  },
  {
    placeName: 'Rio de Janeiro, Brazil',
    latLng: [-22.9068, -43.1729],
  },
  {
    placeName: 'Cape Town, Western Cape, South Africa',
    latLng: [-33.9249, 18.4241],
  },
  {
    placeName: 'Moscow, Russia',
    latLng: [55.7558, 37.6176],
  },
  {
    placeName: 'Beijing, China',
    latLng: [39.9042, 116.4074],
  },
]

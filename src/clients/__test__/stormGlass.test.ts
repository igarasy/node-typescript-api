import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormGlassWeather3HoursFixture from '@test/fixtures/stormglass_weather_3_hours.json'
import stormGlassNormalized3HoursFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json'

jest.mock('axios');

describe('StormGlass client', () => {
  //this mockedAxios will allow us to mock axios and add the types of jest mock in axios
  const mockedAxios = axios as jest.Mocked<typeof axios>
  it('should return the normalized forecast from the StormGlass Service', async () => {
    const lat = -33.792726;
    const lng = 151.289824;

    mockedAxios.get.mockResolvedValue({data: stormGlassWeather3HoursFixture})

    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual(stormGlassNormalized3HoursFixture);
  });
});

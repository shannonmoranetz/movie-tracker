import { fetchData } from './api';

describe('fetchData', () => {
  const mockURL = 'www.website.com';
  const mockData = ['data'];
  beforeEach(() => {
    window.fetch = jest.fn(() => {
      return Promise.resolve({
        ok: true,
        json: jest.fn(() => mockData)
      });
    });
  });

  it('should call fetch with the correct parameters', () => {
    const mockOptions = {
      method: 'POST',
      body: JSON.stringify('whatever'),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetchData(mockURL, mockOptions);
    expect(window.fetch).toHaveBeenCalledWith(mockURL, mockOptions);
  });

  it('should return data when response is ok', async () => {
    const result = await fetchData(mockURL);
    expect(result).toEqual(mockData);
  });

  it('should throw an error when response is not ok', () => {
    window.fetch = jest.fn(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'Error',
        status: '500'
      });
    });
    const expectedError = Error('Error - Status 500');
    expect(fetchData(mockURL)).rejects.toEqual(expectedError);
  });
});
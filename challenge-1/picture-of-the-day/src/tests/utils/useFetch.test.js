import { renderHook } from '@testing-library/react-hooks';
import useFetch from '../../utils/hooks/useFetch';
import pictureMock from '../../utils/mocks/pictureOftheDay';

describe('useFetch', () => {
  test('should return data after fetch', async () => {
    // mock service
    const service = jest.fn(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(pictureMock);
        }, 50);
      });
    });

    // execute
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(service, '', { current: true }, [])
    );
    await waitForNextUpdate();

    // asert
    expect(result.current).toStrictEqual({
      loading: false,
      data: pictureMock,
      error: null,
    });
  });

  test('should not return data after fetch', async () => {
    // mock service
    const service = jest.fn(() => {
      return new Promise((reject) => {
        setTimeout(() => {
          reject(new Error('ups error'));
        }, 50);
      });
    });

    // execute
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(service, '', { current: true }, [])
    );
    await waitForNextUpdate();

    // asert
    expect(result.current).toStrictEqual({
      loading: false,
      data: new Error('ups error'),
      error: null,
    });
  });
});

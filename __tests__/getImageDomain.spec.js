import { getImageDomain } from '../function/getImageDomain';

describe('getImageDomain', () => {
  it('should select domain based on skuId if provided', () => {
    expect(getImageDomain(1)).toBe('img11.360buyimg.com');
  });

  // it('should select a random domain based on Math.random if skuId not available', () => {
  //   const spy = jest.spyOn(Math, 'random').mockImplementation(() => 0.9);

  //   expect(getImageDomain()).toBe('img14.360buyimg.com');
  //   expect(spy).toHaveBeenCalled();

  //   spy.mockRestore();
  // });
});

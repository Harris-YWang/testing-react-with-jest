import { forEach } from '../function/forEach';

// describe('forEach', () => {
//   it('should call callback with each item', () => {
//     const callHistory = [];
//     const specialCallback = (...args) => callHistory.push(args);
//     forEach([1, 2], specialCallback);

//     expect(callHistory.length).toBe(2);
//     expect(callHistory[0][0]).toBe(1);
//     expect(callHistory[1][0]).toBe(2);
//   });
// });

describe("forEach", () => {
  it("should call callback with each item", () => {
    const mockFn = jest.fn();
    forEach([1, 2], mockFn);

    expect(mockFn.mock.calls.length).toBe(2);
    expect(mockFn.mock.calls[0][0]).toBe(1);
    expect(mockFn.mock.calls[1][0]).toBe(2);
  });
});
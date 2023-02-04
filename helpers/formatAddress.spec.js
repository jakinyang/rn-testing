import { formatAddress } from "./formatAddress";

describe('formatAddress', () => {
  it("returns the formatted address", () => {
    const addressObject = {
      street1: "123 Main Street",
      street2: "Apartment 456",
      city: "Atlanta",
      state: "GA",
      zip: "55555",
    }

    const result = formatAddress(addressObject);
    const expected = "123 Main Street\nApartment 456\nAtlanta, GA 55555"
    expect(result).toEqual(expected);
  })
})
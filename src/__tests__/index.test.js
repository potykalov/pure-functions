import getStatusOfHealth from "../index.js";

describe("getStatusOfHealth", () => {
  it('returns "healthy" when health is greater than 50', () => {
    const expected = "healthy";

    const received = getStatusOfHealth({ health: 51 });

    expect(received).toBe(expected);
  });

  it('returns "wounded" when health is 50', () => {
    const expected = "wounded";

    const received = getStatusOfHealth({ health: 50 });

    expect(received).toBe(expected);
  });

  it('returns "wounded" when health is 15', () => {
    const expected = "wounded";

    const received = getStatusOfHealth({ health: 15 });

    expect(received).toBe(expected);
  });

  it('returns "critical" when health  is less then 15', () => {
    const expected = "critical";

    const received = getStatusOfHealth({ health: 14 });

    expect(received).toBe(expected);
  });
});

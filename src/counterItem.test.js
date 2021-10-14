import counter from './counterItem';

describe('Correct count of recipes in the Main Page', () => {
  test('None recipes in the Main Page', () => {
    const result = counter();
    expect(result).toBeNaN();
  });
  test('1 recipe in the Main Page', () => {
    const result = counter(0);
    expect(result).toBe(1);
  });
  test('2 recipes in the Main Page', () => {
    let result = counter();
    result = counter(0);
    result = counter(1);
    expect(result).toBe(2);
  });
  test('7 recipes in the Main Page', () => {
    let result;
    for (let i = 0; i < 7; i += 1) {
      result = counter(i);
    }
    expect(result).toBe(7);
  });
  test('50 recipes in the Main Page', () => {
    let result;
    for (let i = 0; i < 50; i += 1) {
      result = counter(i);
    }
    expect(result).toBe(50);
  });
  test('70 recipes in the Main Page', () => {
    const result = counter(69);
    expect(result).toBe(70);
  });
});

describe('Uncorrect count of recipes in the Main Page', () => {
  test('1 recipe in the Main Page', () => {
    const result = counter();
    expect(result).not.toBe(1);
  });
  test('4 recipe in the Main Page', () => {
    const result = counter(16);
    expect(result).not.toBe(4);
  });
  test('80 recipe in the Main Page', () => {
    const result = counter(34);
    expect(result).not.toBe(80);
  });
});

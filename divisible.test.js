expect.extend({
    async toBeDivisibleByExternalValue(received) {
    //   const externalValue = await getExternalValueFromRemoteSource();
        const externalValue = 10;
      const pass = received % externalValue == 0;
      if (pass) {
        return {
          message: () =>
            `expected ${received} not to be divisible by ${externalValue}`,
          pass: true,
        };
      } else {
        return {
          message: () =>
            `expected ${received} to be divisible by ${externalValue}`,
          pass: false,
        };
      }
    },
  });
  
  test('is divisible by external value', async () => {
    await expect(100).toBeDivisibleByExternalValue();
    await expect(101).not.toBeDivisibleByExternalValue();
  });
test('null', () => {
    const n = 0;
    // expect(n).toBeNull();
    // expect(n).toBeDefined();
    // expect(n).not.toBeUndefined();
    // expect(n).not.toBeTruthy();
    // expect(n).toBeFalsy();
        expect(n).toBeDefined();
        expect(n).not.toBeNull();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
  });
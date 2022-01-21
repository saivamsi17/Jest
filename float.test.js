test('adding floating numbers', ()=>{
    const sum = 0.1+0.2;

    // expect(sum).toBe(0.8);
    // expect(sum).toEqual(0.3);
    expect(sum).toBeCloseTo(0.3);
});
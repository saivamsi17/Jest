function fetchData(){
    return new Promise((res) =>{
        setTimeout(() =>{
            res('peanut butter')
        },100)
    })
}


function fetchDatas(){
    return new Promise((res,rej) =>{
        setTimeout(() =>{
            rej('error')
        },100)
    })
}


test('the data is peanut butter', () => {
    return fetchData().then(data => {
      expect(data).toBe('peanut butter');
    });
  });


  test('the fetch fails with an error', () => {
    expect.assertions(1);
    return fetchDatas().catch(e => expect(e).toMatch('error'));
  });

  test('the data is peanut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter');
  });

  test('the fetch fails with an error', () => {
    return expect(fetchDatas()).rejects.toMatch('error');
  });
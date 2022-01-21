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


test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
  });
  
  test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      await fetchData()
      .then(data =>{
          expect(data).toBe('peanut butter')
     })
    } catch (e) {
      expect(e).toMatch('error');
    }
  });


  test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
  });
  
  test('the fetch fails with an error', async () => {
    await expect(fetchDatas()).rejects.toMatch('error');
  });
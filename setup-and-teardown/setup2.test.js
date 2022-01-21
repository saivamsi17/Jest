let cities = [];

function initializeCityDatabase(){
    return new Promise((req,res)=>{
        setTimeout(()=>{
            cities.push('Vienna');
            cities.push('San Juan');
            req();
        },100)
    })
}

function clearCityDatabase(){
    return new Promise((req,res)=>{
        setTimeout(()=>{
            cities = [];
            req();
        },100)
    })
}

function isCity(name){
    return cities.includes(name);
}

beforeAll(() => {
    return initializeCityDatabase();
  });
  
  afterAll(() => {
    return clearCityDatabase();
  });
  
  test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
  });
  
  test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
  });

  test('city length',() =>{
      expect(cities.length).toBe(2);
  });
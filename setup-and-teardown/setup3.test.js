let cities = [];
let cities2 = [];

function initializeCityDatabase(){
    return new Promise((req, res)=>{
        setTimeout(()=>{
            cities.push({name : "Vienna"});
            cities.push({name : "San Juan"});
            req();
        },100)
    })
};

function initializeFoodDatabase(){
    return new Promise((req, res)=>{
        setTimeout(()=>{
            cities2.push({name : "Vienna", foods : "Wiener Schnitzel" });
            cities2.push({name : "San Juan", foods : "Mofongo" })
            req();
        })
    })
};

function isCity(name){
    return cities.map(city => city.name).includes(name)
};

function isValidCityFoodPair(name,foods){
    return cities2.map(city => city.name).includes(name)
}



beforeEach(() => {
    return initializeCityDatabase();
  });
  
  test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
  });
  
  test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
  });
  
  describe('matching cities to foods', () => {
    // Applies only to tests in this describe block
    beforeEach(() => {
      return initializeFoodDatabase();
    });
  
    test('Vienna <3 veal', () => {
      expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
    });
  
    test('San Juan <3 plantains', () => {
      expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
    });
  });
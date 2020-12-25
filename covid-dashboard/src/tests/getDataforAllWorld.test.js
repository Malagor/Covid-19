import { getDataforAllWorld } from '../modules/mainApp/processingDataForTable';

const data = [
  {
    'updated': 1608742313024,
    'country': 'Afghanistan',
    'countryInfo': {
      '_id': 4,
      'iso2': 'AF',
      'iso3': 'AFG',
      'lat': 33,
      'long': 65,
      'flag': 'https://disease.sh/assets/img/flags/af.png',
    },
    'cases': 50190,
    'todayCases': 268,
    'deaths': 2096,
    'todayDeaths': 21,
    'recovered': 39585,
    'todayRecovered': 116,
    'active': 9331,
    'critical': 93,
    'casesPerOneMillion': 1305,
    'deathsPerOneMillion': 54,
    'tests': 186535,
    'testsPerOneMillion': 4742,
    'population': 39340815,
    'continent': 'Asia',
    'oneCasePerPeople': 766,
    'oneDeathPerPeople': 18505,
    'oneTestPerPeople': 211,
    'activePerOneMillion': 237.18,
    'recoveredPerOneMillion': 1014.21,
    'criticalPerOneMillion': 2.36,
    'casesToday': 177,
    'deathsToday': 14,
    'recoveredToday': 77,
    'casesPer100k': 127.6,
    'deathsPer100k': 5.3,
    'recoveredPer100k': 100.6,
    'casesTodayPer100k': 0.4,
    'deathsTodayPer100k': 0,
    'recoveredTodayPer100k': 0.2,
    'timeData': {
      'cases': [
        [
          '12/21/20',
          50013,
        ],
        [
          '12/22/20',
          50190,
        ],
      ],
      'deaths': [
        [
          '12/21/20',
          2082,
        ],
        [
          '12/22/20',
          2096,
        ],
      ],
      'recovered': [
        [
          '12/21/20',
          39508,
        ],
        [
          '12/22/20',
          39585,
        ],
      ],
    },
  },
  {
    'updated': 1608742313022,
    'country': 'Albania',
    'countryInfo': {
      '_id': 8,
      'iso2': 'AL',
      'iso3': 'ALB',
      'lat': 41,
      'long': 20,
      'flag': 'https://disease.sh/assets/img/flags/al.png',
    },
    'cases': 53814,
    'todayCases': 503,
    'deaths': 1111,
    'todayDeaths': 6,
    'recovered': 29249,
    'todayRecovered': 550,
    'active': 23401,
    'critical': 39,
    'casesPerOneMillion': 18884,
    'deathsPerOneMillion': 388,
    'tests': 240854,
    'testsPerOneMillion': 83738,
    'population': 2876290,
    'continent': 'Europe',
    'oneCasePerPeople': 53,
    'oneDeathPerPeople': 2575,
    'oneTestPerPeople': 12,
    'activePerOneMillion': 8135.83,
    'recoveredPerOneMillion': 10360.22,
    'criticalPerOneMillion': 13.56,
    'casesToday': 389,
    'deathsToday': 13,
    'recoveredToday': 497,
    'casesPer100k': 1871,
    'deathsPer100k': 38.6,
    'recoveredPer100k': 1016.9,
    'casesTodayPer100k': 13.5,
    'deathsTodayPer100k': 0.5,
    'recoveredTodayPer100k': 17.3,
    'timeData': {
      'cases': [
        [
          '12/21/20',
          53425,
        ],
        [
          '12/22/20',
          53814,
        ],
      ],
      'deaths': [
        [
          '12/21/20',
          1098,
        ],
        [
          '12/22/20',
          1111,
        ],
      ],
      'recovered': [
        [
          '12/21/20',
          28752,
        ],
        [
          '12/22/20',
          29249,
        ],
      ],
    },
  },
  {
    'updated': 1608742313003,
    'country': 'Algeria',
    'countryInfo': {
      '_id': 12,
      'iso2': 'DZ',
      'iso3': 'DZA',
      'lat': 28,
      'long': 3,
      'flag': 'https://disease.sh/assets/img/flags/dz.png',
    },
    'cases': 96069,
    'todayCases': 0,
    'deaths': 2687,
    'todayDeaths': 0,
    'recovered': 64020,
    'todayRecovered': 0,
    'active': 29362,
    'critical': 42,
    'casesPerOneMillion': 2172,
    'deathsPerOneMillion': 61,
    'tests': 0,
    'testsPerOneMillion': 0,
    'population': 44225030,
    'continent': 'Africa',
    'oneCasePerPeople': 460,
    'oneDeathPerPeople': 16459,
    'oneTestPerPeople': 0,
    'activePerOneMillion': 663.92,
    'recoveredPerOneMillion': 1447.6,
    'criticalPerOneMillion': 0.95,
    'casesToday': 410,
    'deathsToday': 12,
    'recoveredToday': 376,
    'casesPer100k': 217.2,
    'deathsPer100k': 6.1,
    'recoveredPer100k': 144.8,
    'casesTodayPer100k': 0.9,
    'deathsTodayPer100k': 0,
    'recoveredTodayPer100k': 0.9,
    'timeData': {
      'cases': [
        [
          '12/21/20',
          95659,
        ],
        [
          '12/22/20',
          96069,
        ],
      ],
      'deaths': [
        [
          '12/21/20',
          2675,
        ],
        [
          '12/22/20',
          2687,
        ],
      ],
      'recovered': [
        [
          '12/21/20',
          63644,
        ],
        [
          '12/22/20',
          64020,
        ],
      ],
    },
  },
  {
    'updated': 1608742313387,
    'country': 'Andorra',
    'countryInfo': {
      '_id': 20,
      'iso2': 'AD',
      'iso3': 'AND',
      'lat': 42.5,
      'long': 1.6,
      'flag': 'https://disease.sh/assets/img/flags/ad.png',
    },
    'cases': 7633,
    'todayCases': 36,
    'deaths': 82,
    'todayDeaths': 0,
    'recovered': 7073,
    'todayRecovered': 33,
    'active': 481,
    'critical': 17,
    'casesPerOneMillion': 99180,
    'deathsPerOneMillion': 1060,
    'tests': 180088,
    'testsPerOneMillion': 2329005,
    'population': 77324,
    'continent': 'Europe',
    'oneCasePerPeople': 10,
    'oneDeathPerPeople': 943,
    'oneTestPerPeople': 0,
    'activePerOneMillion': 6220.58,
    'recoveredPerOneMillion': 91899.02,
    'criticalPerOneMillion': 219.85,
    'casesToday': 31,
    'deathsToday': 1,
    'recoveredToday': 45,
    'casesPer100k': 9871.5,
    'deathsPer100k': 106,
    'recoveredPer100k': 9147.2,
    'casesTodayPer100k': 40.1,
    'deathsTodayPer100k': 1.3,
    'recoveredTodayPer100k': 58.2,
    'timeData': {
      'cases': [
        [
          '12/21/20',
          7602,
        ],
        [
          '12/22/20',
          7633,
        ],
      ],
      'deaths': [
        [
          '12/21/20',
          81,
        ],
        [
          '12/22/20',
          82,
        ],
      ],
      'recovered': [
        [
          '12/21/20',
          7028,
        ],
        [
          '12/22/20',
          7073,
        ],
      ],
    },
  },
];

test('GetDataforAllWorld should return number of cases per All population', () => {
  expect(getDataforAllWorld(data, 'casesTodayPer100k', 'recoveredTodayPer100k', 'deathsTodayPer100k').deaths).toBe(1.8);
  expect(getDataforAllWorld(data, 'casesTodayPer100k', 'recoveredTodayPer100k', 'deathsTodayPer100k').recovered).toBe(76.6);
  expect(getDataforAllWorld(data, 'casesTodayPer100k', 'recoveredTodayPer100k', 'deathsTodayPer100k').cases).toBe(54.9);
});



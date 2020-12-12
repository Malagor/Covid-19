export default function Queries() {

  /**
   * @param day :string === 'all' || :number
   */
  function allWorldPerPeriod(day = 'all') {
    return `https://disease.sh/v3/covid-19/historical/all?lastdays=${day}`;
  }


  /**
   * @return url :string
   */
  function allWorldDisease() {
    return 'https://disease.sh/v3/covid-19/all';
  }

  /**
   *
   * @param country: string
   * @param day :string === 'all || :number
   *
   * @return url :string
   */
  function countryDataPerPeriod(country, day = 'all') {
    if (country) {
      return `https://disease.sh/v3/covid-19/historical/${country}?lastdays=${day}`;
    }

    return null;
  }

  function getPopulation() {
    return 'https://restcountries.eu/rest/v2/all?fields=name;population;flag';
  }


  return {
    getPopulation,
    countryDataPerPeriod,
    allWorldPerPeriod,
    allWorldDisease,
  };
}
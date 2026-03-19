import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      // Fetch both APIs
      const [countriesResponse, phoneCodesResponse] = await Promise.all([
        fetch('https://restcountries.com/v3.1/all?fields=name,cca2,flags,region,population'),
        fetch('https://restcountries.com/v3.1/all?fields=cca2,idd')
      ]);

      const countriesData = await countriesResponse.json();
      const phoneCodesData = await phoneCodesResponse.json();

      // Simple join on cca2
      const joined = countriesData.map(country => {
        const phone = phoneCodesData.find(i => i.cca2 === country.cca2);
        return {
          name: country.name.common,
          code: country.cca2,
          flag: country.flags.png,
          region: country.region,
          population: country.population,
          phoneCode: phone?.idd?.root + (phone?.idd?.suffixes?.[0] || '')
        };
      });

      setCountries(joined);
      setLoading(false);
    };

    fetchCountries();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Countries</h1>
      {countries.map(country => (
        <div key={country.code} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <img src={country.flag} width="50" alt={country.name} />
          <h3>{country.name}</h3>
          <p>Code: {country.code}</p>
          <p>Region: {country.region}</p>
          <p>Population: {country.population.toLocaleString()}</p>
          <p>Phone: {country.phoneCode || 'N/A'}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
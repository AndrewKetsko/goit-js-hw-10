export function fetchCountries(name) {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(onError)
        .then(toManyCountries)
        .then(countryList)
        .then(countryCard)
        .catch(() => {});
}
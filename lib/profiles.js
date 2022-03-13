function filterByQuery(query) {
  let profileTraitsArray = [];
  let filteredResults = profileArray;
  if (query.profileTraits) {
    if (typeof query.profileTraits === 'string') {
      profileTraitsArray = [query.profileTraits];
    } else {
      profileTraitsArray = query.profileTraits;
    }
    console.log(profileTraitsArray);
    profileTraitsArray.forEach(trait => {
      filteredResults = filteredResults.filter (
        profile => profile.profileTraits.indexOf(trait) !== -1
      );
    });
  }
  if (query.band_name) {
    filteredResults = filteredResults.filter(profile => profile.band_name === query.band_name);
  }
  if (query.occupation) {
    filteredResults = filteredResults.filter(profile => profile.occupation === query.occupation);
  }
  if (query.location) {
    filteredResults = filteredResults.filter(profile => profile.location === query.location);
  }
  return filteredResults;
}

module.exports = { filterByQuery };
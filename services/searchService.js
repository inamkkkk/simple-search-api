const data = [
  { id: 1, name: 'Apple iPhone 13' },
  { id: 2, name: 'Samsung Galaxy S21' },
  { id: 3, name: 'Google Pixel 6' },
  { id: 4, name: 'Apple MacBook Pro' },
  { id: 5, name: 'Dell XPS 13' },
  { id: 6, name: 'HP Spectre x360' },
  { id: 7, name: 'Apple Watch Series 7' },
  { id: 8, name: 'Samsung Galaxy Watch 4' },
  { id: 9, name: 'Fitbit Sense' },
  { id: 10, name: 'Apple iPad Air' },
  { id: 11, name: 'Samsung Galaxy Tab S7' },
  { id: 12, name: 'Microsoft Surface Pro 8' }
];

exports.searchData = (query) => {
  const searchTerm = query.toLowerCase();
  return data.filter(item => item.name.toLowerCase().includes(searchTerm));
};

const mockPostList = [
  {
    id: 1,
    title: 'cricket match #1 result - lose',
    body: '...'
  },
  {
    id: 2,
    title: 'cricket match #12result - win',
    body: '...'
  }
];

export const mockFetch = async() => {
  return {
    json: async() => {
      return mockPostList;
    }
  };
};

// the above is callable like the below
// mockFetch()
//   .then( (res) => {
//     res.json()
//   })
//   .then( (resInJson) => {
//     console.log(resInJson);
//   });
 
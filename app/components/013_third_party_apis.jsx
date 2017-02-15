//SEE ALSO 019_load_data.jsx


//spotify api (public, no auth required):
//following api documentation, we can search and play songs

//ALTERNATIVES TO FETCH DATA FROM A THIRD-PARTY api

//1. AXIOS

//2. THUNK

//3. ES6 BUILT-IN FETCH FUNCTION

//example from music-searcher project of David Katz in Udemy:

// handleSearch() {
//     const self = this;
//     const BASE_URL = 'https://api.spotify.com/v1/search';
//     const FETCH_URL = BASE_URL + '?q=' + this.state.query + '&type=artist&limit=1';
//
//     //fetch is a new ES6 function. It returns a promise
//     //good post about it: https://davidwalsh.name/fetch
//     fetch(FETCH_URL, {
//       method: 'GET'
//     }).then(function(response) {
//       //the resulting callback data has a json method for converting the raw data to a JavaScript object
//       return response.json();
//     }).then(function(jsonObject) {
//       const artist = jsonObject.artists.items[0];
//       self.setState({ artist: artist });
//       self.setState({ query: ''});
//       const ARTIST_URL = `https://api.spotify.com/v1/artists/${artist.id}/top-tracks?country=US&`;
//       //once we have the artist id, we make a new request to get his top tracks
//       fetch(ARTIST_URL, {
//         method: 'GET'
//       }).then(function(response) {
//         return response.json();
//       }).then(function(jsonObject) {
//         self.setState({ tracks: jsonObject.tracks });
//       });
//     });
//   }

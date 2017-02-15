//OPTION 1: JQUERY GET METHOD
//load jquery
//$.get(url, function(data) {...} );

//Example from React Speed Coding - Components
//attention to the use of the built-in variable this.serverRequest
//and the need to close the connection in componentWillUnmount()

// componentDidMount() {
//     const sourceRepo =
//       `https://api.github.com/repos/${this.props.repo}`;
//
//     this.serverRequest = $.get(sourceRepo, function (result) {
//       this.setState({
//         full_name: result.full_name,
//         stargazers_count: result.stargazers_count,
//         open_issues: result.open_issues
//       });
//     }.bind(this));
//   }

// componentWillUnmount() {
//   this.serverRequest.abort();
// }



//More info: http://stackoverflow.com/questions/38531355/react-docs-origin-of-serverrequest



//OPTION 2: GET METHOD OF THE AXIOS NPM MODULE
//load axios via npm
//call the axios function in componentWillMount
//define the axios function
//attention: remember to use response.data
//axios.get(url).then(callback(response) {return response.data})


//Example from React Speed Coding - Components

// axiosLoader() {
//     const url = `https://api.github.com/repos/${this.props.repoName}`;
//     const self = this;
//     axios.get(url)
//       .then(function(repo) {
//         self.setState({
//           repoName: repo.data.name,
//           repoStars: repo.data.stargazers_count,
//           repoIssues: repo.data.open_issues_count
//         });
//       })
//       .catch(function(err) {
//         console.log(err);
//       });
//   }


//OPTION 2B: AXIOS WITH PRIVATE API (API KEY REQUIRED)

//add the api_key to the url in the required way
//use axios as usual with the extended url


// const API_KEY = 'b68279dd9e3ec9121ef0576990607535';
// const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;
//
// export function fetchWeather(city) {
//     const url = `${ROOT_URL}&q=${city},us`;
//     const request = axios.get(url);
//     return {
//       type: 'FETCH_WEATHER',
//       payload: request
//     };
// }



//OPTION 3: GET METHOD OF THE NEW ES6 FETCH

//we do not need to download anything, as long as we have the proper Babel preset
//the fetch method has 2 parameters: the url and an object with the method:get
//we get the final data in two steps, it is not very straight forward.


//Example from React Speed Coding - Components

// handleSearch() {
//     const self = this;
//     const url = `https://api.github.com/repos/${this.props.repoName}`;
//
//     fetch(url, {
//       method: 'GET'
//     }).then(function(response) {
//       //it gets the data as a json object
//       //we use the json method to transform the json data to a JavaScript object
//       return response.json();
//       //and then we can make use of the data of the javascript object
//     }).then(function(repo) {
//       self.setState({
//         repoName: repo.name,
//         repoStars: repo.stargazers_count,
//         repoIssues: repo.open_issues_count
//       });
//     });
//   }


//OPTION 4: XMLHttpRequest
// const myRequest = new XMLHttpRequest();
//     myRequest.open('GET', webService);
//     myRequest.onload = () => {
//       if(myRequest.status === 200) {
//         this.setState({ cities: JSON.parse(myRequest.responseText) });
//       } else {
//         //manage error;
//       }
//     };
//     myRequest.send();

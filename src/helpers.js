export default {

  byName: function(){
    const fetchSettings = {
      method: 'GET'
    }
    return fetch('https://api.darksky.net/forecast/0cfdabba987197cb8dc8998da8b90aed/28.536643,77.199195', fetchSettings).then((response) => {
    return response.json();
  })
  }
}

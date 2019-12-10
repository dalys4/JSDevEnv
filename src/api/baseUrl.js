export default function getBaseUrl() {
  //const inDevelopment = window.location.hostname === 'localhost';
  //return inDevelopment ? 'http://localhost:3001/' : '/';
  const rUrl = getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : "/"
  //console.log(rUrl);

  return rUrl

}

function getQueryStringParameterByName(name, url){
  if(!url) url = window.location.href;
  name = name.replace(/[[\]]/g, "\\$&");
  //console.log("queryStringName:" + name);
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    //console.log("results: " + results)
    if(!results) return null;
    if(!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

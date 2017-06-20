function xhrPost(data, done){
  let xhr = new XMLHttpRequest();
  let dataJSON = JSON.stringify(data.checked || data);
  xhr.open("POST", data.url);
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      done(null, xhr.responseText);
    }
  };
  xhr.send(dataJSON);
}

module.exports = xhrPost;
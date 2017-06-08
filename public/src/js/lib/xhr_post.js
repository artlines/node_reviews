function xhrPost(name, data, url){
  const form = document.forms.name;
  let xhr = new XMLHttpRequest();
  let dataJSON = JSON.stringify(data);
  xhr.open("POST", url);
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      form.insertAdjacentHTML('afterend', '<p class="error-message">' + xhr.responseText + '</p>')
    };
  }
  xhr.send(dataJSON);
}

module.exports = xhrPost;
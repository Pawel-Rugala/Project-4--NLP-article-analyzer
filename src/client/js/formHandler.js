const formHandler = (e) => {
  console.log('dziala tutaj');
  e.preventDefault();
  let txt = document.getElementById('url').value;
  let statusField = document.getElementById('status');
  if (!Client.validateUrl(txt)) {
    statusField.textContent = 'Invalid URL';
  } else {
    statusField.textContent = 'URL is OK';
    Client.postData('http://localhost:8081/meaning', txt)
      .then((data) => {
        Client.updatePage(data);
        statusField.textContent = 'Paste URL to the article';
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

// export { formHandler };
module.exports = formHandler;

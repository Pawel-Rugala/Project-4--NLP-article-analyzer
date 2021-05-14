const formHandler = (e) => {
  console.log('dziala tutaj');
  e.preventDefault();
  let txt = document.getElementById('txt').value;
  let statusField = document.getElementById('status');
  if (!Client.validateUrl(txt)) {
    statusField.textContent = 'Invalid URL';
  } else {
    statusField.textContent = '';
    Client.postData('http://localhost:8081/meaning', txt)
      .then((data) => {
        Client.updatePage(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

// export { formHandler };
module.exports = formHandler;

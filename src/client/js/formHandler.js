const formHandler = (e) => {
  console.log('dziala tutaj');
  e.preventDefault();
  let txt = document.getElementById('txt').value;
  Client.postData('/meaning', txt)
    .then((data) => {
      Client.updatePage(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// export { formHandler };
module.exports = formHandler;
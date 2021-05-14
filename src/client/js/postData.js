const postData = async (url = 'http://localhost:8081/meaning', data) => {
  if (data) {
    let nData = { txt: data };
    const res = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nData),
    });
    try {
      const newData = await res.json();
      return newData;
    } catch (err) {
      console.log('error', error);
    }
  } else {
    return console.log('error');
  }
};

// export { postData };
module.exports = postData;

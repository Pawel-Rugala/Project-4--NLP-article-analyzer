const updatePage = (data) => {
  //destructure data
  const { irony, confidence, subjectivity } = data;

  // Update page with score
  const score = document.getElementById('score');
  const scoreToBeAdd = `<p>${confidence}</p>`;
  score.insertAdjacentHTML('afterend', scoreToBeAdd);

  // Update page with irony
  const ironyEle = document.getElementById('irony');
  const ironyToBeAdd = `<p>${irony}</p>`;
  ironyEle.insertAdjacentHTML('afterend', ironyToBeAdd);

  // Update page with subjectivity
  const subject = document.getElementById('subject');
  const subjectToBeAdd = `<p>${subjectivity}</p>`;
  subject.insertAdjacentHTML('afterend', subjectToBeAdd);
};

module.exports = updatePage;

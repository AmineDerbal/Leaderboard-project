class UserInterface {
  constructor() {
    this.listScores = document.getElementById('score-data');
    this.nameInput = document.getElementById('name');
    this.scoreInput = document.getElementById('score');
  }

  clearInputs = () => {
    this.nameInput.value = '';
    this.scoreInput.value = '';
  };

  renderScores = (array) => {
    this.listScores.innerHTML = '';
    array.forEach((element) => {
      const scoreElement = document.createElement('p');
      scoreElement.textContent = `${element.user}: ${element.score}`;
      this.listScores.appendChild(scoreElement);
    });
  };
}

export default UserInterface;

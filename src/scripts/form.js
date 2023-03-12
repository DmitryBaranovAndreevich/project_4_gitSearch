class Form {
  constructor(className, table) {
    this.table = table;
    this.className = className;
    this.form = document.querySelector(`.${className}`);
    this.input = this.form.querySelector(`.${className}__input`);
    this.errorMessage = this.form.querySelector(`.${className}__errorMessage`);
    this.baseUrl = 'https://api.github.com';
  }

  checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getApi(params) {
    return fetch(
      `${this.baseUrl}/search/repositories?q=${params}&per_page=10`
    ).then(this.checkResponse);
  }

  validateValue(value) {
    if (!value) {
      this.errorMessage.classList.add(`${this.className}__errorMessage_active`);
      return false;
    }

    return true;
  }

  submit = (e) => {
    e.preventDefault();
    const value = this.input.value;
    if (this.validateValue(value)) {
      this.getApi(value)
        .then((res) => {
          this.table.printResults(res.items);
          this.input.value = '';
        })
        .catch((e) => console.log(e));
    }
  };

  setEventListeners() {
    this.form.addEventListener('submit', this.submit);
    this.input.addEventListener('input', () => {
      if (
        this.errorMessage.classList.contains(
          `${this.className}__errorMessage_active`
        )
      ) {
        this.errorMessage.classList.remove(
          `${this.className}__errorMessage_active`
        );
      }
    });
  }
}

export default Form;

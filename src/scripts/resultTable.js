class ResultTable {
  constructor(className, itemClass) {
    this.className = className;
    this.table = document.querySelector(`.${className}`);
    this.ItemClass = itemClass;
  }

  printResults(arr) {
    this.table.innerHTML = '';
    if (!arr.length) {
      this.table.innerHTML =
        ' <p class="resultTable__message">ничего не найдено</p>';
    } else
      arr.forEach((el, index) => {
        this.table.innerHTML += new this.ItemClass(
          index + 1,
          el.owner.avatar_url,
          el.owner.login,
          el.clone_url,
          el.language
        ).create();
      });
  }
}

export default ResultTable;

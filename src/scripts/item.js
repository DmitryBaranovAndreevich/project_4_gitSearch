class Item {
  constructor(number, avatar, name, repoLink, language) {
    this.number = number;
    this.avatar = avatar;
    this.name = name;
    this.repoLink = repoLink;
    this.language = language;
  }

  create() {
    return ` <div class="item">
              <p class="item__number">${this.number}</p>
              <img src="${this.avatar}" alt="owner" class="item__ownerImage">
              <p class="item__owner">${this.name}</p>
              <a href="${this.repoLink}" class="item__nameLink"  target="_blank">${this.repoLink}</a>
              <p class="item__language">${this.language}</p>
            </div>`;
  }
}

export default Item;

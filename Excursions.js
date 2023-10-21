class Excursions {
  constructor(api) {
    this.apiService = api;
  }

  load() {
    this.apiService
      .loadData()
      .then((data) => {
        this.insert(data);
      })
      .catch((err) => console.error(err));
  }

  insert(data) {
    const ulEl = this._findUl();
    this._clearElement(ulEl);

    data.forEach((item) => {
      const liEl = this._createLi(item);
      ulEl.appendChild(liEl);
    });
  }

  remove() {
    const ulEl = this._findUl();
    ulEl.addEventListener('click', (e) => {
      const targetEl = e.target;
      if (this._isElementType(targetEl, 'A')) {
        const id = this._getIdFromRoot(targetEl);
        this.apiService
          .removeData(id)
          .catch((err) => console.error(err))
          .finally(() => this.load());
      }
    });
  }

  add() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const { name, price } = e.target.elements;
      const data = {
        name: name.value,
        price: price.value,
      };

      this.apiService
        .addData(data)
        .catch((err) => console.error(err))
        .finally(() => this.load());
    });
  }

  update() {
    const ulEl = this._findUl();
    ulEl.addEventListener('click', (e) => {
      const targetEl = e.target;
      if (this._isElementType(targetEl, 'BUTTON')) {
        if (this._isItemEditable(targetEl)) {
          const id = this._getIdFromRoot(targetEl);
          const data = this._createDataToUpdate(targetEl);

          this.apiService
            .updateData(id, data)
            .catch((err) => console.error(err))
            .finally(() => {
              targetEl.innerText = 'edytuj';
              this._setItemEditable(targetEl, false);
            });
        } else {
          targetEl.innerText = 'zapisz';
          this._setItemEditable(targetEl, true);
        }
      }
    });
  }

  _isElementType(element, type) {
    return element.tagName === type;
  }

  _findUl() {
    return document.querySelector('.excursions');
  }

  _getIdFromRoot(targetElement) {
    return this._findItemRoot(targetElement).dataset.id;
  }

  _findItemRoot(targetElement) {
    return targetElement.parentElement;
  }

  _findItemSpans(itemRoot) {
    return itemRoot.querySelectorAll('span');
  }

  _isItemEditable(targetElement) {
    const rootItem = this._findItemRoot(targetElement);
    const spanList = this._findItemSpans(rootItem);
    const isEditable = [...spanList].every((span) => span.isContentEditable);

    return isEditable;
  }

  _setItemEditable(targetElement, value) {
    const rootItem = this._findItemRoot(targetElement);
    const spanList = this._findItemSpans(rootItem);
    spanList.forEach((span) => (span.contentEditable = value));
  }

  _createDataToUpdate(targetElement) {
    const rootItem = this._findItemRoot(targetElement);
    const [nameEl, priceEl] = [...this._findItemSpans(rootItem)];

    return {
      name: nameEl.innerText,
      price: priceEl.innerText,
    };
  }

  _clearElement(element) {
    element.innerHTML = '';
  }

  _createLi(itemData) {
    const liEl = document.createElement('li');
    liEl.dataset.id = itemData.id;
    liEl.classList.add('excursions__item');
    liEl.innerHTML = `
            [<a href="#">usuń</a>]
            <span>${itemData.name}</span>: 
            <span>${itemData.price}</span>PLN
            <button>edytuj</button>
        `;

    return liEl;
  }
}

export default Excursions;

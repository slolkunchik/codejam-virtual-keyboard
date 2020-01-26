export default class Button {
  constructor(row, buttonData) {
    this.row = row;
    this.buttonData = buttonData;
  }

  render(locale, isCaps) {
    let buttonElement;
    if (this.buttonData.characters.special !== undefined) {
      buttonElement = `<div class="key" data-code="${this.buttonData.code}"><span>${this.buttonData.characters[locale][0]}</span></div>`;
    } else {
      buttonElement = `<div class="key" data-code="${this.buttonData.code}"><span>${this.buttonData.characters[locale][+isCaps]}</span></div>`;
    }
    document.getElementById(`row${this.row}`).insertAdjacentHTML('beforeend', buttonElement);
  }

  animate(isCaps) {
    const { code } = this.buttonData;
    const caps = +isCaps;
    const buttonElement = document.querySelector(`div[data-code=${code}]`);
    if (code === 'CapsLock' && caps === 1) {
      buttonElement.classList.add('selected');
      return;
    }
    if (code === 'CapsLock' && caps === 0) {
      buttonElement.classList.remove('selected');
      return;
    }
    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      if (caps === 1) {
        buttonElement.classList.add('selected');
        return;
      }
      if (caps === 0) {
        buttonElement.classList.remove('selected');
        return;
      }
    }
    buttonElement.classList.add('pressed');
    setTimeout(() => buttonElement.classList.remove('pressed'), 500);
  }

  print(locale) {
    let symbol;
    const selectedCaps = document.querySelector('.selected');
    if (this.buttonData.characters.special !== undefined) {
      symbol = this.buttonData.characters.special;
    } else if (selectedCaps) {
      [, symbol] = this.buttonData.characters[locale];
    } else {
      [symbol] = this.buttonData.characters[locale];
    }
    document.getElementById('kinput').value += `${symbol}`;
  }
}

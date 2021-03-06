import ButtonData from './modules/buttonData.mjs';
import Button from './modules/button.mjs';

class Keyboard {
  constructor() {
    this.buttons = [
      new Button(0, new ButtonData('Backquote', { en: ['`', '~'], ru: ['ё', 'Ё'] })),
      new Button(0, new ButtonData('Digit1', { en: ['1', '!'], ru: ['1', '!'] })),
      new Button(0, new ButtonData('Digit2', { en: ['2', '@'], ru: ['2', '"'] })),
      new Button(0, new ButtonData('Digit3', { en: ['3', '#'], ru: ['3', '№'] })),
      new Button(0, new ButtonData('Digit4', { en: ['4', '$'], ru: ['4', ';'] })),
      new Button(0, new ButtonData('Digit5', { en: ['5', '%'], ru: ['5', '%'] })),
      new Button(0, new ButtonData('Digit6', { en: ['6', '^'], ru: ['6', ':'] })),
      new Button(0, new ButtonData('Digit7', { en: ['7', '&'], ru: ['7', '?'] })),
      new Button(0, new ButtonData('Digit8', { en: ['8', '*'], ru: ['8', '*'] })),
      new Button(0, new ButtonData('Digit9', { en: ['9', '('], ru: ['9', '('] })),
      new Button(0, new ButtonData('Digit0', { en: ['0', ')'], ru: ['0', ')'] })),
      new Button(0, new ButtonData('Minus', { en: ['-', '_'], ru: ['-', '_'] })),
      new Button(0, new ButtonData('Equal', { en: ['=', '+'], ru: ['=', '+'] })),
      new Button(0, new ButtonData('Backspace', { en: ['Backspace'], ru: ['Backspace'], special: '' })),
      new Button(1, new ButtonData('Tab', { en: ['Tab'], ru: ['Tab'], special: '\t' })),
      new Button(1, new ButtonData('KeyQ', { en: ['q', 'Q'], ru: ['й', 'Й'] })),
      new Button(1, new ButtonData('KeyW', { en: ['w', 'W'], ru: ['ц', 'Ц'] })),
      new Button(1, new ButtonData('KeyE', { en: ['e', 'E'], ru: ['у', 'У'] })),
      new Button(1, new ButtonData('KeyR', { en: ['r', 'R'], ru: ['к', 'К'] })),
      new Button(1, new ButtonData('KeyT', { en: ['t', 'T'], ru: ['е', 'Е'] })),
      new Button(1, new ButtonData('KeyY', { en: ['y', 'Y'], ru: ['н', 'Н'] })),
      new Button(1, new ButtonData('KeyU', { en: ['u', 'U'], ru: ['г', 'Г'] })),
      new Button(1, new ButtonData('KeyI', { en: ['i', 'I'], ru: ['ш', 'Ш'] })),
      new Button(1, new ButtonData('KeyO', { en: ['o', 'O'], ru: ['щ', 'Щ'] })),
      new Button(1, new ButtonData('KeyP', { en: ['p', 'P'], ru: ['з', 'З'] })),
      new Button(1, new ButtonData('BracketLeft', { en: ['[', '{'], ru: ['х', 'Х'] })),
      new Button(1, new ButtonData('BracketRight', { en: [']', '}'], ru: ['ъ', 'Ъ'] })),
      new Button(1, new ButtonData('Backslash', { en: ['\\', '|'], ru: ['\\', '/'] })),
      new Button(2, new ButtonData('CapsLock', { en: ['Caps Lock'], ru: ['Caps Lock'], special: '' })),
      new Button(2, new ButtonData('KeyA', { en: ['a', 'A'], ru: ['ф', 'Ф'] })),
      new Button(2, new ButtonData('KeyS', { en: ['s', 'S'], ru: ['ы', 'Ы'] })),
      new Button(2, new ButtonData('KeyD', { en: ['d', 'D'], ru: ['в', 'В'] })),
      new Button(2, new ButtonData('KeyF', { en: ['f', 'F'], ru: ['а', 'А'] })),
      new Button(2, new ButtonData('KeyG', { en: ['g', 'G'], ru: ['п', 'П'] })),
      new Button(2, new ButtonData('KeyH', { en: ['h', 'H'], ru: ['р', 'Р'] })),
      new Button(2, new ButtonData('KeyJ', { en: ['j', 'J'], ru: ['о', 'О'] })),
      new Button(2, new ButtonData('KeyK', { en: ['k', 'K'], ru: ['л', 'Л'] })),
      new Button(2, new ButtonData('KeyL', { en: ['l', 'L'], ru: ['д', 'Д'] })),
      new Button(2, new ButtonData('Semicolon', { en: [';', ':'], ru: ['ж', 'Ж'] })),
      new Button(2, new ButtonData('Quote', { en: ['\'', '"'], ru: ['э', 'Э'] })),
      new Button(2, new ButtonData('Enter', { en: ['Enter'], ru: ['Enter'], special: '\n' })),
      new Button(3, new ButtonData('ShiftLeft', { en: ['Shift'], ru: ['Shift'], special: '' })),
      new Button(3, new ButtonData('KeyZ', { en: ['z', 'Z'], ru: ['я', 'Я'] })),
      new Button(3, new ButtonData('KeyX', { en: ['x', 'X'], ru: ['ч', 'Ч'] })),
      new Button(3, new ButtonData('KeyC', { en: ['c', 'C'], ru: ['с', 'С'] })),
      new Button(3, new ButtonData('KeyV', { en: ['v', 'V'], ru: ['м', 'М'] })),
      new Button(3, new ButtonData('KeyB', { en: ['b', 'B'], ru: ['и', 'И'] })),
      new Button(3, new ButtonData('KeyN', { en: ['n', 'N'], ru: ['т', 'Т'] })),
      new Button(3, new ButtonData('KeyM', { en: ['m', 'M'], ru: ['ь', 'Ь'] })),
      new Button(3, new ButtonData('Comma', { en: [',', '<'], ru: ['б', 'Б'] })),
      new Button(3, new ButtonData('Period', { en: ['.', '>'], ru: ['ю', 'Ю'] })),
      new Button(3, new ButtonData('Slash', { en: ['/', '?'], ru: ['.', ','] })),
      new Button(3, new ButtonData('ArrowUp', { en: ['▲', '▲'], ru: ['▲', '▲'] })),
      new Button(3, new ButtonData('ShiftRight', { en: ['Shift'], ru: ['Shift'], special: '' })),
      new Button(4, new ButtonData('ControlLeft', { en: ['Ctrl'], ru: ['Ctrl'], special: '' })),
      new Button(4, new ButtonData('AltLeft', { en: ['Alt'], ru: ['Alt'], special: '' })),
      new Button(4, new ButtonData('Space', { en: [' '], ru: [' '], special: ' ' })),
      new Button(4, new ButtonData('AltRight', { en: ['Alt'], ru: ['Alt'], special: '' })),
      new Button(4, new ButtonData('ArrowLeft', { en: ['◄', '◄'], ru: ['◄', '◄'] })),
      new Button(4, new ButtonData('ArrowDown', { en: ['▼', '▼'], ru: ['▼', '▼'] })),
      new Button(4, new ButtonData('ArrowRight', { en: ['►', '►'], ru: ['►', '►'] })),
      new Button(4, new ButtonData('ControlRight', { en: ['Ctrl'], ru: ['Ctrl'], special: '' })),
    ];
    this.caps = 0;
    this.shiftLocked = false;
  }

  init() {
    this.locale = localStorage.getItem('locale') || 'en';
    document.body.insertAdjacentHTML('beforeend', '<div class="wrapper"><textarea class="input-box" id="kinput" rows="10" cols="100"></textarea><div id="keyboard" class="keyboard"></div></div>');
    this.keyboardElement = document.getElementById('keyboard');
  }

  setDefaultLocale() {
    localStorage.setItem('locale', this.locale);
  }

  render(enableListeners) {
    this.keyboardElement.innerHTML = '';
    let divs = '';
    for (let i = 0; i < 5; i += 1) {
      divs = `${divs}<div id="row${i}" class="row"></div>`;
    }
    this.keyboardElement.insertAdjacentHTML('beforeend', divs);
    this.buttons.forEach((button) => button.render(this.locale, this.caps));
    const self = this;
    function clickButton(event) {
      let code;
      if (event.type === 'click') {
        code = event.target.closest('div').dataset.code;
        if (!code) return;

        if (['ShiftLeft', 'ShiftRight'].indexOf(code) !== -1) {
          self.caps = !self.caps;
          self.render(false);
        }
      }
      if (event.type === 'keydown') {
        code = event.code;
        if (event.altKey && event.shiftKey) {
          if (self.locale === 'ru') {
            self.locale = 'en';
          } else {
            self.locale = 'ru';
          }
          self.setDefaultLocale();
          self.render(false);
        }
        if (event.shiftKey) {
          if (self.shiftLocked === false) {
            self.shiftLocked = true;
            self.caps = true;
            self.render(false);
            code = event.code;
          }
        }
      }
      if (event.type === 'keyup') {
        if (['ShiftLeft', 'ShiftRight'].indexOf(event.code) !== -1) { // event.shiftKey didn't work on 'keyup'
          self.shiftLocked = false;
          self.caps = false;
          self.render(false);
          code = event.code;
        }
      }
      if (code === 'Backspace') {
        const printedArea = document.getElementById('kinput');
        printedArea.value = printedArea.value.substr(0, printedArea.value.length - 1);
      }
      if (code === 'CapsLock') {
        self.caps = !self.caps;
        self.render(false);
      }
      event.preventDefault();

      if (code) {
        const pressedButton = self.getButtonByCode(code);
        pressedButton.animate(self.caps);
        pressedButton.print(self.locale);
      }
    }
    if (enableListeners === undefined || enableListeners === true) {
      this.keyboardElement.addEventListener('click', clickButton);
      document.addEventListener('keydown', clickButton);
      document.addEventListener('keyup', clickButton);
    }
  }

  getButtonByCode(code) {
    for (let i = 0; i < this.buttons.length; i += 1) {
      if (this.buttons[i].buttonData.code === code) {
        return this.buttons[i];
      }
    }
    return null;
  }
}
const kbd = new Keyboard();
kbd.init();
kbd.render();

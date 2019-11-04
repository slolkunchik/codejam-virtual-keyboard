class Keyboard {
    constructor() {
        this._buttons = [
            new Button(0, new ButtonData('Backquote', {'en': ['`', '~'], 'ru': ['ё', 'Ё']})),
            new Button(0, new ButtonData('Digit1', {'en': ['1', '!'], 'ru': ['1', '!']})),
            new Button(0, new ButtonData('Digit2', {'en': ['2', '@'], 'ru': ['2', '\"']})),
            new Button(0, new ButtonData('Digit3', {'en': ['3', '#'], 'ru': ['3', '№']})),
            new Button(0, new ButtonData('Digit4', {'en': ['4', '$'], 'ru': ['4', ';']})),
            new Button(0, new ButtonData('Digit5', {'en': ['5', '%'], 'ru': ['5', '%']})),
            new Button(0, new ButtonData('Digit6', {'en': ['6', '^'], 'ru': ['6', ':']})),
            new Button(0, new ButtonData('Digit7', {'en': ['7', '&'], 'ru': ['7', '?']})),
            new Button(0, new ButtonData('Digit8', {'en': ['8', '*'], 'ru': ['8', '*']})),
            new Button(0, new ButtonData('Digit9', {'en': ['9', '('], 'ru': ['9', '(']})),
            new Button(0, new ButtonData('Digit0', {'en': ['0', ')'], 'ru': ['0', ')']})),
            new Button(0, new ButtonData('Minus', {'en': ['-', '_'], 'ru': ['-', '_']})),
            new Button(0, new ButtonData('Equal', {'en': ['=', '+'], 'ru': ['=', '+']})),
            new Button(0, new ButtonData('Backspace', {'en': ['Backspace'], 'ru': ['Backspace'], 'special': ''})),
            new Button(1, new ButtonData('Tab', {'en': ['Tab'], 'ru': ['Tab'], 'special':'\t'})),
            new Button(1, new ButtonData('KeyQ', {'en': ['q', 'Q'], 'ru': ['й', 'Й']})),
            new Button(1, new ButtonData('KeyW', {'en': ['w', 'W'], 'ru': ['ц', 'Ц']})),
            new Button(1, new ButtonData('KeyE', {'en': ['e', 'E'], 'ru': ['у', 'У']})),
            new Button(1, new ButtonData('KeyR', {'en': ['r', 'R'], 'ru': ['к', 'К']})),
            new Button(1, new ButtonData('KeyT', {'en': ['t', 'T'], 'ru': ['е', 'Е']})),
            new Button(1, new ButtonData('KeyY', {'en': ['y', 'Y'], 'ru': ['н', 'Н']})),
            new Button(1, new ButtonData('KeyU', {'en': ['u', 'U'], 'ru': ['г', 'Г']})),
            new Button(1, new ButtonData('KeyI', {'en': ['i', 'I'], 'ru': ['ш', 'Ш']})),
            new Button(1, new ButtonData('KeyO', {'en': ['o', 'O'], 'ru': ['щ', 'Щ']})),
            new Button(1, new ButtonData('KeyP', {'en': ['p', 'P'], 'ru': ['з', 'З']})),
            new Button(1, new ButtonData('BracketLeft', {'en': ['[', '{'], 'ru': ['х', 'Х']})),
            new Button(1, new ButtonData('BracketRight', {'en': [']', '}'], 'ru': ['ъ', 'Ъ']})),
            new Button(1, new ButtonData('Backslash', {'en': ['\\', '\|'], 'ru': ['\\', '\/']})),
            new Button(1, new ButtonData('Delete', {'en': ['Delete'], 'ru': ['Delete'], 'special': ''})),
            new Button(2, new ButtonData('CapsLock', {'en': ['Caps Lock'], 'ru': ['Caps Lock'], 'special': ''})),
            new Button(2, new ButtonData('KeyA', {'en': ['a', 'A'], 'ru': ['ф', 'Ф']})),
            new Button(2, new ButtonData('KeyS', {'en': ['s', 'S'], 'ru': ['ы', 'Ы']})),
            new Button(2, new ButtonData('KeyD', {'en': ['d', 'D'], 'ru': ['в', 'В']})),
            new Button(2, new ButtonData('KeyF', {'en': ['f', 'F'], 'ru': ['а', 'А']})),
            new Button(2, new ButtonData('KeyG', {'en': ['g', 'G'], 'ru': ['п', 'П']})),
            new Button(2, new ButtonData('KeyH', {'en': ['h', 'H'], 'ru': ['р', 'Р']})),
            new Button(2, new ButtonData('KeyJ', {'en': ['j', 'J'], 'ru': ['о', 'О']})),
            new Button(2, new ButtonData('KeyK', {'en': ['k', 'K'], 'ru': ['л', 'Л']})),
            new Button(2, new ButtonData('KeyL', {'en': ['l', 'L'], 'ru': ['д', 'Д']})),
            new Button(2, new ButtonData('Semicolon', {'en': [';', ':'], 'ru': ['ж', 'Ж']})),
            new Button(2, new ButtonData('Quote', {'en': ['\'', '\"'], 'ru': ['э', 'Э']})),
            new Button(2, new ButtonData('Enter', {'en': ['Enter'], 'ru': ['Enter'], 'special': '\n'})),
            new Button(3, new ButtonData('ShiftLeft', {'en': ['Shift'], 'ru': ['Shift'], 'special': ''})),
            new Button(3, new ButtonData('KeyZ', {'en': ['z', 'Z'], 'ru': ['я', 'Я']})),
            new Button(3, new ButtonData('KeyX', {'en': ['x', 'X'], 'ru': ['ч', 'Ч']})),
            new Button(3, new ButtonData('KeyC', {'en': ['c', 'C'], 'ru': ['с', 'С']})),
            new Button(3, new ButtonData('KeyV', {'en': ['v', 'V'], 'ru': ['м', 'М']})),
            new Button(3, new ButtonData('KeyB', {'en': ['b', 'B'], 'ru': ['и', 'И']})),
            new Button(3, new ButtonData('KeyN', {'en': ['n', 'N'], 'ru': ['т', 'Т']})),
            new Button(3, new ButtonData('KeyM', {'en': ['m', 'M'], 'ru': ['ь', 'Ь']})),
            new Button(3, new ButtonData('Comma', {'en': [',', '<'], 'ru': ['б', 'Б']})),
            new Button(3, new ButtonData('Period', {'en': ['.', '>'], 'ru': ['ю', 'Ю']})),
            new Button(3, new ButtonData('Slash', {'en': ['/', '?'], 'ru': ['.', ',']})),
            new Button(3, new ButtonData('ArrowUp', {'en': ['▲', '▲'], 'ru': ['▲', '▲']})),
            new Button(3, new ButtonData('ShiftRight', {'en': ['Shift'], 'ru': ['Shift'], 'special': ''})),
            new Button(4, new ButtonData('ControlLeft', {'en': ['Ctrl'], 'ru': ['Ctrl'], 'special': ''})),
            new Button(4, new ButtonData('AltLeft', {'en': ['Alt'], 'ru': ['Alt'], 'special': ''})),
            new Button(4, new ButtonData('Space', {'en': [' '], 'ru': [' '], 'special': ' '})),
            new Button(4, new ButtonData('AltRight', {'en': ['Alt'], 'ru': ['Alt'], 'special': ''})),
            new Button(4, new ButtonData('ArrowLeft', {'en': ['◄', '◄'], 'ru': ['◄', '◄']})),
            new Button(4, new ButtonData('ArrowDown', {'en': ['▼', '▼'], 'ru': ['▼', '▼']})),
            new Button(4, new ButtonData('ArrowRight', {'en': ['►', '►'], 'ru': ['►', '►']})),
            new Button(4, new ButtonData('ControlRight', {'en': ['Ctrl'], 'ru': ['Ctrl'], 'special': ''}))
        ];
        this._locale = 'ru';
        this._caps = 0;
    }

    init() {
        document.body.insertAdjacentHTML('beforeend', '<div class="wrapper"><textarea class="input-box" id="kinput" rows="10" cols="100"></textarea><div id="keyboard" class="keyboard"></div></div>');
        this._keyboardElement = document.getElementById('keyboard');
    }

    render(enableListeners) {
        let divs = '';
        for( let i = 0; i < 5; i++) {
            divs = `${divs}<div id="row${i}" class="row"></div>`;
        }
        this._keyboardElement.insertAdjacentHTML('beforeend', divs);
        this._buttons.forEach(button => button.render(this._locale, this._caps));
        let self = this;
        function clickButton (event) {
            let code;
            if (event.type === 'click') {
                code = event.target.closest('div').dataset.code;
                if (!code) return;

                if (code === 'ShiftLeft' || code === 'ShiftRight' || code === 'CapsLock') {
                    self._caps === 0 ? self._caps = 1 : self._caps = 0;
                    self._keyboardElement.innerHTML = '';
                    self.render(false);
                }
            }
            if (event.type === 'keydown') {
                code = event.code;
                if (event.altKey && event.shiftKey) {
                    self._locale === 'ru' ? self._locale = 'en' : self._locale = 'ru';
                    self._keyboardElement.innerHTML = '';
                    self.render(false);
                }
                if (event.shiftKey || code === 'CapsLock') {
                    self._caps === 0 ? self._caps = 1 : self._caps = 0;
                    self._keyboardElement.innerHTML = '';
                    self.render(false);
                }
            }
            if (code === 'Backspace') {
                let printedArea = document.getElementById('kinput');
                printedArea.value = printedArea.value.substr(0, printedArea.value.length - 1);
            }
            let pressedButton = self.getButtonByCode(code);

            event.preventDefault();
            pressedButton.animate(code, self._caps);
            pressedButton.print(self._locale);
        }
        if (enableListeners === undefined || enableListeners === true) {
            this._keyboardElement.addEventListener('click', clickButton);
            document.addEventListener('keydown', clickButton);
        }

    }

    getButtonByCode(code) {
        for(let button of this._buttons) {
            if (button._buttonData.code === code) {
                return button;
            }
        }
    }
}

class Button {
    constructor(row, buttonData) {
        this._row = row;
        this._buttonData = buttonData;
    }

    render(locale, caps) {
        let buttonElement;
        if (this._buttonData.characters.special !== undefined) {
            buttonElement = `<div class="key" data-code="${this._buttonData.code}"><span>${this._buttonData.characters[locale][0]}</span></div>`;
        } else {
            buttonElement = `<div class="key" data-code="${this._buttonData.code}"><span>${this._buttonData.characters[locale][caps]}</span></div>`;
        }
        document.getElementById(`row${this._row}`).insertAdjacentHTML('beforeend', buttonElement);
    }

    animate(code, caps) {
        let buttonElement = document.querySelector(`div[data-code=${code}]`);
        if (code === 'CapsLock' && caps === 1) {
            buttonElement.classList.add("selected");
            return;
        }
        if (code === 'CapsLock' && caps === 0) {
            buttonElement.classList.remove("selected");
            return;
        }
        if (code === 'ShiftLeft' || code === 'ShiftRight') {
            if (caps === 1) {
                buttonElement.classList.add("selected");
                return;
            }
            if (caps === 0) {
                buttonElement.classList.remove("selected");
                return;
            }
        }
        buttonElement.classList.add("pressed");
        setTimeout(() => buttonElement.classList.remove("pressed"), 500);
    }

    print(locale) {
        let symbol;
        let selectedCaps = document.querySelector(".selected");
        if (this._buttonData.characters.special !== undefined) {
            symbol = this._buttonData.characters.special;
        } else if (selectedCaps) {
            symbol = this._buttonData.characters[locale][1];
        } else {
            symbol = this._buttonData.characters[locale][0];
        }
        document.getElementById('kinput').value += `${symbol}`;
    }
}

class ButtonData {
    constructor(code, characters) {
        this.code = code;
        this.characters = characters;
    }
}
let kbd = new Keyboard();
kbd.init();
kbd.render();

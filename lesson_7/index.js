class MiniSlider {
    constructor(id) {
        this.id = id;
        this.children = '';
        this.index = 0;
        this.hideAll();
        this.show(this.index);
        this.createButtons();
    }

    hideAll() {
        this.children = this.id.getElementsByClassName('child');
        for (let i = 0; i < this.children.length; i += 1) {
            this.children[i].style.display = 'none';
        }
    }

    show(n) {
        this.children[n].style.display = 'block';
    }

    createButtons() {
        let button = document.createElement('button');
        let button1 = document.createElement('button');
        button.innerText = 'Prev';
        button1.innerText = 'Next';
        button.className = 'btn1';
        button1.className = 'btn2';
        this.id.prepend(button);
        this.id.append(button1);

        button.addEventListener('click', this.prev.bind(this));
        button1.addEventListener('click', this.next.bind(this));
    }

    next() {
        
        for (let i = 0; i < this.children.length; i += 1) {
            this.children[i].style.display = 'none';
        }

        const length = this.children.length;

        if (this.index === (length - 1)) {
            this.index = 0
        } else {
            this.index = this.index + 1;
        }

        this.show(this.index)
    }

    prev() {

        for (let i = 0; i < this.children.length; i += 1) {
            this.children[i].style.display = 'none';
        }

        const length = this.children.length;

        if (this.index === 0) {
            this.index = length - 1
        } else {
            this.index = this.index - 1;
        }

        this.show(this.index)
    }

    destroy() {

        for (let i = 0; i < this.children.length; i += 1) {
            this.children[i].style.display = 'block';
        }

        const button = document.getElementsByClassName('btn1');
        const button1 = document.getElementsByClassName('btn2');

        button[0].remove();
        button1[0].remove();
    }
}

const id = document.getElementById('someId');
const mySlider = new MiniSlider(id);

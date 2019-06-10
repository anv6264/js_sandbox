class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.average = '';
    };

    toString() {
        return `rgb(${this.r.toFixed(0)},${this.g.toFixed(0)},${this.b.toFixed(0)})`
    };

    toBlack() {
        this.r = 0;
        this.g = 0;
        this.b = 0;
    };

    toWhite() {
        this.r = 255;
        this.g = 255;
        this.b = 255;
    };

    getLightness() {
        this.average = (this.r + this.g + this.b) / 3;
    }

    toGreyscale() {
        this.r = this.average;
        this.g = this.average;
        this.b = this.average;

    }

    invert() {
        this.r = 255 - this.r;
        this.g = 255 - this.g;
        this.b = 255 - this.b;

    }

    random() {
        const min = 0;
        const max = 255;
        this.r = Math.floor(Math.random() * (max - min)) + min;
        this.g = Math.floor(Math.random() * (max - min)) + min;
        this.b = Math.floor(Math.random() * (max - min)) + min;
    }

};


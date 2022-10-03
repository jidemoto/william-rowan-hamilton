class Line {
    constructor(slope, intercept) {
        this.slope = slope;
        this.intercept = intercept;
    }

    calculateX(y) {
        return (y - this.intercept) / this.slope;
    }

    calculateY(x) {
        return this.slope * x + this.intercept;
    }
}

module.exports = (slope, intercept) => {
    return new Line(slope, intercept);
};


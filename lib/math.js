const math  = {};

math.getRandomNumber = function(min, max) {
    let minimum = min;
    let maximum = max;
    
    typeof min == 'number' ? minimum : 0;
    typeof max == 'number' ? maximum : 0;

    return Math.floor(Math.random() *  (maximum - minimum + 1) + min);
}

module.exports = math;
/*Values for bounding box. These should be inputted from the question variables*/
var x_min = 0;
var x_max = 12;
var y_min = -1;
var y_max = 12;

var rect_width = 1.5; /*input from question variables*/
var rect_num = 5; /*input from question variables*/

var left_limit = 2;/*input from question variables*/
var right_limit = left_limit + rect_num * rect_width;

var board = JXG.JSXGraph.initBoard('jxgbox', {
    boundingbox: [x_min, y_max, x_max, y_min],
    keepaspectratio: false,
    showCopyright: false,
    axis: true,
    showNavigation: false
});

var f = board.jc.snippet('x*x', true, 'x', true);

var sketch = board.create('functiongraph', [f, -1, 12]);

/* Add labels*/
var label1 = board.create('text', [x_min + 2, y_max - 2, 'f(x)={#func#}'], {
    fixed: true,
    anchorX: 'right',
    fontSize: 15
});

/*Create rectangles*/
for (i = 1; i <= rect_num; i++) {
    var rectangle = board.create('polygon', [
        [left_limit + (i - 1) * rect_width, 0],
        [left_limit + i * rect_width, 0],
        [left_limit + i * rect_width, i + 3], /*Input y-value from question variables*/
        [left_limit + (i - 1) * rect_width, i + 3] /*Input y-value from question variables*/
    ], {
        fixed: true,
        vertices: { visible: false }
    })
};

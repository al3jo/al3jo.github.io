// Extend Raphael to add a pieChart function
// Taken from the examples at: http://raphaeljs.com/
Raphael.fn.pieChart = function (cx, cy, r, values, labels, stroke) {
  var paper = this,
  rad = Math.PI / 180,
  chart = this.set();
  function sector(cx, cy, r, startAngle, endAngle, params) {
    var x1 = cx + r * Math.cos(-startAngle * rad),
    x2 = cx + r * Math.cos(-endAngle * rad),
    y1 = cy + r * Math.sin(-startAngle * rad),
    y2 = cy + r * Math.sin(-endAngle * rad);
    return paper.path(["M", cx, cy, "L", x1, y1, "A", r, r, 0, +(endAngle - startAngle > 180), 0, x2, y2, "z"]).attr(params);
  }
  var angle = 0,
  total = 0,
  start = 0,
  process = function (j) {
    var value = values[j],
    angleplus = 360 * value / total,
    popangle = angle + (angleplus / 2),
    color = Raphael.hsb(start, .75, 1),
    ms = 500,
    delta = 30,
    bcolor = Raphael.hsb(start, 1, 1),
    p = sector(cx, cy, r, angle, angle + angleplus, {fill: "90-" + bcolor + "-" + color, stroke: stroke, "stroke-width": 3}),
    txt = paper.text(cx + (r + delta + 55) * Math.cos(-popangle * rad), cy + (r + delta + 25) * Math.sin(-popangle * rad), labels[j]).
      attr({fill: bcolor, stroke: "none", opacity: 0, "font-size": 14});
    p.mouseover(function () {
      p.stop().animate({transform: "s1.1 1.1 " + cx + " " + cy}, ms, "elastic");
      txt.stop().animate({opacity: 1}, ms, "elastic");
    }).mouseout(function () {
      p.stop().animate({transform: ""}, ms, "elastic");
      txt.stop().animate({opacity: 0}, ms);
    });
    angle += angleplus;
    chart.push(p);
    chart.push(txt);
    start += .1;
  };
  for (var i = 0, ii = values.length; i < ii; i++) {
    total += values[i];
  }
  for (i = 0; i < ii; i++) {
    process(i);
  }
  return chart;
};

// On document load, display the pie chart with some language and statistics
$(function () {
  var values = [37, 12, 8, 6, 3, 4, 24, 2, 2],
  labels = ['Java', 'CSS', 'HTML', 'SQL', 'C', 'Bash', 'JavaScript', 'C++', 'Perl'];
  Raphael("pie-holder", 600, 600).pieChart(300, 270, 200, values, labels, "#fff");
});

function zoomInOut(id) {
  Raphael(function () {
    var el = document.getElementById(id);
    el.style.display = 'none';
    var paper = Raphael(id + '-holder', 350, 350);
    var img = paper.image(el.src, 0, 0, 250, 250);

    img.transform('t62, 62');
    var animate = Raphael.animation({transform: 't62 62 s1 1'}, '2000', function() {
      img.animate(animateBack);
    });
    var animateBack = Raphael.animation({transform: 't62 62 s2 2'}, '2000', function() {
      img.animate(animate);
    });

    img.animate(animate);
  });
}

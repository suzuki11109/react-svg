var w = 750,
    h = 450,
    r = 120;
var isXChecked = true,
    isYChecked = true;
var width = 300,
    height = 200,
    dragbarw = 20;
var drag = d3.behavior.drag().origin(Object).on("drag", dragmove);
var dragright = d3.behavior.drag().origin(Object).on("drag", rdragresize);
var dragleft = d3.behavior.drag().origin(Object).on("drag", ldragresize);
var dragtop = d3.behavior.drag().origin(Object).on("drag", tdragresize);
var dragbottom = d3.behavior.drag().origin(Object).on("drag", bdragresize);
var svg = d3.select("body").append("svg").attr("width", w).attr("height", h)
var newg = svg.append("g").data([{
    x: width / 2,
    y: height / 2
}]);
var dragrect = newg.append("rect").attr("id", "active").attr("x", function(d) {
    return d.x;
}).attr("y", function(d) {
    return d.y;
}).attr("height", height).attr("width", width).attr("fill-opacity", .5).attr(
    "cursor", "move").call(drag);
var dragbarleft = newg.append("rect").attr("x", function(d) {
    return d.x - (dragbarw / 2);
}).attr("y", function(d) {
    return d.y + (dragbarw / 2);
}).attr("height", height - dragbarw).attr("id", "dragleft").attr("width",
    dragbarw).attr("fill", "lightblue").attr("fill-opacity", .5).attr(
    "cursor", "ew-resize").call(dragleft);
var dragbarright = newg.append("rect").attr("x", function(d) {
    return d.x + width - (dragbarw / 2);
}).attr("y", function(d) {
    return d.y + (dragbarw / 2);
}).attr("id", "dragright").attr("height", height - dragbarw).attr("width",
    dragbarw).attr("fill", "lightblue").attr("fill-opacity", .5).attr(
    "cursor", "ew-resize").call(dragright);
var dragbartop = newg.append("rect").attr("x", function(d) {
    return d.x + (dragbarw / 2);
}).attr("y", function(d) {
    return d.y - (dragbarw / 2);
}).attr("height", dragbarw).attr("id", "dragleft").attr("width", width -
    dragbarw).attr("fill", "lightgreen").attr("fill-opacity", .5).attr(
    "cursor", "ns-resize").call(dragtop);
var dragbarbottom = newg.append("rect").attr("x", function(d) {
    return d.x + (dragbarw / 2);
}).attr("y", function(d) {
    return d.y + height - (dragbarw / 2);
}).attr("id", "dragright").attr("height", dragbarw).attr("width", width -
    dragbarw).attr("fill", "lightgreen").attr("fill-opacity", .5).attr(
    "cursor", "ns-resize").call(dragbottom);

function dragmove(d) {
    if (isXChecked) {
        dragrect.attr("x", d.x = Math.max(0, Math.min(w - width, d3.event.x)))
        dragbarleft.attr("x", function(d) {
            return d.x - (dragbarw / 2);
        })
        dragbarright.attr("x", function(d) {
            return d.x + width - (dragbarw / 2);
        })
        dragbartop.attr("x", function(d) {
            return d.x + (dragbarw / 2);
        })
        dragbarbottom.attr("x", function(d) {
            return d.x + (dragbarw / 2);
        })
    }
    if (isYChecked) {
        dragrect.attr("y", d.y = Math.max(0, Math.min(h - height, d3.event.y)));
        dragbarleft.attr("y", function(d) {
            return d.y + (dragbarw / 2);
        });
        dragbarright.attr("y", function(d) {
            return d.y + (dragbarw / 2);
        });
        dragbartop.attr("y", function(d) {
            return d.y - (dragbarw / 2);
        });
        dragbarbottom.attr("y", function(d) {
            return d.y + height - (dragbarw / 2);
        });
    }
}

function ldragresize(d) {
    if (isXChecked) {
        var oldx = d.x;
        d.x = Math.max(0, Math.min(d.x + width - (dragbarw / 2), d3.event.x));
        width = width + (oldx - d.x);
        dragbarleft.attr("x", function(d) {
            return d.x - (dragbarw / 2);
        });
        dragrect.attr("x", function(d) {
            return d.x;
        }).attr("width", width);
        dragbartop.attr("x", function(d) {
            return d.x + (dragbarw / 2);
        }).attr("width", width - dragbarw)
        dragbarbottom.attr("x", function(d) {
            return d.x + (dragbarw / 2);
        }).attr("width", width - dragbarw)
    }
}

function rdragresize(d) {
    if (isXChecked) {
        var dragx = Math.max(d.x + (dragbarw / 2), Math.min(w, d.x + width + d3
            .event.dx));
        width = dragx - d.x;
        dragbarright.attr("x", function(d) {
            return dragx - (dragbarw / 2)
        });
        dragrect.attr("width", width);
        dragbartop.attr("width", width - dragbarw)
        dragbarbottom.attr("width", width - dragbarw)
    }
}

function tdragresize(d) {
    if (isYChecked) {
        var oldy = d.y;
        d.y = Math.max(0, Math.min(d.y + height - (dragbarw / 2), d3.event.y));
        height = height + (oldy - d.y);
        dragbartop.attr("y", function(d) {
            return d.y - (dragbarw / 2);
        });
        dragrect.attr("y", function(d) {
            return d.y;
        }).attr("height", height);
        dragbarleft.attr("y", function(d) {
            return d.y + (dragbarw / 2);
        }).attr("height", height - dragbarw);
        dragbarright.attr("y", function(d) {
            return d.y + (dragbarw / 2);
        }).attr("height", height - dragbarw);
    }
}

function bdragresize(d) {
    if (isYChecked) {
        var dragy = Math.max(d.y + (dragbarw / 2), Math.min(h, d.y + height +
            d3.event.dy));
        height = dragy - d.y;
        dragbarbottom.attr("y", function(d) {
            return dragy - (dragbarw / 2)
        });
        dragrect.attr("height", height);
        dragbarleft.attr("height", height - dragbarw);
        dragbarright.attr("height", height - dragbarw);
    }
}

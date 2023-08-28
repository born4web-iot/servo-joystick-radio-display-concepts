radio.onReceivedValue(function (name, value) {
    if (name == "x_pos") {
        x_pos = value
    }
    if (name == "y_pos") {
        y_pos = value
    }
})
let y_pos = 0
let x_pos = 0
radio.setGroup(5)
basic.forever(function () {
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "X: " + x_pos)
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, "Y: " + y_pos)
})

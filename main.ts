radio.onReceivedValue(function (name, value) {
    if (name == "x_pos") {
        x_pos = value
    }
    if (name == "y_pos") {
        y_pos = value
    }
})
function X_Speed () {
    if (y_pos == 0) {
        left_speed = 0
    }
    if (y_pos == 1) {
        left_speed = 45
    }
    if (y_pos == 2) {
        left_speed = 90
    }
    if (y_pos == 3) {
        left_speed = 135
    }
    if (y_pos == 4) {
        left_speed = 180
    }
}
let left_speed = 0
let y_pos = 0
let x_pos = 0
radio.setGroup(5)
basic.showIcon(IconNames.SmallDiamond)
basic.pause(1000)
basic.clearScreen()
Kitronik_VIEWTEXT32.scrollString(Kitronik_VIEWTEXT32.DisplayLine.Top, "Zaciname")
basic.pause(1000)
Kitronik_VIEWTEXT32.clearDisplay()
basic.forever(function () {
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "X: " + x_pos)
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, "Y: " + y_pos)
    servos.P0.setAngle(left_speed)
    basic.pause(500)
})

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
        left_speed = 50
    }
    if (y_pos == 1) {
        left_speed = 60
    }
    if (y_pos == 2) {
        left_speed = 90
    }
    if (y_pos == 3) {
        left_speed = 120
    }
    if (y_pos == 4) {
        left_speed = 130
    }
}
let y_pos = 0
let x_pos = 0
let left_speed = 0
radio.setGroup(5)
basic.showIcon(IconNames.SmallDiamond)
basic.pause(500)
basic.clearScreen()
Kitronik_VIEWTEXT32.showString("Zaciname !")
basic.pause(500)
Kitronik_VIEWTEXT32.clearDisplay()
left_speed = 90
let right_speed = 90
x_pos = 2
y_pos = 2
basic.forever(function () {
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "X: " + x_pos)
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, "Y: " + y_pos)
    X_Speed()
    servos.P0.setAngle(left_speed)
    basic.pause(500)
})

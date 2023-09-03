function nastav_parametry_motoru () {
    left_speed = 90
    right_speed = 90
    x_pos = 2
    y_pos = 2
    LEFT_FORWARD_LOW = 120
    LEFT_FORWARD_HIGH = 130
    LEFT_BACKWARD_LOW = 60
    LEFT_BACKWARD_HIGH = 50
    NO_SPEED = 90
    RIGHT_FORWARD_LOW = 60
    RIGHT_FORWARD_HIGH = 50
    RIGHT_BACKWARD_LOW = 120
    RIGHT_BACKWARD_HIGH = 130
}
function dopredu_dozadu () {
    if (y_pos == 0) {
        left_speed = LEFT_FORWARD_HIGH
        right_speed = RIGHT_FORWARD_HIGH
    }
    if (y_pos == 1) {
        left_speed = LEFT_FORWARD_LOW
        right_speed = RIGHT_FORWARD_LOW
    }
    if (y_pos == 2) {
        left_speed = NO_SPEED
        right_speed = NO_SPEED
    }
    if (y_pos == 3) {
        left_speed = LEFT_BACKWARD_LOW
        right_speed = RIGHT_BACKWARD_LOW
    }
    if (y_pos == 4) {
        left_speed = LEFT_BACKWARD_HIGH
        right_speed = RIGHT_BACKWARD_HIGH
    }
}
radio.onReceivedValue(function (name, value) {
    if (name == "x_pos") {
        x_pos = value
    }
    if (name == "y_pos") {
        y_pos = value
    }
})
function doleva_doprava () {
    if (x_pos == 0) {
        left_speed = NO_SPEED
    }
    if (x_pos == 1) {
        if (y_pos == 0) {
            left_speed = LEFT_FORWARD_LOW
        }
        if (y_pos == 1) {
            left_speed = NO_SPEED
        }
        if (y_pos == 3) {
            left_speed = NO_SPEED
        }
        if (y_pos == 4) {
            left_speed = LEFT_BACKWARD_LOW
        }
    }
    if (x_pos == 3) {
        if (y_pos == 0) {
            right_speed = RIGHT_FORWARD_LOW
        }
        if (y_pos == 1) {
            right_speed = NO_SPEED
        }
        if (y_pos == 3) {
            right_speed = NO_SPEED
        }
        if (y_pos == 4) {
            right_speed = RIGHT_BACKWARD_LOW
        }
    }
    if (x_pos == 4) {
        right_speed = NO_SPEED
    }
}
let RIGHT_BACKWARD_HIGH = 0
let RIGHT_BACKWARD_LOW = 0
let RIGHT_FORWARD_HIGH = 0
let RIGHT_FORWARD_LOW = 0
let NO_SPEED = 0
let LEFT_BACKWARD_HIGH = 0
let LEFT_BACKWARD_LOW = 0
let LEFT_FORWARD_HIGH = 0
let LEFT_FORWARD_LOW = 0
let y_pos = 0
let x_pos = 0
let right_speed = 0
let left_speed = 0
radio.setGroup(5)
basic.showIcon(IconNames.SmallDiamond)
basic.pause(500)
basic.clearScreen()
Kitronik_VIEWTEXT32.showString("Zaciname !")
basic.pause(500)
Kitronik_VIEWTEXT32.clearDisplay()
nastav_parametry_motoru()
basic.forever(function () {
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "X: " + x_pos)
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, "Y: " + y_pos)
    dopredu_dozadu()
    doleva_doprava()
    servos.P0.setAngle(left_speed)
    servos.P1.setAngle(right_speed)
    basic.pause(200)
})

radio.onReceivedString(function (receivedString) {
    item = receivedString
    if (item.compare("A") == 0) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 225)
        SuperBit.MotorRun(SuperBit.enMotors.M3, 225)
    } else if (item.compare("B") == 0) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
        SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    } else if (item.compare("C") == 0) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
        SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    } else if (item.compare("D") == 0) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
        SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    } else if (item.compare("0") == 0) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
        SuperBit.MotorRun(SuperBit.enMotors.M3, 0)
    } else if (item.compare("E") == 0) {
        angle2 = 60
        if (angle2 < 60) {
            angle2 = 60
        }
        SuperBit.Servo2(SuperBit.enServo.S1, angle2)
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
        SuperBit.RGB_Program().show()
    } else if (item.compare("F") == 0) {
        for (let angle1 = 0; angle1 <= 180; angle1++) {
            angle2 = angle2 - angle1
            if (angle2 < 60) {
                angle2 += 5
            }
            SuperBit.Servo2(SuperBit.enServo.S1, angle2)
        }
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
        SuperBit.RGB_Program().show()
    } else if (item.compare("G") == 0) {
        SuperBit.RGB_Program().clear()
        SuperBit.RGB_Program().show()
    }
})
let angle2 = 0
let item = ""
let angle13 = 0
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showLeds(`
    . # . # .
    # # . . #
    . . # . .
    # . . # #
    . # . # .
    `)
angle13 = 240
SuperBit.Servo2(SuperBit.enServo.S1, 240)
basic.forever(function () {
	
})

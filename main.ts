basic.forever(function () {
    if (bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.go(BBDirection.Forward, 60)
    } else {
        bitbot.rotate(BBRobotDirection.Left, 60)
    }
})
basic.forever(function () {
    if (bitbot.readLine(BBLineSensor.Left) == 1) {
        bitbot.go(BBDirection.Forward, 60)
    } else {
        bitbot.rotate(BBRobotDirection.Right, 60)
    }
})

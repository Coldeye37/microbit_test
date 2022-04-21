// tests go here; this will not be compiled when this package is used as an extension.
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(sensor.wendu())
})

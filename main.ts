OLED.init(128, 64)
OLED.writeString("5 Button Test")
basic.forever(function () {
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P0)) {
        OLED.clear()
        OLED.writeStringNewLine("A")
    }
    if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P0)) {
        OLED.clear()
        OLED.writeStringNewLine("B")
    }
    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P0)) {
        OLED.clear()
        OLED.writeStringNewLine("C")
    }
    if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P0)) {
        OLED.clear()
        OLED.writeStringNewLine("D")
    }
    if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P0)) {
        OLED.clear()
        OLED.writeStringNewLine("E")
    }
})

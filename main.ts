

/**
* 使用此文件来定义自定义函数和图形块。
* 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
*/

let LOW = 0
let HIGH = 0

pins.onPulsed(DigitalPin.P8, PulseValue.Low, function on_pulsed_p8_low() {

    LOW = pins.pulseDuration()
})
pins.onPulsed(DigitalPin.P8, PulseValue.High, function on_pulsed_p8_high() {

    HIGH = pins.pulseDuration()
})

/**
 * Sensor blocks
 */
//% weight=100 color=#000000 icon="\uf015"
namespace sensor {
    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function wendu(): number {
        //return value <= 1 ? value : fib(value -1) + fib(value - 2);
        return 280 * (HIGH / (HIGH + LOW) - 0.125) - 20;
    }
}

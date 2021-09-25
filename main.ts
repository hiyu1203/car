let l_정지 = 0
let r_정지 = 0
let 거리 = 0
let all_정지 = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        a_이동()
        a_led()
    }
    if (receivedNumber == 2) {
        b_이동()
        b_led()
    }
})
function 경고음 () {
    music.setVolume(80)
    music.ringTone(740)
}
function b_led () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P12, 0)
    basic.pause(100)
}
function b_이동 () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    l_정지 = 1
    if (l_정지 == 1) {
        l_정지 = 0
        maqueen.motorStop(maqueen.Motors.M1)
    }
}
function a_이동 () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    r_정지 = 1
    if (r_정지 == 1) {
        r_정지 = 0
        maqueen.motorStop(maqueen.Motors.M2)
    }
}
function a_led () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(100)
}
basic.forever(function () {
    if (거리 < 3) {
        경고음()
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        basic.pause(200)
        all_정지 = 1
    } else {
        if (all_정지 == 1) {
            all_정지 = 0
            maqueen.motorStop(maqueen.Motors.All)
            music.stopAllSounds()
        }
    }
})
basic.forever(function () {
    radio.setGroup(5)
})
basic.forever(function () {
    거리 = maqueen.Ultrasonic(PingUnit.Centimeters)
})

basic.showString("Hi Clemens!")
basic.forever(function () {
    led.toggle(randint(0, 4), randint(0, 4))
})

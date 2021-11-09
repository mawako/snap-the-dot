input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
        basic.showNumber(game.score())
    }
})
let sprite: game.LedSprite = null
basic.showString("hi.")
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
sprite = game.createSprite(2, 1)
sprite = game.createSprite(2, 3)
sprite = game.createSprite(2, 2)
basic.forever(function () {
    sprite.move(1)
    basic.pause(140)
    sprite.ifOnEdgeBounce()
})

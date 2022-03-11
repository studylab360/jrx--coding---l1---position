namespace SpriteKind {
    export const friend = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.friend, function (sprite, otherSprite) {
    game.splash("Yay, You've found your friend", "press A to reset")
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    movePlayer(me1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    increaseSize(me1)
})
function increaseSize (mySprite: Sprite) {
    me1.changeScale(2, ScaleAnchor.Middle)
}
function movePlayer (mySprite: Sprite) {
    me1.x += 72
    me1.y += 86
    me1.x += 43
}
let me1: Sprite = null
scene.setBackgroundColor(9)
me1 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 7 7 f f f . . . . 
    . . . f f f 7 7 7 7 f f f . . . 
    . . f f f 7 7 7 7 7 7 f f f . . 
    . . f f 7 7 7 7 7 7 7 7 7 f . . 
    . . f 7 7 f f f f f f 7 7 f . . 
    . . f f f f 7 7 7 7 f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
me1.setPosition(20, 20)
me1.setStayInScreen(true)
controller.moveSprite(me1)
let myFriend = sprites.create(img`
    . . . f f f f f . . . . 
    . . f e e e e e f f . . 
    . f e e e e e e e f f . 
    f e e e e e e e f f f f 
    f e e 4 e e e f f f f f 
    f e e 4 4 e e e f f f f 
    f f e 4 4 4 4 4 f f f f 
    f f e 4 4 f f 4 e 4 f f 
    . f f d d d d 4 d 4 f . 
    . . f b b d d 4 f f f . 
    . . f e 4 4 4 e e f . . 
    . . f 1 1 1 e d d 4 . . 
    . . f 1 1 1 e d d e . . 
    . . f 6 6 6 f e e f . . 
    . . . f f f f f f . . . 
    . . . . . f f f . . . . 
    `, SpriteKind.friend)
myFriend.setPosition(138, 108)
tiles.setCurrentTilemap(tilemap`lesson1`)
game.onUpdateInterval(500, function () {
    me1.sayText("x =" + Math.round(me1.x) + "," + ("y =" + Math.round(me1.y)))
})

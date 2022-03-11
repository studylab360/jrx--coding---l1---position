@namespace
class SpriteKind:
    friend = SpriteKind.create()

def on_a_pressed():
    game.reset()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite, otherSprite):
    game.splash("Yay, You've found your friend", "press A to reset")
sprites.on_overlap(SpriteKind.player, SpriteKind.friend, on_on_overlap)

scene.set_background_color(9)
me1 = sprites.create(img("""
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
    """),
    SpriteKind.player)
me1.set_position(20, 20)
me1.set_stay_in_screen(True)
controller.move_sprite(me1)
myFriend = sprites.create(img("""
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
    """),
    SpriteKind.friend)
myFriend.set_position(138, 108)
tiles.set_current_tilemap(tilemap("""
    lesson1
"""))

def on_update_interval():
    me1.say_text("x =" + str(Math.round(me1.x)) + "," + ("y =" + str(Math.round(me1.y))))
game.on_update_interval(500, on_update_interval)

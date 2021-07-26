enum ActionKind {
    Walking,
    Idle,
    Jumping,
    runRight,
    runLeft
}
namespace SpriteKind {
    export const enemy1 = SpriteKind.create()
}
function animateRUN () {
    animRunRight = animation.createAnimation(ActionKind.runRight, 200)
    animation.attachAnimation(o_hero, animRunRight)
    animRunRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . . . . . f e e f . . . . . . . 
        . . . . . . f b f f f f . . . . 
        . . . . . f b b b b b b f . . . 
        . . . . f b b b b b b b f . . . 
        . . . . f b b 1 1 1 1 1 f . . . 
        . . . . f b b 1 f f f f f . . . 
        . . . . f b b 1 1 1 f 1 f . . . 
        . . . . . f b b e e 4 e f . . . 
        . . . . e f e e b b b b f . . . 
        . . e e e f b b b b b b f . . . 
        . . . e e f b b f f f f . . . . 
        . . . . . f b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animRunRight.addAnimationFrame(img`
        . . . . . . . f . . . . . . . . 
        . . . . . f f e f . . . . . . . 
        . . . . . f e b f f f f . . . . 
        . . . . . f b b b b b b f . . . 
        . . . . f b b 1 1 1 1 1 f . . . 
        . . . . f b b 1 f f f f f . . . 
        . . . . f b b 1 1 1 f 1 f . . . 
        . . . . f b b b b 1 1 1 f . . . 
        . . . . . f b b e e 4 e f . . . 
        . . . . e f e e b b b b f . . . 
        . . e e e f b b b b b b b f . . 
        . . . e f b b f f f f f b f . . 
        . . . . f f f . . . . . f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animRunRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f e f . . . . . . . 
        . . . . . f e b f f f f . . . . 
        . . . . . f b b b b b b f . . . 
        . . . . f b b 1 1 1 1 1 f . . . 
        . . . . f b b 1 f f f f f . . . 
        . . . . f b b 1 1 1 f 1 f . . . 
        . . . . f b b b b 1 1 1 f . . . 
        . . . . . f b b e e 4 e f . . . 
        . . . . e f e e b b b b f . . . 
        . . e e f b b b b b b b f . . . 
        . . . e f f f f f f f b f . . . 
        . . . . . . . . . . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animRunRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . . . . . f e e f . . . . . . . 
        . . . . . . f b f f f f . . . . 
        . . . . . f b b b b b b f . . . 
        . . . . f b b b b b b b f . . . 
        . . . . f b b 1 1 1 1 1 f . . . 
        . . . . f b b 1 f f f f f . . . 
        . . . . f b b 1 1 1 f 1 f . . . 
        . . . . . f b b e e 4 e f . . . 
        . . . . e f e e b b b b f . . . 
        . . e e e f b b b b b b f . . . 
        . . . e e e f f f f f b f . . . 
        . . . . . . . . . f c f . . . . 
        . . . . . . . . . f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animRunRight.addAnimationFrame(img`
        . . . . . . . f . . . . . . . . 
        . . . . . f f e f . . . . . . . 
        . . . . . f e b f f f f . . . . 
        . . . . . f b b b b b b f . . . 
        . . . . f b b 1 1 1 1 1 f . . . 
        . . . . f b b 1 f f f f f . . . 
        . . . . f b b 1 1 1 f 1 f . . . 
        . . . . f b b b b 1 1 1 f . . . 
        . . . . . f b b e e 4 e f . . . 
        . . . . . f e e b b b b f . . . 
        . . . . e f b b b b b b f . . . 
        . . . e e f b b b b b b f . . . 
        . . e e e e f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animRunRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f e f . . . . . . . 
        . . . . . f e b f f f f . . . . 
        . . . . . f b b b b b b f . . . 
        . . . . f b b 1 1 1 1 1 f . . . 
        . . . . f b b 1 f f f f f . . . 
        . . . . f b b 1 1 1 f 1 f . . . 
        . . . . f b b b b 1 1 1 f . . . 
        . . . . . f b b e e 4 e f . . . 
        . . . e e f e e b b b b f . . . 
        . . e e e f b b b b b b f . . . 
        . . . . . . f b b f f f . . . . 
        . . . . . . . f c f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animRunLeft = animation.createAnimation(ActionKind.runLeft, 200)
    animation.attachAnimation(o_hero, animRunLeft)
    animRunLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f e f f . . . . . 
        . . . . f f f f b e f . . . . . 
        . . . f b b b b b b f . . . . . 
        . . . f 1 1 1 1 1 b b f . . . . 
        . . . f f f f f 1 b b f . . . . 
        . . . f 1 f 1 1 1 b b f . . . . 
        . . . f 1 1 1 b b b b f . . . . 
        . . . f e 4 e e b b f . . . . . 
        . . . f b b b b e e f e e . . . 
        . . . f b b b b b b f e e e . . 
        . . . . f f f b b f . . . . . . 
        . . . . . . f c f . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animRunLeft.addAnimationFrame(img`
        . . . . . . . . f . . . . . . . 
        . . . . . . . f e f f . . . . . 
        . . . . f f f f b e f . . . . . 
        . . . f b b b b b b f . . . . . 
        . . . f 1 1 1 1 1 b b f . . . . 
        . . . f f f f f 1 b b f . . . . 
        . . . f 1 f 1 1 1 b b f . . . . 
        . . . f 1 1 1 b b b b f . . . . 
        . . . f e 4 e e b b f . . . . . 
        . . . f b b b b e e f . . . . . 
        . . . f b b b b b b f e . . . . 
        . . . f b b b b b b f e e . . . 
        . . . . f f f f f f e e e e . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animRunLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f f . . . . . 
        . . . . . . . f e e f . . . . . 
        . . . . f f f f b f . . . . . . 
        . . . f b b b b b b f . . . . . 
        . . . f b b b b b b b f . . . . 
        . . . f 1 1 1 1 1 b b f . . . . 
        . . . f f f f f 1 b b f . . . . 
        . . . f 1 f 1 1 1 b b f . . . . 
        . . . f e 4 e e b b f . . . . . 
        . . . f b b b b e e f e . . . . 
        . . . f b b b b b b f e e e . . 
        . . . f b f f f f f e e e . . . 
        . . . . f c f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animRunLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f e f f . . . . . 
        . . . . f f f f b e f . . . . . 
        . . . f b b b b b b f . . . . . 
        . . . f 1 1 1 1 1 b b f . . . . 
        . . . f f f f f 1 b b f . . . . 
        . . . f 1 f 1 1 1 b b f . . . . 
        . . . f 1 1 1 b b b b f . . . . 
        . . . f e 4 e e b b f . . . . . 
        . . . f b b b b e e f e . . . . 
        . . . f b b b b b b b f e e . . 
        . . . f b f f f f f f f e . . . 
        . . . f f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animRunLeft.addAnimationFrame(img`
        . . . . . . . . f . . . . . . . 
        . . . . . . . f e f f . . . . . 
        . . . . f f f f b e f . . . . . 
        . . . f b b b b b b f . . . . . 
        . . . f 1 1 1 1 1 b b f . . . . 
        . . . f f f f f 1 b b f . . . . 
        . . . f 1 f 1 1 1 b b f . . . . 
        . . . f 1 1 1 b b b b f . . . . 
        . . . f e 4 e e b b f . . . . . 
        . . . f b b b b e e f e . . . . 
        . . f b b b b b b b f e e e . . 
        . . f b f f f f f b b f e . . . 
        . . f f . . . . . f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animRunLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f f . . . . . 
        . . . . . . . f e e f . . . . . 
        . . . . f f f f b f . . . . . . 
        . . . f b b b b b b f . . . . . 
        . . . f b b b b b b b f . . . . 
        . . . f 1 1 1 1 1 b b f . . . . 
        . . . f f f f f 1 b b f . . . . 
        . . . f 1 f 1 1 1 b b f . . . . 
        . . . f e 4 e e b b f . . . . . 
        . . . f b b b b e e f e . . . . 
        . . . f b b b b b b f e e e . . 
        . . . . f f f f b b f e e . . . 
        . . . . . . . . f b f . . . . . 
        . . . . . . . . . f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
sprites.onDestroyed(SpriteKind.enemy1, function (sprite) {
    info.changeLifeBy(-1)
    music.smallCrash.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 100)
    music.magicWand.play()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy1, function (sprite, otherSprite) {
    otherSprite.destroy()
    o_hero.startEffect(effects.trail)
})
let o_heal: Sprite = null
let o_enemy1: Sprite = null
let animRunLeft: animation.Animation = null
let animRunRight: animation.Animation = null
let o_hero: Sprite = null
scene.setBackgroundImage(img`
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceececceeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffccccccceeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeececcecceccecceccffccccccecceecceceeceececceeccececcee
    eeeeeeeeeeeeeecceeeeeeeeceeeeeeeeeeeeeeceeeeceeeeeeeeeeeeccceeeeeceeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeceeeecccccfccfccfccfccfccccccccfccfccfccfccfccfccfccfccfcc
    eeeeeeeeeeeeeeeeeeeceeeeeeceeeeeeeeeceeeeeceeeeeeeeeeeecceeeeeeceeeeeeeeeeceeeeeeeeeecceccccceccecceeceeeeecfccfccfccfccfcfcccccccccccffcccccccffccfcffccfccccfc
    eeeeeeeeeceeeeeeeeeeceeeeeeeeeceeeeeeeeeeeeeeecccceeeeeeeeeeeceeeeeeeccceeeeeeeeeeeecceeeeeeeeecceeeeeeeebefccccccccccccccffccccccccfcfccccccffcffccfccccccffffc
    eeeeeeeeeeeeeeeeceeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeecceeeecccceeeeeeceeeeeeeeeeeeceeeeeeeeeeebbeeeeeeeeeeecfccccccccccccccccccccccccccccccffffffcccccccffcccfccc
    eeeeeeeeeeeeeeeeeeceeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeceecceeeeeeeecceeeeeeeeeeeeecceeeeeeeebbeebeeeeeeeececfccccfccccccfcccffcccccccccccccfcccfffffccccccccccccc
    eeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeebeecccceeeeebbeebbbeeeeeeeccceeecfccccfffccfcccccffccceccccccccccccccccccccccccccccccc
    ceeeeeeeeeeeeeeeebeeeeeebbbeeeeeeeeeeeebeeeeeeeceeeeebeeebbbbebbeeeeeeeebbeceeeeeebbbbbbbbbbbbeeeeceeeebbefffccccfffcccccccffcccccccccccccccfffffcccccffffccffff
    eeeeeeeeeeeeeebbbeeeeeebbeeeeeeeeeeeeebeeeeeccceeeebbbbbeebbbeeeeeeeeeeeeeeeeeebbeebbbbbbbbbbeeeeeebbbbebefffccfccccfccccfcffcccccccfcccffffccfffffcfccffffffffc
    eeeeeeeeeeeeebbeeeeeeeebeeebbeeeeeeeeeeceeeeeceebebbbbbbbbbeeeeebbbeeeecceeeeeeeeeeebbbbbbeeeeeeeeeeeeeeecfffccccccccccccccffccceccccccccccccccfcfccccccccccfffc
    eeebbbeeebbbbbbeeeeeebbeebbeeeeeeeeeeeeeeeeceeeeeebeebbbbeeeebbbbeeeebeeeeeeeeeeeeeeeeebbbeeeeeeebeeeeebbcfffccfccfcfffffccffccccccccffcfcccccffffffffcccccfffff
    ebbbbbbbbbbbbbebeeebbeeeebeeeeeeeeeeeeeeeebeebbeeeeeebbbeebbbbbbeeebbbbbeeeebbeeebbbeeebbbbeeebbbbbbbbbbbcfffccccccccffffccffccccccccfffffcccccccccccccccccccccc
    bbbbbbebbbbeeeeeebeeebecbeeceecceeeeeecce4ccebbbbecbbbeeeeeebbeeebbbbbbbbeebbbbbbbbbbeebeebbbbbbbbbbbbebbcffffcccccccfffccfffcccccccccfcffcccccccccccccccccccccf
    bbbebbeebeeeeeeebeeebbeceecccecceeeeeeecebecebbeeeceeeebbeebbeeebbbbbbbbbbbbbbbbbbbbbeeeeeeebbbbebbbbbb4efffffccffffffccccfffccccccccccccccccccccccccccccccccccc
    beeeecceeeeceeeeeeebbbecebcccccceeeeeeeeeeeeeeeeeecceeebbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeebbbbbbbbeffffffccfffffffffffcccccceccccccccccccfcccccccccccccccc
    beebbcceebeccebeeceeeeececcccccceeeeeeeeeeeeeeeebccceeeeebbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbeeeeeeebeebbcffffffccccffffffffffcccccccffffccffffccffffffffffffcfff
    bbbbbccebbeccc4bbeeeeecccfcccccccccccccccccccccccccceebeeebbbbbbbbeebbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeecffffffcccccfffffffffcccecccfccccccccccccccccccccccccccc
    bbbbbcce44bccebbbbbbebcfccccccccccccccccccecccccccccbeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeefffffffcccccfffffffffccccccfccccccccccffccccfccccccfcccc
    bbbbeccebbecccebbbbbbecccccccccccccccccccceccccccccceeeeeebbbbbbbbeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbeffffffffccccfffffffffcccccccffffffcfffffffcffffffcffffff
    bbccccceccccccebbbb4ecccccccccccccccccccccecccccccccebbbeeecceeeeeebbbbbbbbbbbbbbeebbbbbbbbbbbbbbbbbbbbcffffffffcccccfcffffffccceccccccccfcccccccccccccccccccccf
    bbcccceeeeeeece4bb4ecccccccccccccccccccccccccccccccce4bbbbcfcbbbecbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcfffffffffccccfcccffffccccccccccccfcccfcfcccccccccccccccc
    bbcccccccccceecebeeecfecccccccccccccccccccccccccccccc4bbb4efe4bbbeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcfffffffffccccccccffffcccccccccccccccccfcfccccccccccccccc
    bbcccccccccceeccecceeceeccccccccccccccccccccccccccccce4bbbefe4bbbbbbbeebbbbbbbeebbbbbbbbbbbbbbbbbbbebbeffffffffffcccccccccccfcccccccfccfffffccffffffffccffffffcf
    bbbecceccccceeeeeeeeeeeeccccccccccccccccccccccccccccccb4ebbfe4bbbbbbbbbebbbbbbbeeebbbbbbbbbbbbbbbbbbb4effffffffffccccccccccccffcffcccffcccccffccccccccffccfccfcc
    bb4ecccceecceeeceeecceeecccccccccceeeceeeeeeeeeeeeeeebb4cceccbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbb4cfffffffffffccffffcfffccfffcccfccccccccccccccccccffffccccc
    bb4ecccccecceeefceecceeeccccccccceecccccccccccccccccccccccccccb4bbbbbebbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbcfffffffffffccccccccffcccccccccfcccffffcffffccccffffffccff
    bb4ecccccccceeeeeeeeeeeecccccccccecfcccccccccccffccccccfcfffffcbbbbeeeeebbbbbbbbbbebbbbbbbbbbbbbbeeebecffffffffffffcccccffffcffcccccffccffcccccccccccccccccccccc
    bb4ecccccccceeeeeeeeeeeeccccccccccfccccccccccccccccccccffccffffcbbbbbeebbbbbbbbbeeebbbbbbbeebbbbbbbebefffffffffffffffccccffccccccccccffcffccccccccccccccccfccccc
    bb4ecccccccceecccceeeeeeeeeecccccfccccccccccccccccccccfceeeccccfc44bbeebbbbbbbbeebbbbbbbbbcebbbbbbbb4efffffffffffffccccccccfffccccccccffccffccffffffffcffcffcccc
    bb4ecccccccceeccccceeeeeeeeeccccfffccccccccccccccccccfceeeeeecccfcb4bbeeeeeeeeeeeeeebbbbbecebbbbbbbb4cfffffffffffffccccccccccccccccccccccccccccccccccccccccccccc
    bb4ecccccccceeccccceeeeeeeeecccfcffccccccfccccccccccfceeeeeeeccccfcb44eceeeeeebbeeeebbeebecebbbbbbbbbcffffffffffffffcfcfffcfffcccfffffcfffffffcfcccfcfffffccffff
    bb4eccccccccecccccceeceeeeeeccfccffccccccfccccccccccceeeeeeeeeccccfcbeeeeeeebbbbbbbbeeeeeeceebbbbbbbefffffffffffffffcffccccccccccccccfccccccccccccccccccccfccccc
    bb4eccccccccccccccceefeeeeeecfcccffcccccccccccccccfceeeeeeeeeeeccccfcebbbbbbbbbbbbbbeebbecceebbbbbb4efffffffffffffffcccccccccccccccccccccccccccccccccccccccccccc
    bbbcccccccccccccccceeceeeeecfccccfffccceccccfccccfceeeeeeeeeeeeeccccfcbbbbbbbbbbbbbbbbbbbbcebbbbbbb4effffffffffffffffcfffffffffffffcffffffffffffffffffcfcfffffff
    b4eccccccccccccccccee44eeecfcccccffccccccfccccccfceeeeeeeeeeeeeeeccccfcbbbbbbbbbbbbbbbbb4bcebbbbbbbbcffffffffffffffffcccccccccccccccccccccccccfcfccccccccccccccc
    4bccccccccccccccccccccccecffccccfffccccccfcccccfceeeeeeeeeeeeeeeeeeccffcbbbbbbbbbbbeebbbbecebbbbbbbbcffffffffffffffffcccccccccccccccccccccccccffcfcccccccccccccc
    bcccccccccccccccccccccccfffffffffffceececfccccfceeeeeeeeeeeeeeeeeeeecfffcbbbbbbb4ccccccccccce4bbbbbbcfffffffffffffffffcccfcfcccccccccccffccfffccccccccfffffffffc
    ccccccccecccccccccccccccfccccfffffffccfccccccfceeeeeeeeeeeeeeeeeeeeeeffcfcebbbbbcccccccccccfc4bbbb4cffffffffffffffffffccccccccccccccccccccccccccccccccccccfccccc
    cccccccccccccccccccccccfcccccccfcccfffffcccccceeeeeeeeeeeeeeeeeeeeceecfccffbbebccccccccccccccb4bbbbecfffffffffffffffffcccfcccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccffffffcfcccfcccccccccfceeeeeeeeeeeeeeeeeeeeeceecfcccfccccccccccccccccecc4bbbb4efcfffffffffffffffcccccccccccccccccccccccccecccccccccccccccc
    cccccccceccccccccccccfffffffccccccccccccccffceeeeeeeeeeeeeeeeeeeeeeeecfccccffccccccccccccceecfe4bbb4cfcfffffffffffffffcccccceeccccecccecccceeeeeceeeeecccceccccc
    ccccccccecccccccccccfcccccccccfccccccccccfccceeeeeeeeeeeeeeeeeeeeeeeecfcccccfcccccccccccceeeeccb4bebcfcffffffffffffffccccccceeeeecccceeeeeeeeeeceeeeeccccceecccc
    cccccccceccccccccccfccccccccccccccfcccccffccceeeeeeeeeeeeeeeeeeeeeeeecfccccccfcccccccccceeeeeecc4bebcfcfffffffffffffffccccccceeeeeceeeeeeeeeeeeceeeeeecccceeccce
    ccccccccceccccccccfffcccccccccccccccccccffccceeeeeeeeeeeeeeeeeeeeeeeecfcccecccfcccccccceeeeeeeece4ebcfcfffffffffffffffccccceeeeeeeeeeeeeeeeeeeeeeeeeeecccceeeeee
    cccccccccccccccccfffcccccccccccccffffffccfccceeeeeeeeeeeeeeeeeeceeeeeffccceecccfccccccceeeeeeeeccbeecfcffffffffffffffcccccceceeeeeecffffffffceeeeeeeeecccceeeeee
    ccccccccccccccccffcccccccccccccccffccfcccfccceecccccceeeeeeeeeecccceecfccceeecccfccccceeeeeeeeeecccecfcffffffffffffffccccccecceeeeeecfcccccfceeeeeeeeecccceeccee
    cccccccccccccccfcccccccccccccccccccccccccfcccecfccccfffffffffcccccfcecfccceeeeccffccceeebecfceeecccecfcffffffffffffffcccccceeeeeeeeeccccccccceeeeeeeeecccceeeeee
    ccccccccccccccfcccccccccccccccfccfffcccccfccceccccfccffffffffccfccccecfccceeeeeccccceeeeecfcceeeeccecfcffffffffffffffcccccceeeeeeeeeccccccccceeeeeeeeeccccceeeee
    ccccccccccccccccfffffffffffffffffccccccccfcccecccccccffffffffcccccccecfccceeeeeeecceeeeeeecfceeeeecccfcffffffffffffffcfcccceeeeeeeecccccccccceeeeeeeeeccccceeeee
    ccccccccccccccccfffffffffffffffffcccccccffccceccccfcfffffffffccfccccecfccceeeeeeccceeeeeeeeeeeeeeecccfcffffffffffffffcccccceeeeeeeeecccccccccceceeeeeecccceeeeee
    ccccccccccccccccfffffffffffffffffcceecccffccceccccccfffffffffcccccccecfccceeeeeeccceeeeeeeeeeeeeeeecffcffffffffffffffcccccceeeeeeeeecccccccfceeeeeeeeecccceeeeee
    ccccccccccccccccffffffffffffffffcceeeceecfccceccccccfffffffffcccccccecfccceeeceeccc4beeeeeeeeeeeeeeecfcffffffffffffffcccccceeeeeeeeecfffffffceeeeeeeeecccceeeeee
    ccccccccccccccccfffffffffffffffffceeceeecfccceccccccfffffffffcccccccecfccceeceeeccceeeeeeeeeeeeeeee4cfcffffffffffffffcccccceeeeeeeeeccccccccceeeeeeeeecccceeeeee
    ccccccccccccccccfffffffffffffffffceceeeecfccceccccccfffffffffcccccccecfccceceeeeccceeeeeeeeeeeee4eebcfcffffffffffffffcccccceeeeeeeeeccccccccceeeeeeeeecccceeeeee
    ccccccccccccccccfffffffffffffffffceeeeeecfccceccccccfffffffffccfccccecfccceeeeeeccceeeeeeeeeeeeeeee4cfcffffffffffffffccccccceeeeeeeccffccfcfceeeeeeeeecccceeeeee
    ccccccccccccccccfffffffffffffffffceeeeeecfccceccccccfffffffffcccccccecfccceeeeeeccceecfceecfceecfceecfcfffffffffffffffccccccceeeeeecccccccccceeeeeeeeecccceeeeee
    ccccccccccccccccfffffffffffffffffceeeeeecfccceccfcccfffffffffcccccccecfccceeeeeeccceecfceecfceecfceecfcffffffffffffffcfcccceececeeeeeeeeeeeeeeeeeeeeeeccccceeeee
    ccccccccccccccccfffffffffffffffffceeeeeecfccceccccccffffffffffccccccecfccceeeeeeccceecfceecfceecfceecfcffffffffffffffccccccceeceeeeeeeeeeeeeeeeeeeeeeeccccceeeee
    ccccccccccccccccfffffffffffffffffccceececfcccecccfcccccccccccccffcceeccccceeeeeeccceeeceeeeceeeeceeccfcffffffffffffffccccccceeceeeeeeeeeeeeeeeeeeeeeeecccceeeeee
    ccccccccccccccccffffffffffffffffccccccccffccceccccffcccccccccccccfceecccccceeeeeccceeeeeeeeeeeeeeccccfcffffffffffffffccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccfffffffffffffffffccccccecfccceeeeeccccccccccccceeeeeefccccceeeeeccceeeeeeeeeeeeccccccfcfccccccccccccffcccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccfffffffffffffffffccccfcecfccceeeecceeeeeeeeeeeeeeeeeefccccfceeeeccceeeeeeeeeeccccccccfcffccccccccccfffcccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccfffffffffffffffffceeeceecfccceeeeceeeeeeeeeeeeeeeeeecfcccccceeeeccceeccceecccccccccccfcfccccccccccccffccccccccccccccccffcccccccccccccccccccffccc
    ccccccccccccccccfffffffffffffffffceeeeecffcccceeeeeeeeeeeeeeeeeeeeeecfccccccceeeccceecfccccccecccccccfcfffffffffffffffcccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccfffffffffffffffffceeeccccfcfccecceeeceeeceeecceeeeeccffffccccceeccceeccccccccecccccccffffffffffffffffffccccceeeeeeccceeceeeeeeeeeeeeecccccceeeee
    ccccccccccccccccffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccfccccceccccccccceccccecffcffcfffccfcfcccfcccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccfffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccceccceeecccccccffcfcccfcfcccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcfcccccfcccccccccccccccccccccccccccccccccccccfccccccccccccc
    ccccccccccccccccffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffccccccffcfcffccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccffffffffffffffffffffffffffccfffffffffffffffffffffffffffcffffffffcccccccccccccccccccccfffffffffffffffffccffffffffffffffffffffffcccccfffffffffffff
    ccccccccccccccccfffffffffffffffffccccccccfccccfccccccccccccccccffcfccfcccccccccccccccccccccccccccccccffffffffffffffffffccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccfffffffffffffffffcccceeecfccccceeeeeeeeeeeeeeeeccccccffcccceeeeecccccccccccccccccccccfffffffffffffffffcccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccffffffffffffffffcccccccecfcccceeeeeeeeeeeeeeeeeecccccffccceeeeeecccccccccccccccccccccfffffffffffffffffccccccccccccccccccccccccccffcccccccccccccc
    ccccccccccccccccfffffffffffffffffccccccecfcccceeeeeeeeeeeeeeeeeeeccccfcccceeeeeecccccccccccccccccccccffffffffffffffffffcccccccccccccccccccccccfccccccccccccccccc
    ccccccccccccccccffffffffffffffffcccccccecfccceeeeeeeceeeeeceeeeeeecccfcccceeeeeecccccccccccccccccccccffffffffffffffffffccccccccccccccccccccccffccccccccfcccccccc
    ccccccccccccccccffffffffffffffffcccccccecfccceeeccecccecccceeeecceecffcccceeeeeecccccccccccccccccccccffffffffffffffffffcccccccccccccccccccccccccffcccffcecfceccc
    ccccccccccccccccfffffffffffffffffcceeeeecfccceeeffeeeeeeeeeeeeeeceeecffccceeeeeecccccccccccccccccccccffffffffffffffffffccccccccccccccffffccccccecceeeccccccccccc
    ccccccccccccccccfffffffffffffffffceeeeeecfccceeefceccccccccccccceeeeecfccceeeeeecccccccccccccccccccccffffffffffffffffffccccccccccccfcccccffccccceeeeeeecffffffff
    ccccccccccccccccfffffffffffffffffceeeeeecfccceeefceffffffffffffceceeecfccceeeeeecccccccccccccccccccccffffffffffffffffffcccccccccccfcccccccffccccccccccecffffffff
    ccccccccccccccccfffffffffffffffffceeeeeecfccceeefcefcccfccccccfceceeecfccceeeeeecccccccccccccccccccccffffffffffffffffffccccccccccfcccccccccffccccccccceccfffffff
    ccccccccccccccccfffffffccffffffffceeeeeecfccceeefcefcfccccccccfceceeecfccceeeeeecccccccccccccccccccccfffffffffffffffffffccccccccfcccccccccccfccccccccceccfffffff
    ccccccccccccccccfffffffccfffffffffeeeeeecfccceeefcefccccccccccfceeeeecfccceeeeeccccccccccccccccccccccffffffffffffffffffcccccccccfcccccccccfcffcccccccceccfffffff
    ccccccccccccccccfffffffccffffffffceeeeeecfccceeefcefccccccccccfceeeeecfccceeeeeccccccccccccccccccccccffffffffffffffffffcccccccccccccccccccccffccccccccecffffffff
    ccccccccccccccccfffffffccffffffffceeeeeecfccceeefcccccccccccccfceeeeecfccceeeeeecccccccccccccccccccccffffffffffffffffffcccccccccfcccccccccccffccccccccecffffffff
    ccccccccccccccccfffffffccffffffffceeeeeecfccceecfcecccccccccccfceeeeecfccceeeeeecccccccccccccccccccccffffffffffffffffffcccccccccccccccccccccffccccccccecffffffff
    cccccccecccccccccecffffccffffffffceeeeeecfccceeefceccccccccccefceceeeffccceeeeeecccccccccccccccccccccffffffffffffffffffcccccccccccccccccccccffcccccccccccfffffff
    cccccfceeeeeeeeeeeeecffccffffffffceeeeeecfccceeefcecccccccccccfceceeecfccceeeeeecccccccccccccccccccccffffffffffffffffffcccccccccccccccccccccffccccffcccccfffffff
    cccccfffeeccccccccceeffccffffffffceeeeeecfccceeefcecccccccccccfceeeeecfccceeeeeecccccccccccccccccccccfffffffccccfffffffcccccccccccccccccccccffccccccccccffffffff
    cccccfcfeeffffccfffceffccffffffffcceeeeecfccceeefcecccccccccecfceeeeeffccceeeeeeccccccccccccccccccccccffffccccccccffffffccccccccccccccccccccffcccccccccccccccccc
    cccccfcfeeccccccccfceffccfffffffffceeeeecfccceeefccffffffffffffceeeeeffccceeeeecccccccccccccccecccccecffffecccccceffffcccccccccccccceeeeeeeccfcccccccccccccccccc
    cccccfcfcecccccccccceffccffffffffceeeeeecfccceeefcefccccccccccfceeeeecfccceeeeeccccccccccccccccceeeeccffffcceeeeecfffffccccccccccccccccccccccfcccccccccccccccccc
    cccccfcfcecccccccccceffccffffffffceeeeeecfccceeefcecccccccccccfcceeeecfccceeeeeecccccccccccccfcceeecccfffcccceeeccfffffcccccccccfccffcfcffcccfcccccccccccccccccc
    cccccfcfcecececceccceffffffffffffceeeeeecfccceeefcecccccccccccfceeeeefcccceeeeeeccccccccccccccccceccccfffccccecccccffffcccccccccccccccccccccffcccccccccccccccccc
    cccccfcfcececccceccceffffffffffffceeeeeecfccceeefcecccccccccccfceceeefccccecceeecccccccccccccccceeecccfffccceeeeeccfffccccccccccccccccccccccffccccccccfffccccccc
    cccccfcfcececcccccccefffffffffffffceeeeecfccceeefcecccccccccccfceceeeffccccccceeccccccccccccccccccccccfffccccccccccffffcccccccccccccccccccccffcccccccfcccffccccc
    cccccfcfcecccccccccceffffffffffffceeeeecffccceeefcecccccccccccfceeeeeffcccccccceccccccccccccccccceccccfffcccccccfccffffcccccccccccccccccccccffcccccccccccccfcccc
    cccccfcfceccccccccfceffffffffffffceeeeecffccceeefcefffcfffcffcfceeeecfccccccccccccccccccccccccccceccccfffcccceeccccffffcccccccccccccccccccccffccfffcccffccfffccc
    cccccccccecffccfccfcefffffffffffffceeeccffcccceefcefffcccfccccfceecccfcccccccccccccccccccccccccceeeeccffffcceeeeecfffffcccccccccccccceccccccffffcffccccfccccfffc
    cccccfcccceceeccccceeccffffffffccccceccccfccccecfccfcccffcccccfceccccfccfcecccccccccccccccccccfccccccccfffccccccccfcffffccccccccccccccccccccfccffccccccccccccfcf
    cccccccccceeeeeeeceeeeeeecccccccccceeecccccccccceeeeccccccccceeeecccccccccceeecccccccccceeeecccffccccceeecccfccfccceeecccccccccceeeeccccccccceeeecccccccccceeecc
    eeeeeceeeeeecceeeecceeeeeeceeeeeceeeeeeceeeeecceeeeeeceeeecceeeeeeceeeeeceeeeeeceeeeecceeeeeeeeccecceeeeeeccccecceeeeeeceeeeecceeeeeeceeeecceeeeeeceeeeeceeeeeec
    ceececfccceecceeceefccceeeceeccecfcceeecceececfccceecceeceefccceeeceeccecfcceeecceececfccceecceeceefccceecceeeeecfcceeecceececfccceecceeceefccceeeceeccecfcceeec
    ffcffffffffffffcffffffffffffcfffffffffffffcffffffffffffcffffffffffffcfffffffffffffcffffffffffffcffffffffffffcfffffffffffffcffffffffffffcffffffffffffcfffffffffff
    fffffffffffcffffffffffffccffffffffffffcffffffffffffcffffffffffffccffffffffffffcffffffffffffcffffffffffffccffffffffffffcffffffffffffcffffffffffffccffffffffffffcf
    fffcccfffffffffffccfffffffffffccfffffffffffcccfffffffffffccfffffffffffccfffffffffffcccfffffffffffccfffffffffffccfffffffffffcccfffffffffffccfffffffffffccffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
o_hero = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f f f f d d d d d e e f . . 
    . f d d d d f 4 4 4 e e f . . . 
    . f b b b b f 2 2 2 2 f 4 e . . 
    . f b b b b f 2 2 2 2 f d 4 . . 
    . . f c c f 4 5 5 4 4 f 4 4 . . 
    . . . f f f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
animation.setAction(o_hero, ActionKind.runRight)
o_hero.setStayInScreen(true)
game.splash("冲啊100秒 v0.2", "zzfuns")
game.splash("勇士，准备！")
animateRUN()
controller.moveSprite(o_hero)
info.setLife(1)
game.onUpdate(function () {
    if (o_hero.vx < 0) {
        animation.setAction(o_hero, ActionKind.runLeft)
    }
    if (o_hero.vx > 0) {
        animation.setAction(o_hero, ActionKind.runRight)
    }
})
game.onUpdateInterval(randint(2000, 5000), function () {
    o_enemy1 = sprites.create(img`
        . 5 5 . 
        5 2 2 5 
        5 2 2 5 
        . 5 5 . 
        `, SpriteKind.enemy1)
    o_enemy1.setPosition(2, 2)
    o_enemy1.setVelocity(randint(20, 80), randint(20, 80))
    o_enemy1.setBounceOnWall(true)
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
    effects.clearParticles(o_hero)
})
game.onUpdateInterval(500, function () {
    effects.starField.startScreenEffect(100)
})
game.onUpdateInterval(10000, function () {
    o_heal = sprites.create(img`
        . . f f f . . 
        . f e e e f . 
        f e e e e e f 
        f d e e e d f 
        . f d d d f . 
        f d 1 2 4 d f 
        f d 1 2 4 d f 
        f d 2 2 2 d f 
        . f d d d f . 
        . . f f f . . 
        `, SpriteKind.Food)
    o_heal.setPosition(randint(5, 155), randint(5, 115))
})

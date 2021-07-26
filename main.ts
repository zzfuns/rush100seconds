namespace SpriteKind {
    export const enemy1 = SpriteKind.create()
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
let o_hero: Sprite = null
scene.setBackgroundImage(img`
    ffcfccfcffcfffffffffcffffffffffffcccfcbbcbcbbbbbbbbbbbcbccbdbbbbddcccbbcccccccccccccccccccccccccbbcccbcccbbbbbbbcbcccccccbbcccccfffffffffcffcfffffffffcfcfcfcccc
    ffffffcfffcccfcfffffffffffffffffffcfcbccccccccccccccccbbbccbdbbbbbbbbcccccccccccccccccccccccbcccccccccccbbbbccccccccccccccbbccccfffffffcffffcffffffffccffccffcff
    ffffcffffffcccffffffffffffffffffcffcbcbbbbcbbccccccccbbcbbccbbbbbbbbbcccccccccccccccccccccccccccbbccbccbbbbbccccccccbbcccccbbccccffffffffffffcfffffccccfffffffff
    cfcccfcfcffffcffffffffffffffffffffcbbbbbbbbbbbbbbbccbbcbbbbccbbbbbbbcccccbbccccccccccccccccccccbcccbccbbbbbbbcccbbbcbbbcbcbbbbcfcfcffffffffffcffffffcfffffcfcccf
    fccccffccfffcffffffffffffffffffcfccbcccccbcbccbbbccbbbbbbbbbccbbbbbbbcbbccccccccccccccccccccccbccccccbbbbbbcbbccbcbcccccccccbbbcfcfcfffffffffffffffcfffffcffcccc
    ccccccfccfffcffffffffffffffffffffcbcbcbcbbcbbbbbbccbbcbbbbbbbccdbbbbbcbbccccccccccccccccccbccbbccbccbbbbbbbccbbccbbbcbbcbcccbcbbcfcffffffffffffffffffffcccffffcc
    cccccccfccffffffffffffffffffffffcbbbbbbbbcccccbbccbbcbbbbbdbbbccbbbccbbccccccccccccccccccbccccccbccbbbbbbbbbcbbccbccccbcbbbbbcbbbffcffffffffffffffffccffccfccccc
    fffffccfcfffffffffffffcffffffffcbbbbbbbcbcccccccccbcbbbbbbbbbbcccbbbbbccbccccbccccccccccccccccbbcccbbbbbbbbbbcbccccccccccbbcccbcbcfffffffffcfcfffffffffffcccfffc
    cffffcfcccfffffffcccffffffccffcbbbbbbbbbbbbccccccbbbdbbbbbbbbbccccbcbbccccccccccccccccccccccbcbcccbbbbbbbbbbbcbbcccccccbbcbcbbbbbbcfffcfffffffccffffffffccffffff
    fccffcccccffffffffffffffffffffbbbbbbbcbbcccccccccbbb1bbbbbcbbbbbbcccccccccccccccccccccccccccbcbcbbbbbbbbbbbbbbcccccccccccccccbbbbbbcfcffffffffffcfffffffcfcffffc
    ffcccccccfffffffffffffffffffcccccccccccccccccccbbccd1bbbbbbdbbbbbbccccbbbcccccccccfccccccccccccbbbbbbbbbbbbcbcccbccccccccccccccccccccfffffffffffffffffffcfcccfff
    cfccccfcccfffcffffffffffffcfcbbbbbcbbbbbbbbbbbbbbdbcbbbbbbbbbbbcbbbccbbbccccccccccccccccccccccbbbbbbcbbbbbbbbcbdbcbbbbbbbbcbbbcccbbbcfffffffffffffffcfffccffcfcf
    cccfccfcccffcfffcfffffffffffbbbbbbbbbbbbbbbbbbccbcbbcbbbbbcbbbbbccbbbcbcbbccccccbbccffcccccccccbccccbcbbbcbbcbdbcbccbbcbbbbbbbbbbbbbdcffffffffffffffcffccccfcfcc
    fcccfccccfffcfffccfffffffffbdbbbbbbbbbbbbcccccccbcbdbccbbbcbbbbcccbbccbbbcccccccccccccccccbcccccccbcbbbccbccbdbcbbcccccccbbbbbbbbcbbbbffffffffffccfffcffccccffcc
    ccccffcccffcfffcffffffffffcddbbbbbbbbbcbbccccccbbbbbbbccbbbbbbcccbbcbbbbcccbcccfcccccbcccccbcccccccbbbbbbccbbbbbbbcccccccbbbbbbbbcbbbdcfffffffffccfffcfffcccfccc
    cccffffccffcfffffffffffcffbbdbbbbbbbbbbbbbbbbcbbbbbbbbdbcbbbbccbbccbbbcbcccccccccccccccccccccbccccccbbbbccbbbbbbbbbccbbbbbbbbbbbbcbbbbbcffffffffffffffcffcfffffc
    fcccccfffffffcccffffccfffcdbbbbbcbbbbbbbbbbbccbbbdbbdbbdbccbccdbccbcccbbcccccccccccbcccccbccbccccccccbbccbbbbbbbbbbccbbbbcbbbbbbcbcbbbbbffffcfffffccfcffffffcffc
    ccccccffcfffffccffffffcfcd1dbbbbbbbbbbcccbbcccbbdbbbbbbbbcccbdbcbbbbccccccccccccccccbcccccccbcccccccccccbbbbcbbbbbbbcccbcbbbbbdbbbcbbbb1cffffffffcccfffffcfccccc
    cccfccccccfccffcffffffffb1d1d1bbbcbbbbbbbbbbcbbbbbbbbbbcbbcbdbbbbbbbbccccbccccccbbbbbcccccccbccccbcccccbbcbccbbbbbbbcbbbcbbbbbdbbbbdd1d1bfffffffffcffcffccfccfcc
    cccfcccfccffcffcfffffffcddbdbddbbbbbbbbccbbccbbdbbdbbbbbbcddbcbbdbbbbbcccbccccbdddbbbccbcccbbcccbcccccbccbbbbbbbbbbbccbbbbbbbbbcbbbddbbbdcffffffffcfccffcffcccff
    ccccccffffffffcffffffffc1ddbbbbbbbbbbbbbbbbccbbbbbbbbbbbcbdbbbbbbbdbbbccccccccbddddbbbcccccbcccccbccbccccbbbbbbbbbbbbcbdbcbbbbcbbbbbbdbb1bffffffffcfffffcfcfccfc
    ccfccffffffffffffffffffb1dbbdbbbbbbbbbbdbccbbbbbbbbbbbbccbccbccbbbbbbbbcbcccbbcbbbbbddccbccbccccccccccccbcbbbcbbbbcbbcbcbbbbbbcbbbbbbddb1dcfffffffffffffffffccfc
    ccfccfffffffffffffffffcdddbdbbbbbbbbbbbbbbbcbbdbbbbbdbbcbccbcccbbbdbbbbccccbbbdbbdddbbbcbccbcccccccccccccccbbbbbbbbbbcbbbbbbbbbbbbbdbdbdd1cffffffffffffffffffccf
    fcfccfcffcffccffffffcfbdbbdbbbbbbcbcccccccbccbdbbdbbdbcbbbbcbbbbbbddbcbbccccccbbdbbdbbccccbcccccccccbccccbbcbbbbbbbbcccccccbbbbbcbbbbdbbbbbcffffffffcfffcfcffcff
    fccccfcccffcfffffcfffcddddbbddbbbcbccccccbbbbcbdbbbbbcccbbbbbbbbbdbbbbbbcbcccbbdbbddbcbbccbcbcccccbbccbbccbbbbbbbbccbbcbccccccbbbbddddbbbbbcfcfffffffcffccfcfcfc
    ffccccccfffcfffffffffcdddddddddddbbbbbbbbbbbddcbbbbbccbbcbbbbbbbbddbbcbbcbbbcbbbddbbbddbccbcbcbbccbbccbccccbcbbddbcbdbbbbbbbbbbcbdbbbbbbbbdbfffccffffccffccccccc
    cfccccfcfffffffffffcfbdbdddd1ddddbbbbbbbbbbbbddbcbbbcbbbbcbcbbbcbbddbbbbbbbbbbdddddbbddccccccbbbcccbcccccbccbcbbccbbbbcbbbbbbbbcbbddbddbdbbbcccffffffffffcffcccc
    fcccccfcfffcfffffffffd1bbbbd111dbbcbbbdbddbbbbddbcbbbbbbbbbccbbbbbbbbbbbbccdddddddddddbccccccccccccccccbbbccccccbbbbbbcbbbbbcbccbdddbbbbbbd1cffffffffffffffccccc
    ccccfccfffcfffffffffcd111dbd1ddbddbbbbdbdbcbbbbbddcbbbdbcbcbcbbbdbbbdbbdbcbbdddddddddbccbcccbcccccccccbbbbcccccbdbbbcbcbbbbbbbcbbbbbddbbd1d1cfcfffffffcffcfccfcc
    fcccccfffccfffffffffc1dd1ddd1dbbbdbcbbddbbcbbbbbbddbbdbbbdbbbbbddbbbbbdbcdbbcbdddddbcccbbbcbcbbccbccccbbbcccccbbbbbccbbcbbdbbbbbbbbbbdddd1d1bcffcfffffccffffcccc
    fffffffcccffffffffffb11d111d1dbdddbbbbbbbbcbbbbbbbbccbbbbbb1bcbbdc1bcbdbbbdbbbbbbbbccccbbccbbbccbbcbbbccccccbccccbbbcbbcbbbbbccbdbbbdbddd1d1dcfcfcfffffcccfcffcf
    cccccccccfcfffffffffd1d11d1111dd111bbbcbbbbbbbbdbcbcbbbbbccb1bcbdcbdbdbbdbdbbbbdbbccbbcbcccbccccbbcbbcccccccbccccbbbbbbccbbbbcbd1dbddddddddd1cffcfffffffccccfccc
    ccccccccfcccfffcccfcddddddddd1dd1ddbbbbbbcbbdbbbcbbdbbccbbbcb1cc1cbdbbbbbbbbbbb1bcbcbbcbcbbccccccbcbccccccccbbcccbbccbbcbdbcbcbdddddddddddd11bfcccffffcccfcccccc
    cfcfccffccccfffcfcfcdddbd1ddd1dddd1dbbcbbcb11dbbbccbbbbbbbbbcb1bdbcdbbbbbbdbbbbdbccbbbbccbbcbbbccbbcccccccccccccccccbbbcbbbbbcd11bddddddddbddbcccccffccccfffcccc
    fccfcfffccfcffccfffbdbbdbbd11d1111ddbbcbbcbddddccccbdbbbbbdbbc1dbbcbbbcbcbbbbbbdbbcbbcbccbbcbbbcb1bcccccccbccccccccbcbbcbbcbbb1dddddddddbbbdbdccccccffcfcffcfffc
    cccccfcfffffffcfcfcbbcccbbdd11dd1bddbbbbbcbbb1bccbbbbbbbcbbbbbb1d1bcbbcbbbcbbbbdbbbbbbcccbdcbbbcd1ccccccccccccccccccccbbcbcbcbdd1ddd1ddbbbccbcccccccffffcfccfccc
    cccccfcfffcfffffcfcdccbccddd11111dd1bbbbbcbbbbccbbbbcbbbbbbbddbb111cbbbbbcbbbbbbbcbddcccbbdccbcc1cccbcccccccccccccccccbbbbbbcbdb1111ddd1bccbccbccccfffcffffffccc
    ccccccccffffffccffcccccbbcb1dd1111d1bbbcbcbbdbccbbcbbcbdb1dbbdbcbd11bcbbddbbbbbbbcbdccccccdbbbcbdcccbbbcccccccccccccbbbbcbbbcdd1d11dd1dccbbcccbcfcccfffffccccccc
    ccccccccfffffccfccccccccbbcc111111111bbcbcbbdbcbbbbbbbbbbbdbbb1bcd11ccddbbbbbdbbbcbcccbbccbbbbcbbcccbcbbccccccccccccbbbbbbbbbddd11d11dccbccfccccfcccfffffccccccc
    ccffcfcccfcffffcfcccccccccbcc11d11111bbbbbbdbcbbdbbbbdddbbbbbbbbcb11bcbbbbbbbddbbcbcccccccbbbcbdcccccbbbcccccccccccccbbbbbbbbddd11d1dccbcccccfccccfccffffcccfcff
    ccffcfffccffffccfccffccccfcbbc11d1111bbccbddbcbdbdbddddddddbbbbbbbb1dccbbbbbbbbbbcbccccbccbbccdbcccccccbbbccccccccccbbbbccbbb111dd1bcbbcfccccfcccfcffffccccfcffc
    cccccccfccfffccfccccccccccfcdbcd1d111bbbcb1bbbbdbbdbd1dbddddbdbbddb111bbccbbbbbbbbbcccccccbccb1ccccbbbbbbcccbcccccbcccbbcbcbddddd1bcbbfccffccccccfcccffccffccccc
    ccccccccfcffcfcccccccccccccffdbcddd1dbbbcb1dbbdbbbbbbdbbbbb1d1dbbcb111dbbbbcbbbdbbbcccccbbbbbddbccbbbbbcccbbcbbcccbcccbdbcbbdd1d1bcdcfcfccfccccccffcfffccfcccccc
    cfccccccccffffffcccfcfccccccfcbbc11dd1bbcb1dbbddbbbdbbbbdbbdddbdbbcd11bccbbdbccb1dbcccbbbcbbbbccccbbccccbcbcccbcccbbccbbbbbbd1d1dcbcfcfcccccccfccfffffffcccccccf
    fffffccfffffcccccccccffccccccfcbbb1d11bbcbdbbddbddd111dd11dbbbbdbdbcd11bcbccbbcc1bbbccccccbbbbccbbbbbccbcbbcccccccccccbbccbb11ddcbcfcccfccccccccccccccfffcffcffc
    ffffffffffffffcccccccccccccffcccdcd111dbbbdbbdbdbdddddbddddbbbbbbdbcbd1dbbccccdbbbbccccbbcbdbccbccbbbccbcccccccccccccccbbcbddd1cccccffcccccfccccccccffffffffffff
    ccfcccffffffffffffccccfcfccccccccbcdd1ddbbbbbdddd1dddddbbbdbbbbbbbbcbbbdbbbdbcc1dbccbbbbcc1dccbcbbbbccbbccccbbcccbccbccbbcbd1dbcbccccccfcccccccfffffffffffffcccf
    cccfccccffffffffffffccfccccccccccbbb111ddddbdddbddd1ddd1bbbbbbbbbbbccccddbcbdbc11cccbbbbcb1bccbbbcbccbbccbbbbddbdbbbcccbbcbdddcbcfcfccccccccccffffffffffffccccfc
    ccffffccffffffffffffcccfccccccfcccbcb1dddddd1ddbb1dddb1bbbddbdbbdbddbccbddbbbbddbccccccbcb1cccbccccbbcccbbddbbbdbbbbcccbbcb1dcbcccffccccccccccffffffffffffccfffc
    cccffcfffcfffffffffcfccccccccccccccbb1ddddd11bbbdddddddbbdddbbddbbdbbdbcbdbbbbdbccbccbcccbbcccbccbbcccbbbbbdbdbddbbdbbcbbcbddccfcccccccccccccccfffffffffffcffffc
    cccccccfcffcccffccccfcccccccccccfccbbb1d1dddddddbdbdbbddbbbdddbbcbddbbbbbbbdddbcccccbbbccdbccbccbbbbbbbbcbdbbbbbbbbbbbccbbd1bccccfccccccccccccccfffcccffccfccccc
    ffffccfccffffccccccccccfccccccccccccbb1d1d11dddbcbccbbbbbbbbddbbcbdbbbbbbbbb1dbcbbcbbcccddccbccbbbcbcbbcbbbcbccccbbbddbcbbddcbccccccccccccccccccccccccfffccfccff
    ccfffffffffffffffcccfcfccccccccccfcfbb11d11d1bbccccccccbdbbbdd1bb1dcbdbbcbbb11ccbbccbbcb1bccbccbbcbcbbbbbbccccccccccbddbbb1bccffcccccccccfcfccccfffffffffffffcff
    cccccffffffffffffccfcccccccccccccccccbb111d1bbccccccccccbddbbdd1bcdddbbbcbbd11bcccbcbd11dccbbccbbbcbbbddbcccccccccccbbdbbd1bbcccccccccccccfccfcfffffffffffffcccc
    cccfffcfffffffffccccfcccfcccccccccccfbb11d1bbbcccccccccccbd1dd1d1cbbbbbbbbbd111bccbccd1dbccbcbbccbcbbbbbccccccccccccbbddb1dbcfccccccccccccccfcfccfffffffffcffffc
    cffccffffffffcffcccfcccfccccccccccfcfcbd1ddbbccccccccccccbddd1dd1dcbccbbbbcd1dd1bcbbcbdbbccbbdccbbbbddbbcccccccccccfcbbdd1bbccccccccccccffcffcccccffcffffffffccc
    ccccccfffffffcfccfccfcfcfcccccccccccccbd11bcccccccccccccccbd1dd1ddccbbbbdbcd11d11ccbc1dbccbbbbcbbbbbbddcccccccccccccccbbdddcccfcccccccccfcfccfcfccfcffffffffcccf
    cccfcfcffffffcfccccccccccccccccccccccccbd1bcccccccccccccccbd11dbddbcdbbdbdcd11111ccccddbcbbcbccbbbbdddbcccccccccccccccbd1dbcccfccccccccfccfcfcccccfccfffffffcfcc
    ccccccfffcffccfccccccccccccccccccccfcccbdbbcfcccccccccccccdd1dcfbdbcbbbdb1cc11111cccb1dccbbcbccbbcfbbbdbcccccccccccfcfcb1dbcccfcccccccccccccccccccfccfffcfcfcccc
    ccccffffccfffcfccccfcccccccccccccccccccbddccfccccccccccccdbcccfcddbcbbddd1bc111dbccbddbccbbbbbcbbcffcccbcccccfccccccffcbddccccccccccccccccccccfcfcfcffffcffffccc
    ccccccccccfcccfccfccccccfcfccccccccccccc1dccccccccccccccd1bcccfb1dbbdbdddddbd1dbccb1dbbcbbbbcbcccccccfcd1bcccccccccccccbddcfffccfcccfcccccccccffccfcccffccccfccc
    cccccccccffcccccccccccccccccccccccccccccddcfccccccccfccb1ddbcbcbdbcdbbdddddbbdbdbcb1dbccbbbbcdcfcbcbbcd111cfcfcfcfcccfccbbcccccccccccccfcccfcfccccfccccffccccccc
    ccccccfffffcccfcccccccccccccccccccccfccbdbccccfcfcccccc1ddddddbcdbcdbbbbbdbcbd1dcbdddbccbbbbcbbcbbcbddddd1dccfcccfcffccbbdbccfccccccccccfccccfccccfcccfffffccccc
    cccccffffffccccccccccccccccccccccccfcdddbccccccccccfccd1ddddbbcccbbbbcbbbbbbbd1bbcb1dbccbbbbcb1dcccccbdddd1bcffccccccccccbddbcfccccccccfccfcfccfccfccfcfffffcccc
    cccccccffffcccfccfccccccccccccccccccbbccccccccccccccccbdddddb1cbbcbdbccbbbccb1ddbbdddccbbbbbb11bcbccdbdddddbcccccccccccffcccdcccccccccccccccfccfccffcccffffcccfc
    cccccccffffcccffcccccccccccccccccccccccccfffccccccccfcfbdddb11bb1bccbbbbddbcbdd1dbd1dcccbbbcb1bccbcb1dddddcfffcccccccffffcfcfccccccccccccfcfcccfccffccfffffccccc
    cccccffffffcccfcccccccccccccccccccccfcbbbccccccccccfcfc1dddb11bbddbbccccbdddd111bbddbcccbccb1bccbbcd1ddddddcfffcccccfffccbbbfcccccccccccccccfccfccfccccffffffccc
    cccccfffffffccffccccccccccccccccccbcccbbbccccccccccccc11dddd11bb1ddddbbccbbb11ddbbbdbcccccbdbbbbbbcd1ddddd11ccfccccccccccbdbcccbccccccccfccccccfccffccffffffcccc
    cccccffffffcccfccccccccccccccccccbbcccd1bccccccccccccb1ddddd11bb1ddbbbbbbccb11ddbbbdbcfcbddbcbbbbbcd1ddddd11cccccccccfcccd1bcccbcccccccccfccfcfcccffccfffffffccc
    ccccfffffffcccfcccccffcccccccccccccccc111cccccccfcccfc11dddd11bbdbbbdbbbbbbbddd1dbdddbcbddbcccbbbbcd1ddddd1dcccccfccccccc11bfcccccccccccccccffcfccfccccffffffccc
    cccccfccfffcccfccccccfccccccccccccbbbc111cccccccccbccd111ddd11bbdbbbddddbbbcbddbdbddbbddbcccbbbbbcbd1ddd1111cfcccccccccfb11bcbbcccccccccccccfccfccffccffffcffccc
    ccccfffffffcccccccccccccccfccccbbbbbbc111cccccccccbcc1111d1d11bbbbbbddddbbbccbdbbbd1dbdbbccbbbbbbbbd1ddd1111dccbccccccccb11bcbbbbbbcccccfccfcfcfccfccccffffffccc
    ccccccfffffcccfcccccfcccccccccccbbcbcc111cccccccccbcc1111d1d11bbdbbbbdddbbbccbddbbb1dbdbccbbbbbbbbbd1ddddd11dccbccccccccb11bcbbcbbcccccccfcfcfcfccfcccfffffcfccc
    cccccccffffcccccccccccccccccccccbbcbbb111cfcccccccccc111111d11bbbbbddddbbbbccbddddddddbbccbbbbbcbbcd1dd11111dccbcccccccfb11bccccbccccccccccfccccccfccccffffccccc
    ccccccfffffccccfccccccccccccccbcbbcbbc111cccccccccccc111111dd1bcdbbddbbdbccccbbd11d1dbbccbbbcccbbcbd1dd11111dcccccccccccb11bcbccbccbccccccccfcccccffcccfffffcccc
    ccccccfffffcccffcccccccccccccbbcbbbbbb111ccccccccbccbd11111dd1bbdddbbdbbbbbccddd11ddbbccccbcbbbbcbbd1dd11111dccccccccbccb1dbcbbbbccbcccccccffcffccfcfccffffccccc
    cccccfcffffccccfccccccccccccccbcbbbbbc111ccccccccbbcb111111dd1bbddddbbbbccb1d111111ddbccbccbbbcbbbbd1dd11111dccbbccbccccbddbcbbbbbcbccccccccfccfccfccccfffffcccc
    cccccffffffcccffccccccccccccccbcbbbbbcd11bccccccbbbcbd11111dd1bbdbbbbcdbbccb11111111dbccbbbbbbbcbbbb1dd11111dccdbbcbbcccbddbcbbccccbccccccccccccccffcfffffcffccc
    cccccfffcffffcffccccccccccccccbcbbbbbc111bccbbbbbbbcb1111d1dddbbbbbbbbdbbbccd1111111dcccbbbbbcbbbbcbdbdd1111dccdbbcccbccbbdbcbbbbccbccccccccccccccffccfffffffccc
    ccccffffffccccffcccccfccccccccbcbbcbcbd11bcbbbbbbbbccd1111ddd1bbbbbdddbbbbbcc111111ddbccbbbbbbbbccbbdbd11111dccdbbbbcbccbbbbcbbcbccbccccccccfcccccfffccfffffffcc
    ccccfffffffcccffccccccccccccccdbbbbbbbd1dbcbbbcbbbbcc1111d1dddbbbbbdbbdbdbbbcd1111dddbccbbbbbbbccbcbdbdd1111dccdbbcbbcccbddbcbbbbcbbccccccccccccccffcccfffffffcc
    cccccfffffccccffccccccccccccccdcbbbbbbd1dbcbcbccbbdcc111111dbdbbbbbbbbbbbbdbcb111dddbcccbbdbcccccbbbdbd111111ccdbbcbcbccbddbcbbbdccbccccccccfcccccffcccffffffccc
    cccccccfffcccccfcccccccccccccbdbdbbbcbd1dbcbbbbcbdbcc111111dddbbbbbbbbbbbbbbbb111dbddbccbdbccccbccbbdbd11111dccddbccbbccbdbbccbbdbbdccccccccfcccccfccccffffffccc
    cccccccfffccccffcccccccccccbbbd1dbbbbb1dbbcbbbbcbdbcb111111dbdbbbbbbbbbbbbbbcbd11ddddbbbdccbbccbbbcbdbd1d111dccdbbccbbccbbbbbbbdddddbbccccccccccccffcccffffccccc
    ccccccfffffccccfcccccccbccbbddd1dddbbbdbbbccbbccbbbcc111111dddbbbbbbbbbbbbbbbcd11dddbbbbcccbcbbbbbcbdbddd111dccbbcccccccbbdbbbd1ddddddbcccbccccfccffcccfffffcccc
    cccccccfffcccccfcccccccbccbd1111dddbcbdbbbcbccccbccccd11111dddbbbbdbbbdbbdbbbbdd1ddddbbcccbbcbbbbbcbdbd11111dccccbcccbcccbddbbdddd1111dbccbcccccccfccccffffccccc
    cccccccffffcccffccccccbbccb111111ddbbbddbbcccccccccccd11111dddbcbbdbdbbdbbbbbbdd1ddd1dcccbbbcbbbbbcbdbd11111dcccccccccccbbddbbbddd1111bcccbcffcfccfccccffffccccc
    ccccfffffffcccffbccccccbccbbd11ddddbbb1bbbcbcccccccccd11111dbbccbbbbdbbbddbdbbd1d1dd11bcbbbbbbbbbccbdbd11111dcccccccccccbbbbbbddddd111dcccbcfcccbcffcccfffffffcc
    ccccccffcffcfcffbccccccdcccbddddddbdbbdbbbcbcccccccccd11111dbbccbbbbddddddddddd11ddd1dbbbbbbbbbcbccbbbd11dd1dcccccccccccbbbdbbbd1ddddbbcccbcccccccfffccfffffccfc
    ccfcffffffffccffbcccccbbcccbbdbddbbbbbdbbbcbcccccccccd1ddd1dbbbcbbbddddddd111d1111d111bbdbbbbbcccccbbbdddd11dcccccccccccbbbbbbdd1ddddbccccbccccfccffccffffffffcf
    cccccccfffffccffccccccbbccbccbbbbbbbcbbbbbcbcccccccccccdddddbdbcddd1dd1111111d1111111dbdddbbbbbbcbcbbbdddddcccccccccccccbbbdbbd1ddddbbbcccbccfcfccfccffffffffccf
    ccccccffffffccfccccccccbccccbbdbbccccbbbbbcbcccccccccccdddddbdbcb111111111111111111111d111dddbdbbbcbbbdddddcccccccccccccbbbdbbbbdddbbcccccbcccffccffccfffffccccc
    cccccffffffffcffcccccccbccccbbbbbbcccbbbbbccccccccccccbdbddbbbbcbcccbbbbddddbddddddddbbbbdbbbbbbbbcbbbbdddddccccccccccccbbbbccccbdbbccccccbcccccccffcfffffffcccc
    ccccccffffffffffcccccccbcccccbbbbcccccbbbbcbccccccccccbbbbbbbbccbcfcccccccccccccdbcbccccccccccccbbcbdbbbdbdbcccccccccccccbbbccccbbbbccccccbcfcccccfffffffffffccc
    cccccfcfffffffffcccccccccccccbbbcbcbccbbbbccccccccccccbccbdbbbccbcccccccccccccccddbbccccccccccccbbcbbbbbbcbcccccfccccccccbbbcccbbbbcccccccbcccccccffffffffffcccc
    cccccccfffffffffcccccccccccccbcbbbcbccbdbbcccccccccccccccccbbbbcbbcfcccffcccccbcccbdbcbbccccccfccbcbdbbbcccccccccccccccccbbbcbbbbbccccccccccccccccfffffffffccccc
    ccccccffffffccffcccccccccccccbccbbccccbbbccccccfccccccccccccbdbccbccddbcfccbbcbbccbdbddcccccccffbbcbdbccccccccccccccccccccbccbccbcccccccccbcccccccffcfffffffcccc
    ccccfcfffffffcfccccccccbccccbbdbbbbbbbbbbcccccfcccccccccccccbbbccbccccbbbccbbbbbbdbbbdbccbbdccccbcbbbbcccccccccccccccccccbbbbccbbbbbbcccccbcccccccffcffffffffccc
    cccfccffffffcffccccfcccbccccccbccccccccccccccccccccccccccccccccccbcccccbbbcccbcbddbbdbccccbbbccccccccccccccccccccccccccccccccccccccccccccbbcccccccfffffffffccffc
    cfccfcfffffffffccccccccbcccccccbcccccccccccccccccccccccccccccbcccbcfcccccccfcbcbbbbbbcfcccccccccccccbcccccccccccccccccccccccccccccbccccccbbcccccccfffcffffffcfcc
    cfcfcffffffffffccccccccbcccccccbccbccccccccccccccccccccccccccbbccccccccccccccbbccccbdbcbccbcccccbccbbccccccccccccccfccccccccccbbcbccccccccbcccccccfcfffffffffffc
    fccffffffffffcfccccccccbbccccccccccccbbbbcccccccccccccccccccbbbccbcccccbcccbccbcbbcbbbbcbccdbcccbcccbccccccccccccccccccccbbbbcccbcccbcccccbcccccccfcfffffffffffc
    ffcccffffffffffccccccccbccccccbccccccccbccccfccccccccccccccbdbdccbbccccccccdccccddbcccbbcccccccbbccdbbcccccccccccccccfcccccccccccccbcccccbbcccfcccfffffffffffccf
    ffffcffffffffffccccccccccccccccccccccccccccccccccccccccccccbbbbcccccbcfccccbddbbffbbdbbcccccfcbccccbbbbccccccccccccccccccccccccccbbcccccccccccccccfcfffffffffcff
    fffccfffffffffffccccccccccccccccccccccccccfcccccccccccccccccbbbbbbbccfccccbcccccffccbcccccccffccbbbbbbccccccccccccccccccccccccccccbcccccccccccccccfffffffffffcff
    ffccffffffffffffbccffccccccccccccccccccccfcccccccccbbbbbcccbccb1111bccccccccffffccffffcccccccccb1d1dcccccccbbcbbccccccccfcccccccccccccfcccccffccccfffffffffffcff
    ffcfcffffffffffcbcfffcccccccbccccccccccccccccccccccbbbbbbcbbbccbbbbdbdddddbdddddddddddbdbdbdbbbbdbbcbbbbcbbbbbbbccccccccccccccccccccccccccccffffccffffffffffffcf
    fffcfcfffffffffcbbbbbbbd111111dbbbccccccccccccccbbbbbbbbccccccccccccbbbbdbdbd1111111ddddbbbbbbbcccccccccccbbbbbbbbccccccccccccccbbbb11111dbbccbbbbcfffffffffcfff
    ccccccfccffffffccbddbbbdbdddd1dddbbbbccccccccccccbbbbbbbccbbccccccfccfcccccbbbddddbbccbcccccbcccffccccbbccbbbbbbccccccccccccccbbbd11111dddddbddbbccffffffffccccc
    ccfffffffffffcfffffcbcbbbbccbbbbbbbbbbbbbccccccccccbcbbcccbbbbccccccccccfccccbcbbbbccccbcccccccccfccbbbbcccccccccccccbbcbbbbbbbbbbbbbbbcbbbbbbcffffccfffffffcccc
    ffffffffffffffffffcbbcbbbbcccbbbbcbbbbbbbbbbbbcbbbbbbbbbbbbbcbccccccccccfccccccbdbccccbcfcbccbccccccbcbbbbcbbbbbbbbbbcbbbbbbbbbbbbbbbccccbbcccbcffffffffffffffff
    cccfffffffffffffffcbccbbbbccbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbcfccfccccccccbbccbbbbccbccccccccccccccbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbcccbbcccccffffffffffffffff
    ccccffffcfffffcfffcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd1bcccffccfccccfcbbbccccccccbbccccffcccccbddddddddbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbccccffcfffffffffffcc
    ffcccccfcfffffffffcbcccbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddd11dbccccccccccccbccddbccccbbbbbcccfcccccbd111ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbcbbcfffffffffffcfccf
    cccccccfffffffccfccbccccbcbbbbbdbbbbbbbbbcbbbbbbbbbbbbdddddddddbbbccccccbbcccccbbbcccbbdbcccccccbbb111d1ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbcbdccfccffffffccffcc
    ccfccffffffffccfccccbccbbccbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbddd11dddddddbbbdbbcccbbbbbbcbbbbdddbbddd1dd11ddbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbcccfcfffffffffccf
    ccccffffffffffffcffcbccbbccbbbbbbbbbbbbbbbbbbcccbbcbbbbbbbddddbbbbbbddddddd1dddd1dd1ddddddddddddbbbbdddbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbccbbcccffffffffffffcf
    cffffffffffffffcfffbbcbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbdddd111111ddddddbbbbbbbbbbbddbbdbbbbbbbbcccccbbbbbbccbbbbbbbbbbbbbccccccfffcfffffffffff
    cfffffffffffffffffcbdbbbbcbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbdddbdbbbbbbbcccccbbbbbbbccbbbbdbbbbbbbbcbbcffffffffffffffff
    fffffffffffffccccccccbcccccbbbbbbbccbbbbbbbbbbbbbcbbcbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbccbcccccbbbbbbbbbbbbccccccccccbbbbbcccccbbbbbbbccbcccccccccffffffffffff
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
animation.runImageAnimation(
o_hero,
[img`
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
    `,img`
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
    `,img`
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
    `,img`
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
    `,img`
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
    `,img`
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
    `],
200,
true
)
o_hero.setStayInScreen(true)
game.splash("冲啊100秒", "v0.1 zzfuns")
game.splash("勇士，准备！")
controller.moveSprite(o_hero)
info.setLife(1)
game.onUpdateInterval(randint(2000, 5000), function () {
    o_enemy1 = sprites.create(img`
        . 5 5 . 
        5 5 5 5 
        5 5 5 5 
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

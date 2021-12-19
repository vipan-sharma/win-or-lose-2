namespace SpriteKind {
    export const Rescued = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -300
})
info.onCountdownEnd(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`cage`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
    turkey = sprites.create(assets.image`turkey`, SpriteKind.Rescued)
    tiles.placeOnTile(turkey, location)
    turkey.follow(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile16, function (sprite, location) {
    game.over(true)
})
let turkey: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`start`)
info.startCountdown(120)

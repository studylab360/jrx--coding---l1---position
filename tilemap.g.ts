// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "lesson1":
            case "level1":return tiles.createTilemap(hex`100010000103030303030303030303030303030402090909090909090909090909090a05020a0a0a0a0909090909090909090a0902090a09090909090909090909090a0902090a09090909090909090909090909020909090909090b0b0b090b0b0b0b0902090909090909090c0909090909090502090a0a0a0a09090909090b0b0909050806060606060606060606060600000700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . 
. 2 2 2 2 . . . . . . . . . 2 . 
. . 2 . . . . . . . . . . . 2 . 
. . 2 . . . . . . . . . . . . . 
. . . . . . . 2 2 2 . 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
. . 2 2 2 2 . . . . . 2 2 . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath5,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.builtin.crowd4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

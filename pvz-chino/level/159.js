﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oCactus, oPlantern, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic, oSeaShroom, oOxygen, ostar, oTTS, oSeaAnemone, oGatlingPea, oGloomShroom, oTwinSunflower, oSpikerock, oTenManNut, oSnowRepeater, oLing, oLotusRoot, oMagneticmuShroom], 
    ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oBucketheadZombie, oNewspaperZombie, oJackinTheBoxZombie, oFootballZombie, oDancingZombie, oScreenDoorZombie, oBackupDancer, oZomboni, oPoleVaultingZombie],
    PicArr: function() {
        return ["images/interface/background2.jpg"]
    } (),
    backgroundImage: "images/interface/background2.jpg",
    CanSelectCard: 1,
    LevelName: "常青之塔 9层",
    LvlEName: 158,
    SunNum: 3500,
    DKind: 0,
    StartGameMusic: "Ultimate battle",
    LargeWaveFlag: {
        10 : $("imgFlag2")
    }
},
{
    AZ: [[oZombie, 1, 1], [oZombie2, 1, 1], [oZombie3, 1, 1], [oConeheadZombie, 1, 1], [oBucketheadZombie, 1, 1], [oNewspaperZombie, 1, 1], [oJackinTheBoxZombie, 1, 1], [oFootballZombie, 1, 1], [oDancingZombie, 1, 1], [oScreenDoorZombie, 1, 1], [oZomboni, 1, 1], [oPoleVaultingZombie, 1, 1]],
    FlagNum: 10,
    FlagToSumNum: {
        a1: [15, 33],
        a2: [15, 53]
    },
    FlagToMonitor: {
        9 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
 NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
            onclick: function() {
                SelectModal(160)
            }
        });
        NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
    }
});
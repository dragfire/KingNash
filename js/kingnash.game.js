/*
 *  kingnash.game.js
 *  Author: Devajit Asem
 *  Game: KingNash
 */


var GBoard = $("#board"),
    gBoard = document.getElementById("board"),
    cNode,
    KingNash = {};

KingNash.Game = {
    SingleMode: {
        KingdomA: {
            Play: false,
            AI: false
        },
        KingdomB: {
            Play: false,
            AI: false
        }
    },
    DoubleMode: false,
    CheckActiveNode: function() {
        if (!isNaN(KingNash.ElemIndex))
            return KingNash.ElemArr[KingNash.ElemIndex].node;
    }
};

KingNash.Randomize = function(min, max) {
    var rand = Math.floor(Math.random() * (max - min + 1) + min);
    if (rand === max)
        return rand - 1;
    else
        return rand;

};

KingNash.Kingdom = {
    Animate: false
};

KingNash.KingdomA = {
    King: {
        Id: $("#beadA1"),
        node: 27
    },
    Knight2: {
        Id: $("#beadA2"),
        node: 1
    },
    Knight3: {
        Id: $("#beadA3"),
        node: 6
    },
    Knight4: {
        Id: $("#beadA4"),
        node: 11
    },
    Knight5: {
        Id: $("#beadA5"),
        node: 16
    },
    Knight6: {
        Id: $("#beadA6"),
        node: 21
    },
    Knight7: {
        Id: $("#beadA7"),
        node: 0
    },
    Knight8: {
        Id: $("#beadA8"),
        node: 5
    },
    Knight9: {
        Id: $("#beadA9"),
        node: 10
    },
    Knight10: {
        Id: $("#beadA10"),
        node: 15
    },
    Knight11: {
        Id: $("#beadA11"),
        node: 20
    },
    Knight12: {
        Id: $("#beadA12"),
        node: 26
    },
    Knight13: {
        Id: $("#beadA13"),
        node: 28
    },
    Knight14: {
        Id: $("#beadA14"),
        node: 30
    },
    Knight15: {
        Id: $("#beadA15"),
        node: 25
    },
    Knight16: {
        Id: $("#beadA16"),
        node: 29
    },
    Moves: {
        twoNodes: [],
        recentNode: 0,
        lastNode: 0,
        moving: false,
        wrongMove: false
    },
    Animate: false

};
KingNash.KingdomB = {
    King: {
        Id: $("#beadB1"),
        node: 33
    },
    Knight2: {
        Id: $("#beadB2"),
        node: 3
    },
    Knight3: {
        Id: $("#beadB3"),
        node: 8
    },
    Knight4: {
        Id: $("#beadB4"),
        node: 13
    },
    Knight5: {
        Id: $("#beadB5"),
        node: 18
    },
    Knight6: {
        Id: $("#beadB6"),
        node: 23
    },
    Knight7: {
        Id: $("#beadB7"),
        node: 4
    },
    Knight8: {
        Id: $("#beadB8"),
        node: 9
    },
    Knight9: {
        Id: $("#beadB9"),
        node: 14
    },
    Knight10: {
        Id: $("#beadB10"),
        node: 19
    },
    Knight11: {
        Id: $("#beadB11"),
        node: 24
    },
    Knight12: {
        Id: $("#beadB12"),
        node: 32
    },
    Knight13: {
        Id: $("#beadB13"),
        node: 34
    },
    Knight14: {
        Id: $("#beadB14"),
        node: 36
    },
    Knight15: {
        Id: $("#beadB15"),
        node: 31
    },
    Knight16: {
        Id: $("#beadB16"),
        node: 35
    },
    Moves: {
        twoNodes: [],
        recentNode: 0,
        lastNode: 0,
        moving: false,
        wrongMove: false
    },
    Animate: false

};

KingNash.ElemArr = [KingNash.KingdomA.King, KingNash.KingdomA.Knight2, KingNash.KingdomA.Knight3, KingNash.KingdomA.Knight4, KingNash.KingdomA.Knight5, KingNash.KingdomA.Knight6, KingNash.KingdomA.Knight7, KingNash.KingdomA.Knight8, KingNash.KingdomA.Knight9, KingNash.KingdomA.Knight10, KingNash.KingdomA.Knight11, KingNash.KingdomA.Knight12, KingNash.KingdomA.Knight13, KingNash.KingdomA.Knight14, KingNash.KingdomA.Knight15, KingNash.KingdomA.Knight16, KingNash.KingdomB.King, KingNash.KingdomB.Knight2, KingNash.KingdomB.Knight3, KingNash.KingdomB.Knight4, KingNash.KingdomB.Knight5, KingNash.KingdomB.Knight6, KingNash.KingdomB.Knight7, KingNash.KingdomB.Knight8, KingNash.KingdomB.Knight9, KingNash.KingdomB.Knight10, KingNash.KingdomB.Knight11, KingNash.KingdomB.Knight12, KingNash.KingdomB.Knight13, KingNash.KingdomB.Knight14, KingNash.KingdomB.Knight15, KingNash.KingdomB.Knight16];

KingNash.ElemIndex = undefined;

KingNash.Nodes = {
    //    TotalPos: 36
    0: {
        Pos: 0,
        Knight: 1,
        King: 0,
        KnightA: 1,
        KnightB: 0,
        KingA: 0,
        KingB: 0
    },
    1: {
        Pos: 1,
        Knight: 1,
        King: 0,
        KnightA: 1,
        KnightB: 0,
        KingA: 0,
        KingB: 0
    },
    2: {
        Pos: 2,
        Knight: 0,
        King: 0,
        KnightA: 0,
        KnightB: 0,
        KingA: 0,
        KingB: 0
    },
    3: {
        Pos: 3,
        Knight: 1,
        King: 0,
        KnightA: 0,
        KnightB: 1,
        KingA: 0,
        KingB: 0
    },
    4: {
        Pos: 4,
        Knight: 1,
        King: 0,
        KnightA: 0,
        KnightB: 1,
        KingA: 0,
        KingB: 0
    },
    5: {
        Pos: 5,
        Knight: 1,
        King: 0,
        KnightA: 1,
        KnightB: 0,
        KingA: 0,
        KingB: 0
    },
    6: {
        Pos: 6,
        Knight: 1,
        King: 0,
        KnightA: 1,
        KnightB: 0,
        KingA: 0,
        KingB: 0
    },
    7: {
        Pos: 7,
        Knight: 0,
        King: 0,
        KnightA: 0,
        KnightB: 0,
        KingA: 0,
        KingB: 0
    },
    8: {
        Pos: 8,
        Knight: 1,
        King: 0,
        KnightA: 0,
        KnightB: 1,
        KingA: 0,
        KingB: 0
    },
    9: {
        Pos: 9,
        Knight: 1,
        King: 0,
        KnightA: 0,
        KnightB: 1,
        KingA: 0,
        KingB: 0
    },
    10: {
        Pos: 10,
        Knight: 1,
        King: 0,
        KnightA: 1,
        KnightB: 0,
        KingA: 0,
        KingB: 0
    },
    11: {
        Pos: 11,
        Knight: 1,
        King: 0,
        KnightA: 1,
        KnightB: 0,
        KingA: 0,
        KingB: 0
    },
    12: {
        Pos: 12,
        Knight: 0,
        King: 0,
        KnightA: 0,
        KnightB: 0,
        KingA: 0,
        KingB: 0
    },
    13: {
        Pos: 13,
        Knight: 1,
        King: 0,
        KnightA: 0,
        KnightB: 1,
        KingA: 0,
        KingB: 0
    },
    14: {
        Pos: 14,
        Knight: 1,
        King: 0,
        KnightA: 0,
        KnightB: 1,
        KingA: 0,
        KingB: 0
    },
    15: {
        Pos: 15,
        Knight: 1,
        King: 0,
        KnightA: 1,
        KnightB: 0,
        KingA: 0,
        KingB: 0
    },
    16: {
        Pos: 16,
        Knight: 1,
        King: 0,
        KnightA: 1,
        KnightB: 0,
        KingA: 0,
        KingB: 0
    },
    17: {
        Pos: 17,
        Knight: 0,
        King: 0,
        KnightA: 0,
        KnightB: 0,
        KingA: 0,
        KingB: 0
    },
    18: {
        Pos: 18,
        Knight: 1,
        King: 0,
        KnightA: 0,
        KnightB: 1,
        KingA: 0,
        KingB: 0
    },
    19: {
        Pos: 19,
        Knight: 1,
        King: 0,
        KnightA: 0,
        KnightB: 1,
        KingA: 0,
        KingB: 0
    },
    20: {
        Pos: 20,
        Knight: 1,
        King: 0,
        KnightA: 1,
        KnightB: 0,
        KingA: 0,
        KingB: 0
    },
    21: {
        Pos: 21,
        Knight: 1,
        King: 0,
        KnightA: 1,
        KnightB: 0,
        KingA: 0,
        KingB: 0
    },
    22: {
        Pos: 22,
        Knight: 0,
        King: 0,
        KnightA: 0,
        KnightB: 0,
        KingA: 0,
        KingB: 0
    },
    23: {
        Pos: 23,
        Knight: 1,
        King: 0,
        KnightA: 0,
        KnightB: 1,
        KingA: 0,
        KingB: 0
    },
    24: {
        Pos: 24,
        Knight: 1,
        King: 0,
        KnightA: 0,
        KnightB: 1,
        KingA: 0,
        KingB: 0
    },
    25: {
        Pos: 25,
        Knight: 1,
        King: 0,
        KnightA: 1,
        KnightB: 0,
        KingA: 0,
        KingB: 0
    },
    26: {
        Pos: 26,
        Knight: 1,
        King: 0,
        KnightA: 1,
        KnightB: 0,
        KingA: 1,
        KingB: 0
    },
    27: {
        Pos: 27,
        Knight: 1,
        King: 1,
        KnightA: 0,
        KnightB: 1,
        KingA: 1,
        KingB: 0
    },
    28: {
        Pos: 28,
        Knight: 1,
        King: 0,
        KnightA: 1,
        KnightB: 0,
        KingA: 0,
        KingB: 0
    },
    29: {
        Pos: 29,
        Knight: 1,
        King: 0,
        KnightA: 1,
        KnightB: 0,
        KingA: 0,
        KingB: 0
    },
    30: {
        Pos: 30,
        Knight: 1,
        King: 0,
        KnightA: 1,
        KnightB: 0,
        KingA: 0,
        KingB: 0
    },
    31: {
        Pos: 31,
        Knight: 1,
        King: 0,
        KnightA: 0,
        KnightB: 1,
        KingA: 0,
        KingB: 0
    },
    32: {
        Pos: 32,
        Knight: 1,
        King: 0,
        KnightA: 0,
        KnightB: 1,
        KingA: 0,
        KingB: 0
    },
    33: {
        Pos: 33,
        Knight: 1,
        King: 1,
        KnightA: 0,
        KnightB: 1,
        KingA: 0,
        KingB: 1
    },
    34: {
        Pos: 34,
        Knight: 1,
        King: 0,
        KnightA: 0,
        KnightB: 1,
        KingA: 0,
        KingB: 0
    },
    35: {
        Pos: 35,
        Knight: 1,
        King: 0,
        KnightA: 0,
        KnightB: 1,
        KingA: 0,
        KingB: 0
    },
    36: {
        Pos: 36,
        Knight: 1,
        King: 0,
        KnightA: 0,
        KnightB: 1,
        KingA: 0,
        KingB: 0
    }
};

//  Handling Events
// clicked Elements and returning their current nodes

function cElemListener(e) {
    var id;
    // Processing KingNash.ElemIndex
    console.log($(this));
    id = this.id.replace("bead", "");
    if (id[0] === "A") {
        KingNash.ElemIndex = Number(id.replace("A", "")) - 1;
    } else if (id[0] === "B") {
        KingNash.ElemIndex = Number(id.replace("B", "")) + 15;
    }
}


(function() {
    for (var i = 0, n = KingNash.ElemArr.length; i < n; i++) {
        KingNash.ElemArr[i].Id.mousedown(cElemListener);
    }
})();

function mouseListener(e) {
    var pX = e.clientX - parseFloat(GBoard.offset().left),
        pY = e.clientY - parseFloat(GBoard.offset().top);
    var posX = e.clientX - gBoard.getBoundingClientRect().left,
        posY = e.clientY - gBoard.getBoundingClientRect().top;

    console.log(e.clientX + " : " + e.clientY + "  posX : " + posX + " pX " + pX + " posY : " + posY + " pY " + pY + " " + gBoard.getBoundingClientRect().top + " " + GBoard.offset().top);
    detNode(pX, pY);
}

function detNode(posX, posY) {
    // Determine the node
    if (posX < 581 && posX > -20) {
        if (posY < 40) {
            if (posX < 30 && posY < 30) {
                cNode = 0;
            } else if (posX > 110 && posX < 170 && posY < 30) {
                cNode = 1;
            } else if (posX > 250 && posX < 310 && posY < 30) {
                cNode = 2;
            } else if (posX > 390 && posX < 450 && posY < 30) {
                cNode = 3;
            } else if (posX > 530 && posY < 591 && posY < 30) {
                cNode = 4;
            } else {
                return;
            }
            // console.log("Clicked node : " + TiGen.Nodes[cNode].Pos);

        } else if (posY > 80 && posY < 180) {
            if (posX < 30 && posY > 110 && posY < 170) {
                cNode = 5;
            } else if (posX > 100 && posX < 180 && posY > 100 && posY < 180) {
                cNode = 6;

            } else if (posX > 250 && posX < 310 && posY > 110 && posY < 170) {
                cNode = 7;
            } else if (posX > 380 && posX < 460 && posY > 100 && posY < 180) {
                cNode = 8;
            } else if (posX > 530 && posY < 591 && posY > 110 && posY < 170) {
                cNode = 9;
            } else {
                return;
            }
            // console.log("Clicked node : " + TiGen.Nodes[cNode].Pos);
        } else if (posY > 255 && posY < 395) {
            if (posX < 30 && posY > 250 && posY < 310) {
                cNode = 10;
            } else if (posX > 110 && posX < 170 && posY > 250 && posY < 310) {
                cNode = 11;
            } else if (posX > 250 && posX < 310 && posY > 250 && posY < 310) {
                cNode = 12;
            } else if (posX > 390 && posX < 450 && posY > 250 && posY < 310) {
                cNode = 13;
            } else if (posX > 530 && posY < 591 && posY > 250 && posY < 310) {
                cNode = 14;
            } else {
                return;
            }
            // console.log("Clicked node : " + TiGen.Nodes[cNode].Pos);
        } else if (posY < 535 && posY > 396) {
            if (posX < 30 && posY > 390 && posY < 450) {
                cNode = 15;
            } else if (posX > 100 && posX < 180 && posY > 380 && posY < 460) {
                cNode = 16;
            } else if (posX > 250 && posX < 310 && posY > 390 && posY < 450) {
                cNode = 17;
            } else if (posX > 380 && posX < 460 && posY > 380 && posY < 460) {
                cNode = 18;
            } else if (posX > 530 && posY < 591 && posY > 390 && posY < 450) {
                cNode = 19;
            } else {
                return;
            }
            //console.log("Clicked node : " + TiGen.Nodes[cNode].Pos);
        } else if (posY > 536 && posY < 581) {
            if (posX < 30 && posY > 530 && posY < 590) {
                cNode = 20;
            } else if (posX > 110 && posX < 170 && posY > 530 && posY < 590) {
                cNode = 21;
            } else if (posX > 250 && posX < 310 && posY > 530 && posY < 590) {
                cNode = 22;
            } else if (posX > 390 && posX < 450 && posY > 530 && posY < 590) {
                cNode = 23;
            } else if (posX > 530 && posY < 591 && posY > 530 && posY < 590) {
                cNode = 24;
            } else {
                return;
            }
            //console.log("Clicked node : " + TiGen.Nodes[cNode].Pos);
        }
    } else if (posX > -230 && posX < -50) {
        console.log("Castle A");
        if (posY > 50 && posY < 530) {
            if (posY > 50 && posY < 110 && posX > -220 && posX < -170) {
                cNode = 25;

            } else if (posY > 250 && posY < 315 && posX > -225 && posX < -165) {
                cNode = 27;

            } else if (posY > 450 && posY < 510 && posX > -220 && posX < -170) {
                cNode = 29;

            } else if (posY > 160 && posY < 210 && posX < -70 && posX > -120) {
                cNode = 26;

            } else if (posY > 260 && posY < 310 && posX < -70 && posX > -120) {
                cNode = 28;

            } else if (posY > 360 && posY < 410 && posX < -70 && posX > -120) {
                cNode = 30;
            }
        }
    } else if (posX > 630 && posX < 790) {
        console.log("Castle B");
        if (posY > 50 && posY < 530) {
            if (posY > 50 && posY < 110 && posX > 730 && posX < 790) {
                cNode = 31;

            } else if (posY > 250 && posY < 315 && posX > 730 && posX < 790) {
                cNode = 33;

            } else if (posY > 450 && posY < 510 && posX > 730 && posX < 790) {
                cNode = 35;

            } else if (posY > 160 && posY < 210 && posX > 630 && posX < 690) {
                cNode = 32;

            } else if (posY > 260 && posY < 310 && posX > 630 && posX < 690) {
                cNode = 34;

            } else if (posY > 360 && posY < 410 && posX > 630 && posX < 690) {
                cNode = 36;
            }
        }
    }
    console.log("cNode : " + cNode);
}
$(window).bind("mousedown", mouseListener);
// kingnash.controller.kingdomB.js
// Author: Devajit Asem
// Game: KingNash

KingNash.KingdomB_Controller = function() {

    if (KingNash.ElemIndex < 32 && KingNash.ElemIndex > 15 && !isNaN(KingNash.ElemIndex) && KingNash.KingdomB.Moves.moving) {

        KingNash.KingdomB.Moves.lastNode = KingNash.KingdomB.Moves.twoNodes[0];
        KingNash.KingdomB.Moves.recentNode = KingNash.KingdomB.Moves.twoNodes[1];
        var nodeDiff = KingNash.KingdomB.Moves.recentNode - KingNash.KingdomB.Moves.lastNode;
        var columnDiff = (KingNash.KingdomB.Moves.recentNode - KingNash.KingdomB.Moves.lastNode) % 5;

        console.log("columnDiff : " + columnDiff);
        if (!isNaN(nodeDiff)) {
            KingNash.checkMovementB(nodeDiff, columnDiff);
        }
        KingNash.KingdomB.Moves.moving = false;
    }
};

KingNash.checkMovementB = function(nodeDiff, columnDiff) {
    var node;
    if (KingNash.KingdomB.Moves.lastNode < 25 && KingNash.KingdomB.Moves.recentNode < 25) {
        if (columnDiff === 0) {
            node = (nodeDiff / 5 === 2) ? KingNash.KingdomB.Moves.recentNode - 5 : KingNash.KingdomB.Moves.recentNode + 5;

            if (nodeDiff === 10 || nodeDiff === -10) {
                if (KingNash.nodeContains.KnightA(node))
                    KingNash.removeKnight(node);
                else
                    KingNash.WrongMove();
            } else {
                if (nodeDiff == 5 || nodeDiff == -5) {} else
                    KingNash.WrongMove();
            }
        } else if (columnDiff === 2 || columnDiff === -2) {
            console.log("Fucking Kidding B");
            if (nodeDiff === 12 || nodeDiff === -12)
                node = (nodeDiff === 12) ? KingNash.KingdomB.Moves.recentNode - 6 : KingNash.KingdomB.Moves.recentNode + 6;
            else if (nodeDiff === 8 || nodeDiff === -8)
                node = (nodeDiff === 8) ? KingNash.KingdomB.Moves.recentNode - 4 : KingNash.KingdomB.Moves.recentNode + 4;
            else if (nodeDiff === 2 || nodeDiff === -2)
                node = (nodeDiff === 2) ? KingNash.KingdomB.Moves.recentNode - 1 : KingNash.KingdomB.Moves.recentNode + 1;
            if (KingNash.nodeContains.KnightA(node))
                KingNash.removeKnight(node);
            else
                KingNash.WrongMove();
        } else if (columnDiff === -3 || columnDiff === 3) {
            if (nodeDiff === 8 || nodeDiff === -8) {
                node = (nodeDiff === 8) ? KingNash.KingdomB.Moves.recentNode - 4 : KingNash.KingdomB.Moves.recentNode + 4;
                if (!isNaN(node)) {
                    if (KingNash.nodeContains.KnightA(node))
                        KingNash.removeKnight(node);
                } else
                    KingNash.WrongMove();
            } else
                KingNash.WrongMove();
        } else if (columnDiff == 1 || columnDiff == -1) {
            if (nodeDiff == 1 || nodeDiff == -1) {} else if ((nodeDiff == 6 || nodeDiff == -6 || nodeDiff == 5 || nodeDiff == -5) && (KingNash.KingdomB.Moves.recentNode % 2 == 0)) {} else
                KingNash.WrongMove();
        } else {
            if ((nodeDiff == 4 || nodeDiff == -4) && (columnDiff == 4 || columnDiff == -4)) {} else
                KingNash.WrongMove();
        }
    } else if ((KingNash.KingdomB.Moves.lastNode > 24 && KingNash.KingdomB.Moves.recentNode < 37) || (KingNash.KingdomB.Moves.lastNode < 37 && KingNash.KingdomB.Moves.recentNode > 24)) {
        if (nodeDiff === 15 || nodeDiff === -15)
            node = 26;
        else if ((nodeDiff === 17 || nodeDiff === -17) && (KingNash.KingdomB.Moves.lastNode === 27 || KingNash.KingdomB.Moves.lastNode === 10))
            node = 28;
        else if ((nodeDiff === 19 || nodeDiff === -19) && (KingNash.KingdomB.Moves.lastNode === 29 || KingNash.KingdomB.Moves.lastNode === 10))
            node = 30;
        else if (nodeDiff === 10 || nodeDiff === -10 || nodeDiff === 17 || nodeDiff === -17 || nodeDiff === 24 || nodeDiff === -24)
            node = 10;
        else if ((nodeDiff === 21 || nodeDiff === -21) && (KingNash.KingdomB.Moves.lastNode === 35 || KingNash.KingdomB.Moves.lastNode === 14))
            node = 36;
        else if ((nodeDiff === 17 || nodeDiff === -17) && (KingNash.KingdomB.Moves.lastNode === 31 || KingNash.KingdomB.Moves.lastNode === 14))
            node = 32;
        else if ((nodeDiff === 19 || nodeDiff === -19) && (KingNash.KingdomB.Moves.lastNode === 33 || KingNash.KingdomB.Moves.lastNode === 14))
            node = 34;
        else if (nodeDiff === 14 || nodeDiff === -14 || nodeDiff === 28 || nodeDiff === -28 || nodeDiff === 21 || nodeDiff === -21)
            node = 14;
        else if ((nodeDiff === 4 || nodeDiff === -4) && (KingNash.KingdomB.Moves.lastNode > 30 || KingNash.KingdomB.Moves.recentNode > 30))
            node = (nodeDiff === 4) ? KingNash.KingdomB.Moves.recentNode - 2 : KingNash.KingdomB.Moves.recentNode + 2;
        if (!isNaN(node)) {
            console.log("WTF");
            if (KingNash.nodeContains.KnightA(node))
                KingNash.removeKnight(node);
            else
                KingNash.WrongMove();
        } else {
            console.log("nodeDiff " + nodeDiff);
            if (nodeDiff === 1 || nodeDiff === -1 || nodeDiff === 2 || nodeDiff === -2) {} else if ((nodeDiff === 20 || nodeDiff === -20 || nodeDiff === 18 || nodeDiff === -18 || nodeDiff === 22 || nodeDiff === -22) && (KingNash.KingdomB.Moves.lastNode === 14 || KingNash.KingdomB.Moves.recentNode === 14)) {
                console.log("True'''''''Move");
            } else {
                KingNash.WrongMove();
            }
        }
    }
};
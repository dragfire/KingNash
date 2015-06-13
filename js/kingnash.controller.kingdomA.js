// kingnash.controller.kingdomA.js
// Author: Devajit Asem
// Game: KingNash

KingNash.KingdomA_Controller = function() {
    if (KingNash.ElemIndex < 16 && !isNaN(KingNash.ElemIndex) && KingNash.KingdomA.Moves.moving) {

        KingNash.KingdomA.Moves.lastNode = KingNash.KingdomA.Moves.twoNodes[0];
        KingNash.KingdomA.Moves.recentNode = KingNash.KingdomA.Moves.twoNodes[1];
        var nodeDiff = KingNash.KingdomA.Moves.recentNode - KingNash.KingdomA.Moves.lastNode;
        var columnDiff = (KingNash.KingdomA.Moves.recentNode - KingNash.KingdomA.Moves.lastNode) % 5;
        console.log("ColumnDiff : " + columnDiff);
        if (!isNaN(nodeDiff)) {
            KingNash.checkMovementA(nodeDiff, columnDiff);
        }
        KingNash.KingdomA.Moves.moving = false;
    }
};

KingNash.checkMovementA = function(nodeDiff, columnDiff) {
    var node;
    if (KingNash.KingdomA.Moves.lastNode < 25 && KingNash.KingdomA.Moves.recentNode < 25) {
        if (columnDiff === 0) {
            // Column Check
            node = (nodeDiff / 5 === 2) ? KingNash.KingdomA.Moves.recentNode - 5 : KingNash.KingdomA.Moves.recentNode + 5;
            if (nodeDiff === 10 || nodeDiff === -10) {
                if (KingNash.nodeContains.KnightB(node))
                    KingNash.removeKnight(node);
                else
                    KingNash.WrongMove();
            } else {
                if (nodeDiff === 5 || nodeDiff === -5) {} else
                    KingNash.WrongMove();
            }
        } else if (columnDiff === 2 || columnDiff === -2) {

            if (nodeDiff === 12 || nodeDiff === -12)
                node = (nodeDiff === 12) ? KingNash.KingdomA.Moves.recentNode - 6 : KingNash.KingdomA.Moves.recentNode + 6;
            else if (nodeDiff === 8 || nodeDiff === -8)
                node = (nodeDiff === 8) ? KingNash.KingdomA.Moves.recentNode - 4 : KingNash.KingdomA.Moves.recentNode + 4;
            else if (nodeDiff === 2 || nodeDiff === -2)
                node = (nodeDiff === 2) ? KingNash.KingdomA.Moves.recentNode - 1 : KingNash.KingdomA.Moves.recentNode + 1;
            if (KingNash.nodeContains.KnightB(node))
                KingNash.removeKnight(node);
            else
                KingNash.WrongMove();
        } else if (columnDiff === 1 || columnDiff === -1) {
            if (nodeDiff === 1 || nodeDiff === -1) {} else if ((nodeDiff === 6 || nodeDiff === -6 || nodeDiff == 5 || nodeDiff == -5) && (KingNash.KingdomA.Moves.recentNode % 2 === 0)) {} else
                KingNash.WrongMove();
        } else if (columnDiff === -3 || columnDiff === 3) {
            if (nodeDiff === 8 || nodeDiff === -8) {
                node = (nodeDiff === 8) ? KingNash.KingdomA.Moves.recentNode - 4 : KingNash.KingdomA.Moves.recentNode + 4;
                if (!isNaN(node)) {
                    if (KingNash.nodeContains.KnightB(node))
                        KingNash.removeKnight(node);
                } else
                    KingNash.WrongMove();
            } else
                KingNash.WrongMove();
        } else {
            if ((nodeDiff == 4 || nodeDiff == -4) && (columnDiff == 4 || columnDiff == -4)) {} else
                KingNash.WrongMove();
        }
    } else if ((KingNash.KingdomA.Moves.lastNode > 24 && KingNash.KingdomA.Moves.recentNode < 37) || (KingNash.KingdomA.Moves.lastNode < 37 && KingNash.KingdomA.Moves.recentNode > 24)) {
        if (nodeDiff === 15 || nodeDiff === -15)
            node = 26;
        else if ((nodeDiff === 17 || nodeDiff === -17) && (KingNash.KingdomA.Moves.lastNode === 27 || KingNash.KingdomA.Moves.lastNode === 10))
            node = 28;
        else if ((nodeDiff === 19 || nodeDiff === -19) && (KingNash.KingdomA.Moves.lastNode === 29 || KingNash.KingdomA.Moves.lastNode === 10))
            node = 30;
        else if (nodeDiff === 10 || nodeDiff === -10 || nodeDiff === 17 || nodeDiff === -17 || nodeDiff === 24 || nodeDiff === -24)
            node = 10;
        else if ((nodeDiff === 21 || nodeDiff === -21) && (KingNash.KingdomA.Moves.lastNode === 35 || KingNash.KingdomA.Moves.lastNode === 14))
            node = 36;
        else if ((nodeDiff === 17 || nodeDiff === -17) && (KingNash.KingdomA.Moves.lastNode === 31 || KingNash.KingdomA.Moves.lastNode === 14))
            node = 32;
        else if ((nodeDiff === 19 || nodeDiff === -19) && (KingNash.KingdomA.Moves.lastNode === 33 || KingNash.KingdomA.Moves.lastNode === 14))
            node = 34;
        else if (nodeDiff === 14 || nodeDiff === -14 || nodeDiff === 28 || nodeDiff === -28 || nodeDiff === 21 || nodeDiff === -21)
            node = 14;
        else if ((nodeDiff === 4 || nodeDiff === -4) && (KingNash.KingdomA.Moves.lastNode > 24 || KingNash.KingdomA.Moves.recentNode > 24))
            node = (nodeDiff === 4) ? KingNash.KingdomA.Moves.recentNode - 2 : KingNash.KingdomA.Moves.recentNode + 2;

        if (!isNaN(node)) {
            console.log("NODE : " + node);
            if (KingNash.nodeContains.KnightB(node))
                KingNash.removeKnight(node);
            else
                KingNash.WrongMove();

        } else {
            console.log("nodeDiff " + nodeDiff);
            if (nodeDiff === 1 || nodeDiff === -1 || nodeDiff === 2 || nodeDiff === -2) {} else if ((nodeDiff === 16 || nodeDiff === -16 || nodeDiff === 18 || nodeDiff === -18 || nodeDiff === 20 || nodeDiff === -20) && (KingNash.KingdomA.Moves.lastNode === 10 || KingNash.KingdomA.Moves.recentNode === 10)) {} else {

                KingNash.WrongMove();
            }
        }
    }
};
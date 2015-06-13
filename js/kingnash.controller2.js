// kingnash.controller.js
// Author: Devajit Asem
// Game: KingNash

var lastKnight_A_Index,
    lastKnight_B_Index;
KingNash.MovementController = function () {
    if (!isNaN(KingNash.ElemIndex)) {
        if (cNode < 37) {

            if (KingNash.ElemIndex < 16) {
                console.log("lastKnight_A_Index : " + lastKnight_A_Index);

                if ((lastKnight_A_Index !== KingNash.ElemIndex) && !isNaN(lastKnight_A_Index)) {
                    KingNash.KingdomA.Moves.twoNodes.splice(0, KingNash.KingdomA.Moves.twoNodes.length);
                    KingNash.KingdomA.Animate = false;
                    if (!(KingNash.ElemIndex === 0))
                        KingNash.AnimateActiveKnightA();
                    if (lastKnight_A_Index === 0)
                        KingNash.AnimateActiveKingA();

                }
                KingNash.KingdomA.Animate = true;
                if (!(KingNash.ElemIndex === 0))
                    KingNash.AnimateActiveKnightA();

                if (KingNash.ElemIndex === 0)
                    KingNash.AnimateActiveKingA();
                if ((lastKnight_B_Index !== KingNash.ElemIndex) && !isNaN(lastKnight_B_Index)) {
                    console.log("Fucking   ryte1");
                    KingNash.KingdomB.Animate = false;

                    KingNash.AnimateActiveKnightB();
                    if (lastKnight_B_Index === 0)
                        KingNash.AnimateActiveKingB();
                }


                KingNash.KingdomA.Moves.lastNode = cNode;

                KingNash.KingdomA.Moves.twoNodes.push(KingNash.KingdomA.Moves.lastNode);
                KingNash.KingdomA.Moves.moving = true;
                lastKnight_A_Index = KingNash.ElemIndex;
                if (KingNash.KingdomA.Moves.twoNodes.length > 2) {
                    KingNash.KingdomA.Moves.twoNodes.splice(0, 1);
                }
            } else if (KingNash.ElemIndex < 32 && KingNash.ElemIndex > 15) {

                if (lastKnight_B_Index !== KingNash.ElemIndex && !isNaN(lastKnight_B_Index)) {
                    KingNash.KingdomB.Moves.twoNodes.splice(0, KingNash.KingdomB.Moves.twoNodes.length);
                    KingNash.KingdomB.Animate = false;
                    if (!(KingNash.ElemIndex === 16))
                        KingNash.AnimateActiveKnightB();
                    if (lastKnight_B_Index === 16)
                        KingNash.AnimateActiveKingB();
                }
                KingNash.KingdomB.Animate = true;
                if (!(KingNash.ElemIndex === 16))
                    KingNash.AnimateActiveKnightB();
                if (KingNash.ElemIndex === 16)
                    KingNash.AnimateActiveKingB();

                if (lastKnight_A_Index !== KingNash.ElemIndex && !isNaN(lastKnight_A_Index)) {
                    //console.log("Fucking   ryte2");
                    KingNash.KingdomA.Animate = false;
                    KingNash.AnimateActiveKnightA();
                    if (lastKnight_A_Index === 16)
                        KingNash.AnimateActiveKingA();
                }
                KingNash.KingdomB.Moves.lastNode = cNode;

                KingNash.KingdomB.Moves.twoNodes.push(KingNash.KingdomB.Moves.lastNode);
                KingNash.KingdomB.Moves.moving = true;
                lastKnight_B_Index = KingNash.ElemIndex;
                if (KingNash.KingdomB.Moves.twoNodes.length > 2) {
                    KingNash.KingdomB.Moves.twoNodes.splice(0, 1);
                }
            }

        }

    }
};

KingNash.nodeContains = {
    Knight: function (node) {
        var count = 0;
        for (var i = 0, n = KingNash.ElemArr.length; i < n; i++) {
            if (KingNash.ElemArr[i].node === node) {
                count++;
            }
        }
        if (count > 0)
            return true;
        else return false;
    },
    KnightA: function (node) {
        var count = 0;
        for (var i = 0, n = KingNash.ElemArr.length - 15; i < n; i++) {
            if (KingNash.ElemArr[i].node === node) {
                count++;
            }
        }
        if (count > 0)
            return true;
        else return false;
    },
    KnightB: function (node) {
        var count = 0;
        var n = KingNash.ElemArr.length - 1;
        while (n !== 15) {
            if (KingNash.ElemArr[n].node === node) {
                count++;
            }
            n--;
        }
        if (count > 0)
            return true;
        else return false;
    }
};
KingNash.removeKnight = function (node) {
    if (KingNash.nodeContains.Knight(node) && !isNaN(node)) {
        if (KingNash.Nodes[node].Knight === 1) {
            for (var i = 0, n = KingNash.ElemArr.length; i < n; i++) {
                if (KingNash.ElemArr[i].node === node) {
                    KingNash.ElemArr[i].Id.remove();
                    KingNash.Nodes[node].Knight -= 1;
                    if (KingNash.ElemIndex < 16)
                        KingNash.Nodes[node].KnightA -= 1;
                    else
                        KingNash.Nodes[node].KnightB -= 1;
                    KingNash.ElemArr[i].node = undefined;
                }
            }
        }
    }
};

KingNash.AnimateActiveKnightA = function () {
    console.log("Activating Knights");
    if (KingNash.KingdomA.Animate && !(KingNash.ElemIndex === 0)) {

        KingNash.ElemArr[KingNash.ElemIndex].Id.className = "bro_beads_A activeBead";
    } else {


        KingNash.ElemArr[lastKnight_A_Index].Id.className = "bro_beads_A";

    }
};

KingNash.AnimateActiveKnightB = function () {
    console.log("Activating Knights");
    if (KingNash.KingdomB.Animate && !(KingNash.ElemIndex === 16)) {

        KingNash.ElemArr[KingNash.ElemIndex].Id.className = "bro_beads_B activeBead";
    } else {


        KingNash.ElemArr[lastKnight_B_Index].Id.className = "bro_beads_B";
    }
};


KingNash.AnimateActiveKingA = function () {

    if (KingNash.KingdomA.Animate) {

        KingNash.ElemArr[KingNash.ElemIndex].Id.className = "kingA activeKing";
    } else {

        KingNash.ElemArr[lastKnight_A_Index].Id.className = "kingA";
    }
};
KingNash.AnimateActiveKingB = function () {

    if (KingNash.KingdomB.Animate) {

        KingNash.ElemArr[KingNash.ElemIndex].Id.className = "kingB activeKing";
    } else {

        KingNash.ElemArr[lastKnight_B_Index].Id.className = "kingB";
    }
};
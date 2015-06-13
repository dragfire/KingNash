// kingnash.movement.js
// Author: Devajit Asem
// Game : KingNash


// Movement of beads


KingNash.moveBeads = function() {
    var curNode = cNode % 5;

    if (!isNaN(KingNash.ElemIndex) && !isNaN(curNode) && !(KingNash.KingdomA.Moves.wrongMove || KingNash.KingdomB.Moves.wrongMove)) {
        KingNash.ElemArr[KingNash.ElemIndex].node = cNode;
        if (KingNash.ElemIndex < 32) {
            if (cNode < 5) {
                // console.log("Movement Of Beads.");
                KingNash.ElemArr[KingNash.ElemIndex].Id.css({
                    left: (curNode * 140) + "px"
                });
                KingNash.ElemArr[KingNash.ElemIndex].Id.css({
                    top: "0px"
                });
                KingNash.ElemArr[KingNash.ElemIndex].node = cNode;
            } else if (cNode < 10 && cNode > 4) {
                //console.log("Movement Of Beads.");
                KingNash.ElemArr[KingNash.ElemIndex].Id.css({
                    left: (curNode * 140) + "px"
                });
                KingNash.ElemArr[KingNash.ElemIndex].Id.css({
                    top: "140px"
                });

            } else if (cNode < 15 && cNode > 9) {
                //console.log("Movement Of Beads.");
                KingNash.ElemArr[KingNash.ElemIndex].Id.css({
                    left: (curNode * 140) + "px"
                });
                KingNash.ElemArr[KingNash.ElemIndex].Id.css({
                    top: "280px"
                });

            } else if (cNode < 20 && cNode > 14) {

                //console.log("Movement Of Beads.");
                KingNash.ElemArr[KingNash.ElemIndex].Id.css({
                    left: (curNode * 140) + "px"
                });
                KingNash.ElemArr[KingNash.ElemIndex].Id.css({
                    top: "420px"
                });

            } else if (cNode < 25 && cNode > 19) {

                //console.log("Movement Of Beads.");
                KingNash.ElemArr[KingNash.ElemIndex].Id.css({
                    left: (curNode * 140) + "px"
                });
                KingNash.ElemArr[KingNash.ElemIndex].Id.css({
                    top: "560px"
                });
            } else if (cNode % 24 < 6 && cNode % 2 !== 0) { // Castle A column 1

                //console.log("Movement Of Beads.");
                KingNash.ElemArr[KingNash.ElemIndex].Id.css({
                    left: "-200px"
                });
                //console.log("curNode " + curNode);
                KingNash.ElemArr[KingNash.ElemIndex].Id.css({
                    top: (cNode % 25 === 0) ? "80px" : (cNode % 25 * 100 + 80) + "px"
                });

            } else if (cNode % 24 < 7 && cNode % 2 === 0) { // Castle A column 2
                //console.log("Movement Of Beads.");
                KingNash.ElemArr[KingNash.ElemIndex].Id.css({
                    left: "-100px"
                });
                //console.log("curNode " + curNode);
                KingNash.ElemArr[KingNash.ElemIndex].Id.css({
                    top: ((cNode % 26) / 2 === 0) ? "180px" : (((cNode % 26) / 2 + 1) * 100 + 80) + "px"
                });

            } else if (cNode % 30 < 6 && cNode % 2 !== 0) { // Castle B column 1
                //console.log("Movement Of Beads.");
                KingNash.ElemArr[KingNash.ElemIndex].Id.css({
                    left: "760px"
                });
                //console.log("curNode " + curNode);
                KingNash.ElemArr[KingNash.ElemIndex].Id.css({
                    top: (cNode % 31 === 0) ? "80px" : (cNode % 31 * 100 + 80) + "px"
                });

            } else if (cNode % 30 < 7 && cNode % 2 === 0) { // Castle B column 2
                //console.log("Movement Of Beads.");
                KingNash.ElemArr[KingNash.ElemIndex].Id.css({
                    left: "660px"
                });
                //console.log("curNode " + curNode);
                KingNash.ElemArr[KingNash.ElemIndex].Id.css({
                    top: ((cNode % 32) / 2 === 0) ? "180px" : (((cNode % 32) / 2 + 1) * 100 + 80) + "px"
                });

            }
        }
        // Monitoring the movements of Both the kingdoms
        // Inc. & Dec.
        if (KingNash.ElemIndex < 16) {
            if (!isNaN(KingNash.KingdomA.Moves.recentNode)) {
                if (KingNash.ElemIndex === 0) {
                    KingNash.Nodes[KingNash.KingdomA.Moves.recentNode].KingA += 1;
                    KingNash.Nodes[KingNash.KingdomA.Moves.lastNode].KingA = (KingNash.Nodes[KingNash.KingdomA.Moves.lastNode].KingA === 0) ? 0 : KingNash.Nodes[KingNash.KingdomA.Moves.lastNode].KingA - 1;
                    KingNash.Nodes[KingNash.KingdomA.Moves.recentNode].KnightA += 1;
                    KingNash.Nodes[KingNash.KingdomA.Moves.lastNode].KnightA = (KingNash.Nodes[KingNash.KingdomA.Moves.lastNode].KnightA === 0) ? 0 : KingNash.Nodes[KingNash.KingdomA.Moves.lastNode].KnightA - 1;
                    KingNash.Nodes[KingNash.KingdomA.Moves.recentNode].Knight += 1;
                    KingNash.Nodes[KingNash.KingdomA.Moves.lastNode].Knight = (KingNash.Nodes[KingNash.KingdomA.Moves.lastNode].Knight === 0) ? 0 : KingNash.Nodes[KingNash.KingdomA.Moves.lastNode].Knight - 1;
                } else {

                    KingNash.Nodes[KingNash.KingdomA.Moves.recentNode].KnightA += 1;
                    KingNash.Nodes[KingNash.KingdomA.Moves.lastNode].KnightA = (KingNash.Nodes[KingNash.KingdomA.Moves.lastNode].KnightA === 0) ? 0 : KingNash.Nodes[KingNash.KingdomA.Moves.lastNode].KnightA - 1;
                    KingNash.Nodes[KingNash.KingdomA.Moves.recentNode].Knight += 1;
                    KingNash.Nodes[KingNash.KingdomA.Moves.lastNode].Knight = (KingNash.Nodes[KingNash.KingdomA.Moves.lastNode].Knight === 0) ? 0 : KingNash.Nodes[KingNash.KingdomA.Moves.lastNode].Knight - 1;
                    //console.log(" Recent Node Testing side A: " + KingNash.KingdomA.Moves.recentNode);
                    //console.log(KingNash.Nodes[KingNash.KingdomA.Moves.recentNode]);
                }
            }
        } else if (KingNash.ElemIndex < 32 && KingNash.ElemIndex > 15) {
            if (!isNaN(KingNash.KingdomB.Moves.recentNode)) {
                if (KingNash.ElemIndex === 16) {
                    KingNash.Nodes[KingNash.KingdomB.Moves.recentNode].KingB += 1;
                    KingNash.Nodes[KingNash.KingdomB.Moves.lastNode].KingB = (KingNash.Nodes[KingNash.KingdomB.Moves.lastNode].KingB === 0) ? 0 : KingNash.Nodes[KingNash.KingdomB.Moves.lastNode].KingB - 1;
                    KingNash.Nodes[KingNash.KingdomB.Moves.recentNode].Knight += 1;
                    KingNash.Nodes[KingNash.KingdomB.Moves.lastNode].Knight = (KingNash.Nodes[KingNash.KingdomB.Moves.lastNode].Knight === 0) ? 0 : KingNash.Nodes[KingNash.KingdomB.Moves.lastNode].Knight - 1;
                } else {
                    //console.log("Fucking B");
                    KingNash.Nodes[KingNash.KingdomB.Moves.recentNode].KnightB += 1;
                    KingNash.Nodes[KingNash.KingdomB.Moves.lastNode].KnightB = (KingNash.Nodes[KingNash.KingdomB.Moves.lastNode].KnightB === 0) ? 0 : KingNash.Nodes[KingNash.KingdomB.Moves.lastNode].KnightB - 1;
                    KingNash.Nodes[KingNash.KingdomB.Moves.recentNode].Knight += 1;
                    KingNash.Nodes[KingNash.KingdomB.Moves.lastNode].Knight = (KingNash.Nodes[KingNash.KingdomB.Moves.lastNode].Knight === 0) ? 0 : KingNash.Nodes[KingNash.KingdomB.Moves.lastNode].Knight - 1;
                }
            }
        }
    }
    cNode = undefined;
    KingNash.KingdomA.Moves.wrongMove = false;
    KingNash.KingdomB.Moves.wrongMove = false;
};


function GTimer() {
    window.setTimeout(GTimer, 30);
    KingNash.MovementController();
    KingNash.KingdomA_Controller();
    KingNash.KingdomB_Controller();
    KingNash.moveBeads();
}

(function() {
    GTimer();
}());
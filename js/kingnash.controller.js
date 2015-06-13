// kingnash.controller.js
// Author: Devajit Asem
// Game: KingNash

var lastKnight_Index;
KingNash.MovementController = function() {
    if (!isNaN(KingNash.ElemIndex)) {
        if (cNode < 37) {
            if (KingNash.ElemIndex < 16) {
                console.log("lastKnight_Index : " + lastKnight_Index);
                if ((lastKnight_Index !== KingNash.ElemIndex) && !isNaN(lastKnight_Index))
                    KingNash.KingdomA.Moves.twoNodes.splice(0, KingNash.KingdomA.Moves.twoNodes.length);
                KingNash.Kingdom.Animate = true;
                if ((KingNash.ElemIndex === 0))
                    KingNash.AnimateActiveKingA();
                else
                    KingNash.AnimateActiveKnightA();
                KingNash.KingdomA.Moves.lastNode = cNode;
                KingNash.KingdomA.Moves.twoNodes.push(KingNash.KingdomA.Moves.lastNode);
                KingNash.KingdomA.Moves.moving = true;
                lastKnight_Index = KingNash.ElemIndex;
                if (KingNash.KingdomA.Moves.twoNodes.length > 2) {
                    KingNash.KingdomA.Moves.twoNodes.splice(0, 1);
                }
            } else if (KingNash.ElemIndex < 32 && KingNash.ElemIndex > 15) {

                if (lastKnight_Index !== KingNash.ElemIndex && !isNaN(lastKnight_Index))
                    KingNash.KingdomB.Moves.twoNodes.splice(0, KingNash.KingdomB.Moves.twoNodes.length);


                KingNash.Kingdom.Animate = true;
                if (KingNash.ElemIndex === 16)
                    KingNash.AnimateActiveKingB();
                else
                    KingNash.AnimateActiveKnightB();

                KingNash.KingdomB.Moves.lastNode = cNode;

                KingNash.KingdomB.Moves.twoNodes.push(KingNash.KingdomB.Moves.lastNode);
                KingNash.KingdomB.Moves.moving = true;
                lastKnight_Index = KingNash.ElemIndex;
                if (KingNash.KingdomB.Moves.twoNodes.length > 2) {
                    KingNash.KingdomB.Moves.twoNodes.splice(0, 1);
                }
            }
        }
    }
};

KingNash.nodeContains = {
    Knight: function(node) {
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
    KnightA: function(node) {
        var count = 0;
        var n = 0;
        while (n !== 16) {
            if (KingNash.ElemArr[n].node === node) {
                count++;
            }
            n++;
        }
        if (count > 0)
            return true;
        else return false;
    },
    KnightB: function(node) {
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
KingNash.removeKnight = function(node) {
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

KingNash.AnimateActiveKnightA = function() {
    //    console.log("Activating Knights");
    KingNash.RemovePreviousAnimation();
    if (KingNash.Kingdom.Animate && !(KingNash.ElemIndex === 0))
    //KingNash.ElemArr[KingNash.ElemIndex].Id.className = "bro_beads_A activeBead";
        KingNash.ElemArr[KingNash.ElemIndex].Id.addClass("activeBead");
    else
        KingNash.ElemArr[lastKnight_A_Index].Id.addClass("bro_beads_A");
    KingNash.Kingdom.Animate = false;
};

KingNash.AnimateActiveKnightB = function() {
    //    console.log("Activating Knights");
    KingNash.RemovePreviousAnimation();
    if (KingNash.Kingdom.Animate && !(KingNash.ElemIndex === 16))
        KingNash.ElemArr[KingNash.ElemIndex].Id.addClass("activeBead");
    else
        KingNash.ElemArr[lastKnight_B_Index].Id.addClass("bro_beads_B");
    KingNash.Kingdom.Animate = false;
};

KingNash.AnimateActiveKingA = function() {
    KingNash.RemovePreviousAnimation();
    if (KingNash.Kingdom.Animate)
        KingNash.ElemArr[KingNash.ElemIndex].Id.addClass("activeKing");
    else
        KingNash.ElemArr[lastKnight_Index].Id.addClass("kingA");
    KingNash.Kingdom.Animate = false;
};

KingNash.AnimateActiveKingB = function() {
    KingNash.RemovePreviousAnimation();
    if (KingNash.Kingdom.Animate)
        KingNash.ElemArr[KingNash.ElemIndex].Id.addClass("activeKing");
    else
        KingNash.ElemArr[lastKnight_Index].Id.addClass("kingB");
    KingNash.Kingdom.Animate = false;
};

KingNash.RemovePreviousAnimation = function() {
    if (!isNaN(lastKnight_Index)) {
        //        console.log("RemovePreviousAnimation");
        var last_knight_index = lastKnight_Index;
        if (last_knight_index == 0 || last_knight_index == 16)
            KingNash.ElemArr[last_knight_index].Id.removeClass("activeKing");
        else
            KingNash.ElemArr[last_knight_index].Id.removeClass("activeBead");
    }
};

KingNash.BeadsWrongMoveDetect = function() {
    if ((KingNash.KingdomA.Moves.moving || KingNash.KingdomB.Moves.moving) && !KingNash.nodeContains.Knight(cNode)) {
        var nodeDiff;
        if (KingNash.ElemIndex < 16)
            nodeDiff = KingNash.KingdomA.Moves.twoNodes[1] - KingNash.KingdomA.Moves.twoNodes[0];
        else
            nodeDiff = KingNash.KingdomB.Moves.twoNodes[1] - KingNash.KingdomB.Moves.twoNodes[0];
        if (!isNaN(nodeDiff)) {
            if (WrongMoveDetect(nodeDiff)) {
                KingNash.WrongMove();
                if (KingNash.ElemIndex < 16) {
                    KingNash.KingdomA.Moves.twoNodes.splice(1, 1);
                    KingNash.KingdomA.Moves.wrongMove = true;
                    if (KingNash.KingdomA.Moves.twoNodes.length > 1)
                        KingNash.KingdomA.Moves.twoNodes.splice(0, 1);
                } else {
                    KingNash.KingdomB.Moves.twoNodes.splice(1, 1);
                    KingNash.KingdomB.Moves.wrongMove = true;
                    if (KingNash.KingdomB.Moves.twoNodes.length > 1)
                        KingNash.KingdomB.Moves.twoNodes.splice(0, 1);
                }
            }
        }

    }

    function WrongMoveDetect(nodeDiff) {
        var activeNode = KingNash.Game.CheckActiveNode(),
            nDArr = [1, 2, 4, 5, 6, 8, 10, 12];
        if (!(nodeDiff in nDArr))
            return true;
        else
            return false;
    }
};

KingNash.WrongMove = function() {
    console.log("Wrong Move");
    var wrong = $("#wrongMove");
    if (KingNash.ElemIndex < 16) {
        KingNash.KingdomA.Moves.twoNodes.splice(1, 1);
        KingNash.KingdomA.Moves.wrongMove = true;
    } else {
        KingNash.KingdomB.Moves.twoNodes.splice(1, 1);
        KingNash.KingdomB.Moves.wrongMove = true;
    }
    wrong.css({
        position: 'absolute',
        display: "block",
        left: (GBoard.width() / 2 + GBoard.offset().left - $("#wrongMove").width() + 15),
        top: (GBoard.height() / 2)
    });
    wrong.addClass("wrong");
    setTimeout(function() {
        wrong.css({
            display: "none"
        });
        wrong.removeClass("wrong");
    }, 600);

};
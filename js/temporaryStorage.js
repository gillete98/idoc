/**
 * Created by EEng1 on 8/17/2015.
 */
function getNeighborData(lncell){
    var bigArray = bigString.split('n');
    for (var i=0;i<bigArray.length;i++) {
        var bigline = bigArray[i].split(',');
        if (bigline[0]==lncell){
            return bigline[1].split(';');
        }
    }
    return [];
}
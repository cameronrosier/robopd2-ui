export function mutateCellsArray(cells, inventoryWidth, inventoryHeight) {
    var mutatedCells = []
    for (var i = 0; i < inventoryWidth; i++) {
        var cellGroup = []
        for (var j = i; j < inventoryHeight*inventoryWidth; j+=inventoryWidth) {
            cellGroup.push(cells[j])
        }
        mutatedCells.push(cellGroup)
    }
    return mutatedCells
}


export function findCharmSlot(cells, inventoryWidth, inventoryHeight, size) {
    var mutatedCells = mutateCellsArray(cells, inventoryWidth, inventoryHeight)
    var availableCells = []
    for (var i = 0; i < mutatedCells.length; i++) {
        const mutatedCellGroup = mutatedCells[i]
        var consecutiveOpenCells = 0
        for (var j = 0; j < mutatedCellGroup.length; j++) {
            if (mutatedCellGroup[j].inUse == false) {
                if (size == 1) {
                    return [mutatedCellGroup[j]]
                }
                consecutiveOpenCells += 1
            } else {
                consecutiveOpenCells = 0
            }

            if (consecutiveOpenCells == size) {
                var start = j - size + 1
                var cellGroup = mutatedCellGroup.slice(start, start + parseInt(size))
                return cellGroup
            }
        }
    }
    return availableCells
}

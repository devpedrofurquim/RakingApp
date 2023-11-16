const RankingGrid = ({ items, imgArr, drag, allowDrop, drop }) => {

    const rankingGrid = [];
    const cellCollectionTop = [];
    const cellCollectionMiddle = [];
    const cellCollectionBottom = [];
    const cellCollectionWorst = [];

    function pushCellMarkupToArr(cellCollection, rankNum, rowLabel) {
        if (rankNum > 0) {
            let item = items.find(object => object.ranking === rankNum);
            cellCollection.push(<div id={`rank-${rankNum}`} key={`rank-${rankNum}`} onDrop={drop} onDragOver={allowDrop} className="w-[40px] md:w-[40px] lg:w-[80px] text-center flex items-center">
                {(item != null) ? <img id={`item-${item.id}`} key={`item-${item.id}`} src={imgArr.find(object => object.id === item.id)?.image} draggable="true" onDragStart={drag} />
                        : null}
            </div>);
        } else {
            cellCollection.push(<div className="text-center flex items-center text-md md:text-xl lg:text-2xl">
                    <h4>{rowLabel}</h4>
            </div>);
        }
    }

    function createCellsForRow(rowNum) {
        let rankNum = 0;
        let currentCollection = [];
        let label = "";
        const numCells = 5;

        for (let cell = 1; cell <= numCells; cell++) {
            rankNum = (cell === 1) ? 0 : (numCells * (rowNum - 1)) + cell - rowNum;

            switch (rowNum) {
                case 1:
                    currentCollection = cellCollectionTop;
                    label = "Top Tier";
                    break;
                case 2:
                    currentCollection = cellCollectionMiddle;
                    label = "Middle Tier";
                    break;
                case 3:
                    currentCollection = cellCollectionBottom;
                    label = "Bottom Tier";
                    break;
                case 4:
                    currentCollection = cellCollectionWorst;
                    label = "Worst Tier";
                    break;
            }
            pushCellMarkupToArr(currentCollection, rankNum, label);
        }
    }

        function createCellsForRows() {
            const maxRows = 5;
            for (let row = 1; row <= maxRows; row++) {
                createCellsForRow(row);
            }
        }

        function createRowsForGrid() {
            rankingGrid.push(<div key={`rank-top`} className="my-2 h-[100px] grid grid-cols-5 h-100 gap-5 px-4 bg-lime-400 rounded-lg">{cellCollectionTop}</div>);
            rankingGrid.push(<div key={`rank-middle`} className="my-2 h-[100px] grid grid-cols-5 h-100 gap-5 px-4 bg-yellow-400 rounded-lg">{cellCollectionMiddle}</div>);
            rankingGrid.push(<div key={`rank-bottom`} className="my-2 h-[100px] grid grid-cols-5 h-100 gap-5 px-4 bg-orange-900 rounded-lg">{cellCollectionBottom}</div>);
            rankingGrid.push(<div key={`rank-worst`} className="my-2 h-[100px] grid grid-cols-5 h-100 gap-5 px-4 bg-red-600 rounded-lg">{cellCollectionWorst}</div>);

            return rankingGrid;
        };

        function createRankingGrid() {
            createCellsForRows();
            return createRowsForGrid();
        };

        return (
            <div className="flex flex-col mt-4 mx-5 justify-self-center mb-[15px]">
                {createRankingGrid()}
            </div>
        );
}
export default RankingGrid;
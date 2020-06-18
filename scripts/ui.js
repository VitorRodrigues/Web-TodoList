function addCard() {
    let text = window.prompt("Digite o texto")
    var card = new Card(Math.random().toString(), text)
    board.addCard(card)
    saveBoard()
}

function addColumn() {
    let text = window.prompt("Digite o texto")
    var col = new BoardColumn(Math.random().toString(), text)
    board.columns.push(col)
    saveBoard()
}
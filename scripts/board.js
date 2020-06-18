Array.prototype.insert = function(index, item) {
    this.splice(index, 0, item);
};

var storage = window.localStorage
var board = { name: "", columns: [] }

function saveBoard() {
    storage.setItem('board', JSON.stringify(board))
}

function restoreBoard() {
    const data = storage.getItem('board')
    if (data) {
        board = JSON.parse(data)
    } else {
        setupInitialBoard()
    }
}

function reset() {
    storage.clear()
    setupInitialBoard()
}

function setupInitialBoard() {
    board = {
        name: "Board da vida webdev",
        columns: [{
                id: "todo",
                title: "To Do",
                cards: [new Card("1", "azul")]
            },
            {
                id: "doing",
                title: "Doing",
                cards: []
            },
            {
                id: "done",
                title: "Done",
                cards: []
            }
        ],
        addCard: function(card) {
            if (board.columns.length <= 0) {
                board.columns = [new BoardColumn("init", "Column", [])]
            }

            board.columns[0].cards.insert(0, card)
            console.log("Card adicionado com sucesso!")
        }
    }
}



class Board {
    constructor(name, columns) {
        this.name = name
        this.columns = columns
    }
}

class BoardColumn {
    constructor(id, title, cards) {
        this.id = id
        this.title = title
        this.cards = cards
    }
}

class Card {
    constructor(id, title) {
        this.title = title
        this.id = id
    }
}
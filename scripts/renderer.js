// import "board.js"

Vue.component("board", {
    props: ["board"],
    template: `
    <div id="board">
    <h1>{{ board.name }}</h1>
    <div id="actions">
        <button class="btn btn-primary" aria-label="Adicionar tarefa" onclick="addCard()">+Tarefa</button>
        <button class="btn btn-primary" aria-label="Adicionar coluna" onclick="addColumn()">+Coluna</button>
        <button class="btn btn-secondary right" aria-label="Excluir">Excluir</button>
    </div>
    <div id="board" class="board-layout">
        <column-list v-bind:columns="board.columns"></column-list>
    </div>
    </div>`
})

Vue.component("column-list", {
    props: ["columns"],
    template: '<div class="columns-list">\
     <card-column v-for="col in columns" v-bind:key="col.id" v-bind:column="col"></card-column> \
     </div>'
})

Vue.component('card-column', {
    props: ['column'],
    template: '<div :id="column.id" class="column"\
    ondrop="dropIt(event)"\
    ondragover="allowDrop(event)"\
    ondragenter="dragEnter(event)"\
    ondragleave="dragExit(event)">\
    <header class="header">{{ column.title }}</header>\
    <card v-for="card in column.cards" v-bind:card="card" v-bind:key="card.id"></card>\
    </div>'
})

Vue.component("card", {
    props: ["card"],
    template: '<div :id="card.id" \
    class="card" \
    draggable="true" \
    ondragstart="dragStart(event)">\
    {{ card.title }}\
    </div>'
})
Vue.component('task-category', {
    props: ["category", "tasks"],
    template: `
    <div>
        <div class="category-header">{{category.name}}</div>
            <div class="tasks">
                <div v-for="task in filterTasks(tasks, category.id)">
                {{task.name}}
                </div>
            </div>
        </div>
    </div>`,
    methods: {
        filterTasks: function(aTasks, sType) {
            return aTasks.filter(function(el) {
                return el.type === sType
            })
        },
     
    }
})

var app = new Vue({
    el: '#app',
    data: {
        categoryName: '',
        countId: 0,
        columns: [
            { name: "backlog", id: "backlog" },
            { name: "In Process", id: "inprocess" },
            { name: "Done", id: "Done" },
        ],
        tasks: [{
            name: "Task1",
            type: "backlog"
        },
        {
            name: "Task1",
            type: "backlog"
        },
        {
            name: "Task1",
            type: "backlog"
        },
        {
            name: "Task1",
            type: "backlog"
        },
        {
            name: "Task1",
            type: "backlog"
        },
        {
            name: "Task1",
            type: "backlog"
        },
        {
            name: "Task1",
            type: "Done"
        },        
        {
            name: "Test task",
            type: "test"
        },
    ]
    },
    methods: {
        addTask: function(event) {
         this.tasks.push({name: "New task", type: "inprocess"})
        },
        addNewColumn: function(event) {
            this.countId++
            this.columns.push({name: this.categoryName, id: `category${this.countId}`})
            this.categoryName = ""
        }
    }
})

/*
new Vue({
    el: "#app"
}); */
/*const number= [1, 2, 3, 4, 5]

number.forEach(function(item){
    console.log(item)
}) */

const todos= [
    {text: 'lavar a louça', done: false},
    {text: 'fazer café', done: true},
    {text: 'lavar as roupas', done: true},
]

const doneTodos= todos.filter(function(todo){
    return todo.done
})
console.log(doneTodos)
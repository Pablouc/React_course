class Todo extends React.Component{

    constructor(props){
        super(props);
     
        this.state = { done: props.done,
                       text: props.text
                     };

        //Se le tiene que hacer un binding a cada metodo.
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(event){
        this.setState(
            state=> ({
                done: !state.done}),
                function(event){
                    this.handleSubmit(event)
                });
    }

    handleChange(event){
        let text = event.target.value;
        this.setState( state=>({
            text : text
        }));
    }

    handleSubmit(event){
        console.log("Making the submit")
    }

    render(){
        return <div className="todo">
                    <span>
                        <input type="checkbox" checked={this.state.done} onClick={this.handleClick} />
                        <input type="text" value={this.state.text} 
                                           className={(this.state.done) ? "done" : "not-done"} 
                                           onChange={this.handleChange} 
                                           onBlur={this.handleSubmit}/>
                    </span>
               </div>;
    }
}

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = { todos: [{id:"a",
                                text:"Item1",
                                done: false
                                },
                                {id:"a",
                                text:"Item2",
                                done: false
                                },
                                {id:"a",
                                text:"Item3",
                                done: true
                                }]};

        this.newTodo = this.newTodo.bind(this);
    }

    newTodo(event){
        //preventDefault hace que NO se ejecute la acción por defecto. 
        //En este caso estamos evitando que entre a un href(en el New Todo link).
        event.preventDefault();
        todos=this.state.todos;
        todos.push({id:""});

        this.setState( state =>({
            todos: todos
        }));
    }

    render(){
        //Con map se recorre un array("todos" en este caso) y se devuelve un elemenento "Todo" por cada item.
        // “key” es un atributo especial string que debes incluir al crear listas de elementos.
        const todoList = this.state.todos.map((todo) => 
        <Todo key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
        );

        // React.Fragment sirve cuando un componente devuelva múltiples elementos.
        return <React.Fragment>
            <h1>React Todo App</h1>{todoList}
            <a href="#" onClick={this.newTodo}> New Todo</a>
        </React.Fragment>
    }
}


ReactDOM.render(
    <TodoList/>,
    document.getElementById('root'));
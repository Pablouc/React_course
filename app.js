var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Todo = function (_React$Component) {
    _inherits(Todo, _React$Component);

    function Todo(props) {
        _classCallCheck(this, Todo);

        var _this = _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).call(this, props));

        _this.state = { done: props.done,
            text: props.text
        };

        //Se le tiene que hacer un binding a cada metodo.
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(Todo, [{
        key: "handleClick",
        value: function handleClick(event) {
            this.setState(function (state) {
                return {
                    done: !state.done };
            }, function (event) {
                this.handleSubmit(event);
            });
        }
    }, {
        key: "handleChange",
        value: function handleChange(event) {
            var text = event.target.value;
            this.setState(function (state) {
                return {
                    text: text
                };
            });
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            console.log("Making the submit");
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "todo" },
                React.createElement(
                    "span",
                    null,
                    React.createElement("input", { type: "checkbox", checked: this.state.done, onClick: this.handleClick }),
                    React.createElement("input", { type: "text", value: this.state.text,
                        className: this.state.done ? "done" : "not-done",
                        onChange: this.handleChange,
                        onBlur: this.handleSubmit })
                )
            );
        }
    }]);

    return Todo;
}(React.Component);

var TodoList = function (_React$Component2) {
    _inherits(TodoList, _React$Component2);

    function TodoList(props) {
        _classCallCheck(this, TodoList);

        var _this2 = _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).call(this, props));

        _this2.state = { todos: [{ id: "a",
                text: "Item1",
                done: false
            }, { id: "a",
                text: "Item2",
                done: false
            }, { id: "a",
                text: "Item3",
                done: true
            }] };

        _this2.newTodo = _this2.newTodo.bind(_this2);
        return _this2;
    }

    _createClass(TodoList, [{
        key: "newTodo",
        value: function newTodo(event) {
            //preventDefault hace que NO se ejecute la acción por defecto. 
            //En este caso estamos evitando que entre a un href(en el New Todo link).
            event.preventDefault();
            todos = this.state.todos;
            todos.push({ id: "" });

            this.setState(function (state) {
                return {
                    todos: todos
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            //Con map se recorre un array("todos" en este caso) y se devuelve un elemenento "Todo" por cada item.
            // “key” es un atributo especial string que debes incluir al crear listas de elementos.
            var todoList = this.state.todos.map(function (todo) {
                return React.createElement(Todo, { key: todo.id, id: todo.id, text: todo.text, done: todo.done });
            });

            // React.Fragment sirve cuando un componente devuelva múltiples elementos.
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "h1",
                    null,
                    "React Todo App"
                ),
                todoList,
                React.createElement(
                    "a",
                    { href: "#", onClick: this.newTodo },
                    " New Todo"
                )
            );
        }
    }]);

    return TodoList;
}(React.Component);

ReactDOM.render(React.createElement(TodoList, null), document.getElementById('root'));
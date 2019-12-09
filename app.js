// A - 1 


// var GroceryList = () => (
//   <div>
//   	<ul>
//   	<li>One</li>
//   	<li>Two</li>
//   	</ul>
// 	</div>
// );

// A - 2

// var Cucumber = () => (
// 	<li>cucumber</li>
// 	)
	
// 	var Kale = () => (
// 		<li>kale</li>
// 		)
		
// 		var GroceryList = () => (
// 			<div>
//   	<ul>
// 		<Cucumber />
// 		<Kale />
//   	</ul>
// 	</div>
// );
// ReactDOM.render(<GroceryList />, document.getElementById('app'));


// A - 3

// var GroceryListItem = (props) => (
// <li>{props.name}</li>
// )

// var GroceryList = () => (
// 	<div>
// 		<ul>
// 			<GroceryListItem name={"heni"}/>
			
// 		</ul>
// </div>
// )

// ReactDOM.render(<GroceryList />, document.getElementById('app'));



// A - 4


// var TodoList = (props) => {

 

//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };

 
//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.todos[0]}</li>
//       <li>{props.todos[1]}</li>
//       <li>{props.todos[2]}</li>
//     </ul>
//   );
// }

// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById('app'));

// A - 5


// class TodoListItem extends React.Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <li>{this.props.todo}</li>
//     );
//   }

// }

// var todos = ["milk", "Bread","olive"]
// var TodoList = (props) => (
//   <ul>
//     {props.todos.map(todo =>
//       <TodoListItem todo={todo} />
//     )}
//   </ul>
// );
// ReactDOM.render(<TodoList todos = {todos}/>, document.getElementById('app'));

// class GroceryListItem extends React.Component {

//   constructor(props) {
//     super(props);
// 	}
	
//   render() {
//     return (
//       <li>{this.props.item}</li>
//     );
//   }

// }

// var items = ["milk", "Bread","olive"]
// var GroceryList = (props) => (
// 	<ul>
// 		{ props.items.map(item =>
// 			< GroceryListItem item = {item}/>
// 		)}
// 	</ul>
// );
// ReactDOM.render(<GroceryList items = {items}/>, document.getElementById('app'));



// A - 6


// class TodoListItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       done: false
//     };
//   }

//   onListItemClick() {
//     this.setState({
//       done: !this.state.done
//     });
//   }

//   render() {
//     var style = {
//       textDecoration: this.state.done ? 'line-through' : 'none'
//     };

//     return (
//       <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
//     );
//   }
// }

// A - 7

class GroceryListItem extends React.Component {

  constructor(props) {
		super(props);
		this.state = {
			done: false
		}
	}

  render() {

		this.onMouseOver=()=> {
			this.setState({
				done: true
			})
		}
		
		this.onMouseOut=()=> {
			this.setState({
				done: false+
			})
		}
		
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseOut={this.onMouseOut} onMouseOver={this.onMouseOver} >{this.props.item}</li>
    );
  }
}

var items = ["milk", "Bread","olive"]
var GroceryList = (props) => (
	<ul>
		{ props.items.map(item =>
			< GroceryListItem item = {item}/>
		)}
	</ul>
);
ReactDOM.render(<GroceryList items = {items}/>, document.getElementById('app'));
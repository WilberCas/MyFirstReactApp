// Date: 2/09/2018
const React = require('react');
class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <h1 id="title">Hello Testing</h1>
                <p>Lorem Ipsum dolem hola</p>
                <p>{this.props.testing}</p>
                <button onClick={ () => { document.getElementById('title').style.color = "red";}}>Touch me</button>
                <button onClick={ () => { document.getElementById('title').style.color = "dodgerBlue";}}>Revert!</button>
            </div>
        );
    }
}
module.exports = App
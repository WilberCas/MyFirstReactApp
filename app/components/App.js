// Date: 2/09/2018
const React = require('react');
class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        // Does API call to the node server
        function getPlaylistId() {
            let name = document.getElementById("playlistName").value;
            fetch('http://localhost:3001/id/'+name,{
                mehtod:'GET'
            })
            .then((resp) => resp.json()) // Transform into json
            .then((data) =>{
                renderTable(data);
            });
        }
        // Render the table with the properties required
        function renderTable(data) {
            for(let el of data){
                document.getElementById('result').innerHTML += `<tr><td>${el.PlaylistId}</td><td>${el.Name}</td></tr>`;
            }
        }
        return(
            <div>
                <h1 id="title">Results</h1>
                <p>Doing an API call to the server (locally)</p>
                <input type="text" id="playlistName" name="playlistName"></input>
                <button onClick={getPlaylistId}>Get</button>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                        </thead>
                        <tbody id="result"></tbody>
                    </table>
                </div>
            </div>
        );
    }
}
module.exports = App
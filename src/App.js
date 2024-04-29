import React, { Component } from 'react'
import './Todolist.css'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      todolist: '',

    };
  }
  handleInput = (event) => {

    this.setState({ [event.target.name]: [event.target.value] })
  }
  handletodolistoutput = () => {


    let todolistoutput = this.state.todolist



    
    this.setState((prevState) => {
      return { 
        result: [...prevState.result, todolistoutput] 
      };
    });
    


  }


  render() {


    return (
      <div className='Maintray'>

        <h1> Add More To TODO LIST</h1>

        <div className='SubtrayOne'><input name='todolist' type="text" onChange={this.handleInput}></input></div>

        <div className='SubtrayTwo'><button type="submit" onClick={this.handletodolistoutput} class="button">SUBMIT</button></div>

        <div className="SubtrayOne">
          <div>
            {
              this.state.result.map((item,key) => (
                <div>{item}</div>
                
                
              ))
            }
          </div>
         

        </div>
      </div>



    )
  }
}

export default Home
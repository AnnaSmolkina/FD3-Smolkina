import React, { Component } from 'react';


class App extends Component {
  state = {
    name: '',
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
}

onChangeInput(changeInput, ev) {
  const val = ev.target.value;
  this.setState((state) => {
      return { ...state, [changeInput]: val }
  })
}

  render() {
    return (
      <div className="container">
          <div>
 <label>Имя: <input type='text'onChange={(ev) => this.onChangeInput('name', ev)} 
value={this.state.name } /></label>
     </div>
     <div style={{ width: '10%' }}>
         <label>Сила: <input type='number' onChange={(ev) => this.onChangeInput('name', ev)} 
value={this.state.name }/></label>
         <label>Ловкость: <input type='number' onChange={(ev) => this.onChangeInput('name', ev)} 
value={this.state.name }/></label>
         <label>Телосложение: <input type='number' onChange={(ev) => this.onChangeInput('name', ev)} 
value={this.state.name }/></label>
         <label>Интеллект: <input type='number' onChange={(ev) => this.onChangeInput('name', ev)} 
value={this.state.name }/></label>
         <label>Мудрость: <input type='number'onChange={(ev) => this.onChangeInput('name', ev)} 
value={this.state.name } /></label>
         <label>Харизма: <input type='number'onChange={(ev) => this.onChangeInput('name', ev)} 
value={this.state.name } /></label>
     </div>
      </div>
    );
  }
}

export default App;
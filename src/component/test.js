import  React , {Component} from 'react';


class Testa extends Component {
  constructor (props) {
    super(props);
  }

  render(){
    let checked =  this.props.checked;
    let text = this.props.text;
    return (
      <div>
        子组件<br/>
        {text} <input type="text" checked={checked}/>
      </div>
    )
  }
}
export default Testa;

import React,{useState} from 'react'
import './InsertBox.css'

function InsertBox(props) {
  const [value, setValue] = useState('')

  function handleChange(e) {
    setValue(e.target.value)
  }

  function handleClick() {
    if(value) {
      props.onAddItem(value)
      setValue('')
    }
  }

  return (
    <div className='header'>
      <input type='text' placeholder='您可以在这里添加任务' value={value}  onChange={handleChange} />
      <button className='insertBtn' onClick={handleClick}>添加</button>
    </div>
  )

}

// class InsertBox extends React.Component{
//   state = {
//     value: ''
//   }

//   handleChange(e) {
//     this.setState({
//     value: e.target.value
//   })
//   }

//   handleClick() {
//     if(this.state.value) {
//       this.props.onAddItem(this.state.value)
//       this.setState({
//         value: ''
//       })
//     }
//   }

//   render() {
//     return (
//       <div className='header'>
//         <input type='text' placeholder='您可以在这里添加任务' value={this.state.value}  onChange={this.handleChange.bind(this)} />
//         <button onClick={this.handleClick.bind(this)}>ADD</button>
//       </div>
//     )
//   }
// }

export default InsertBox
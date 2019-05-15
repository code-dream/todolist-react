import React from 'react'
// import DetailList from '../DetailList/DetailList.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './ShowBox.css'

function ShowBox(props) {
  function handleChange(index, e) {
    props.handleCheckBox(e.target.checked, index)
  }

  return (
    <div className="showBox">
      <TransitionGroup>
        {
          props.result.map(({text, checked}, index) => (
            <CSSTransition key={text} timeout={600} classNames='fade' >
              <div className='item'>
                <input type="checkbox" checked={checked} onChange={(e) => handleChange(index, e)} />
                <span className={'text '+(checked ? 'finished' : '')}>
                  {text}
                </span>
                <button className='showBtn' onClick={() => {props.handleRemove(index)}}>完成</button>
              </div>
            </CSSTransition>
          ))
        }
      </TransitionGroup>
    </div>
  )
}

// class ShowBox extends React.Component{
//   handleChange(isChecked, index) {
//     this.props.handleCheckBox(isChecked, index)
//   }

//   render() {
//     const result = this.props.result
//     const finalList = result.map((item, index) => {
//       return <DetailList item={item} key={index} onChangeCheck={(isChecked) => {this.handleChange(isChecked, index)}} />
//     })
//     return (
//         <div className='showBox'>
//           {finalList}
//         </div>
//     )
//   }
// }

export default ShowBox
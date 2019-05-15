import React from 'react'
import './FooterBox.css'

function FooterBox(props) {
  function handleChange(e) {
    props.handleAllCheck(e.target.checked)
  }

  function handleClick() {
    props.handleRemoveItems()
  }

  const result = props.result
  let length = result.length
  let isCheckedNum = result.reduce((pre, item) => (pre + (item.checked ? 1 : 0)), 0)
  return (
    <div className="footer">
      <div className='fl'>
        <input type='checkbox' checked={length&&isCheckedNum === length} onChange={handleChange} />
        <span>全选/全不选</span>
        <span>选中<b>{isCheckedNum}</b>个任务</span>
        <span>共计<b>{length}</b>个任务</span>
      </div>
      <button className='footerBtn' onClick={handleClick}>删除</button>
    </div>
  )
}


// class FooterBox extends React.Component {
//   handleChange(e) {
//     this.props.handleAllCheck(e.target.checked)
//   }

//   render() {
//     const result = this.props.result
//     let length = result.length
//     let isCheckedNum = result.reduce((pre, item) => {
//       return pre + (item.checked ? 1 : 0)
//     }, 0)
//     return (
//       <div className='footer'>
//         <div className='fl'>
//           <input type='checkbox' checked={isCheckedNum === length} onChange={this.handleChange.bind(this)} />
//           <span>全选/全不选</span>
//           <span>选中<b>{isCheckedNum}</b>个任务</span>
//           <span>共计<b>{length}</b>个任务</span>
//         </div>
//         <button>删除</button>
//       </div>
//     )
//   }
// }


export default FooterBox
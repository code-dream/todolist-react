import React, { useState } from 'react'
import InsertBox from '../InsertBox/InsertBox.js'
import ShowBox from '../ShowBox/ShowBox.js'
import FooterBox from '../FooterBox/FooterBox.js'

function App() {
  const [list, setList] = useState([
    {
      text: 'hello world',
      checked: false
    },
    {
      text: 'hello liming',
      checked: false
    },
    {
      text: 'hello xiaohong',
      checked: false
    },
    {
      text: 'hello lixiao',
      checked: false
    },
    {
      text: 'hello raoyangxiaowei',
      checked: false
    },
    {
      text: '还差删除功能',
      checked: false
    },
    {
      text: 'hello shufei',
      checked: false
    },
  ])

  function handleAddItem(text) {
    setList(prevList => [{text: text, checked: false}, ...prevList])
  }

  function handleCheckBox(isChecked, index) {
    const myList = [...list]
    myList[index].checked = isChecked
    setList(myList)
  }

  function handleAllCheck(isChecked) {
    const myList = [...list]
    myList.forEach((item) => {
      item.checked = isChecked
    })
    setList(myList)
  }

  function handleRemove(index) {
    const myList = [...list]
    myList.splice(index, 1)
    setList(myList)
  }

  function handleRemoveItems() {
    setList(prevList => prevList.filter(item => !item.checked))
  }

  return (
    <div className='contain'>
      <InsertBox onAddItem={handleAddItem} />
      <ShowBox result={list} handleCheckBox={handleCheckBox} handleRemove={handleRemove} />
      <FooterBox result={list} handleAllCheck={handleAllCheck} handleRemoveItems={handleRemoveItems} />
    </div>
  )
}

export default App
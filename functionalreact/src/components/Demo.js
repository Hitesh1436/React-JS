import React,{useState} from 'react'

function Demo() {
    const[inputItem,setInputitem] = useState('')
    const[itemArray,setItemArray] = useState([])

    let addItem = (item)=>{
        setItemArray([...itemArray,item])
        setInputitem('')
    }
  return (
    <div>
        <input text='text' value={inputItem} onChange={(e)=>setInputitem(e.target.value)}/>
        <button onClick={()=>addItem(inputItem)}>Add Item</button>
        <ul>
            {
                itemArray.map((item)=>{
                    return <li>{item}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Demo
import React, { useState } from 'react'

export default function File({exp}) {
  console.log(exp.isFolder);
  
  const [expand, setExpand] = useState(false);
  if (exp.isFolder) 
  {
    return (
      <div>
        <div className='folder' onClick={()=> setExpand(!expand)}>
          <span>🗂️ {exp.name}</span>
        </div>
  
        <div className='file' style={{paddingLeft:25, display: expand ? "flex" : "none"}}>
          {(exp.items.map((explorer) => {
             return (
                <File exp={explorer}/>
             )
          }))}
        </div>
      </div>
    )
  }
  else
  {
    return <span>📂 {exp.name}</span>
  }
  
}

import React, { useState } from 'react'
import File from './Components/File'
import explorer from './Data/Data'
import './App.css'

export default function App() {
  const [explorerData, setExplorer] = useState(explorer);
  return (
    <div>
      <File exp = {explorerData}/>
    </div>
  )
}
 
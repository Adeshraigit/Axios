import { useState,useEffect } from 'react'
import axios from 'axios'
import Card from './components/Card'

function App() {
  const [myData, setMyData] = useState([])
  const [profile, setProfile] = useState("")
  const [isError, setIsError] = useState("")
  const getUser = () => {
    axios.get(`https://api.github.com/users/${profile}`)
    .then((res) => setMyData(res.data))
    .catch((error) => setIsError(error.message))
  }
  const change = (e)=> 
    setProfile(e.target.value)
  return (
   <>
   {isError != "" && <h2 className='text-slate-200'>{isError}</h2>}
    <div className='grid  place-content-center mt-[10vh]'>
      <div className='place-content-evenly'>
      <input 
      type="text"
      placeholder='Enter UserName'
      value={profile}
      onChange={change}
      className={`w-1/2 h-10 border-2 rounded-3xl  border-black m-10 mr-0 p-4 bg-slate-600 text-slate-200`}
      />
      <button 
      className={`rounded-3xl border-2 h-10 m-3 ml-1 p-1 w-1/5 border-black text-slate-200 text-xl bg-slate-600`}
      onClick={getUser}>
        Search
      </button>
      </div>
      <div>
      <Card name={myData.name} folower={myData.followers} image={myData.avatar_url} />
      </div>
    {myData.html_url}
    </div>
    </>
  )
}

export default App

import { useState,useEffect } from 'react'
import axios from 'axios'
import Card from './components/Card'

function App() {
  const [myData, setMyData] = useState([])
  const [profile, setProfile] = useState("")
  const [isError, setIsError] = useState("")
  const  [display, setDisplay] = useState(false)
  const getUser = () => {
    axios.get(`https://api.github.com/users/${profile}`)
    .then((res) => setMyData(res.data))
    .catch((error) => setIsError(error.message))
    console.log(isError);
    setDisplay(true)
  }
  const change = (e)=> 
    setProfile(e.target.value)
  return (
   <>
   {isError != "" && <h2 className='text-slate-200'>{isError}</h2>}
    <div className='grid  w-full border-2 h-[100vh] '>
      <div className='border-2 grid grid-cols-6 w-[50vw]'>
        <div className='col-span-5'>
        <input 
      type="text"
      placeholder='Enter UserName'
      value={profile}
      onChange={change}
      className={`w-full h-14 border-2 rounded-3xl  border-black  bg-slate-600 text-slate-200`}
      />
        </div>
        <div className='col-span-1'>
        <button 
      className={`w-full h-14 hover:bg-slate-500 hover:border-slate-800 rounded-3xl border-2   border-black text-slate-200 text-xl bg-slate-600`}
      onClick={getUser}>
        Search
      </button>
        </div>
      </div>
      <div className=''>
      { display == true && 
      <Card name={myData.name} folower={myData.followers} image={myData.avatar_url} profile={profile} url={myData.html_url}/>
      }
    </div>
    </div>
    </>
  )
}

export default App

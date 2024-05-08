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
    <div className='  ml-[25%]  w-[50vw]'>
      <div className=''>
      <input 
      type="text"
      placeholder='Enter UserName'
      value={profile}
      onChange={change}
      className={`w-[30vw] h-10 border-2 rounded-3xl  border-black m-10 mr-0 p-4 bg-slate-600 text-slate-200`}
      />
      <button 
      className={`hover:bg-slate-500 hover:border-slate-800 w-[10vw] rounded-3xl border-2 h-10 m-3 ml-1 p-1  border-black text-slate-200 text-xl bg-slate-600`}
      onClick={getUser}>
        Search
      </button>
      </div>
      { display == true &&  <div>
      <Card name={myData.name} folower={myData.followers} image={myData.avatar_url} profile={profile} url={myData.html_url}/>
      </div>}
    </div>
    </>
  )
}

export default App

import './App.css'
import Enemies from './enemies'
import Friends from './friends'
import Singers from './singer'
import Team from './team'
import Users from './users'

function App() {

  const singers =[
    { id:1,name:"Androw kishore",age:60},
    { id:2,name:"Runa lila",age:29},
    { id:3,name:"Arefin Rumey",age:24},
    { id:4,name:"Arijit Sing",age:24},
  ]

  const friends = [
    {id:1,name:'Dipu',age:22},
    {id:2,name:'Lut',age:23},
    {id:3,name:'Fahmidul',age:24},
    {id:4,name:'Rizvi',age:25},
  ]
  return (
    <>

      <h1>Explore Basic React</h1>
      <Enemies></Enemies>
      <Users></Users>
      <Friends friend={friends}></Friends>
      {
        singers.map(singer=><Singers singer ={singer}></Singers>)
      }
      <Team></Team>
    </>
  )
}

export default App

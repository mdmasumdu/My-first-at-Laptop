import FriendsShow from "./friendShow";


export default function Friends ({friend}){
  
    return (
        
        <div>
            
         <h3>Friends:{friend.length}</h3>
      {
        friend.map(frie=><FriendsShow fru={frie}></FriendsShow>)
      }

        </div>
    )
}
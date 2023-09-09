export default function Enemy({enemy}){
const {name,email} = enemy;
    
    return (
        <div className="box">
            <h4>Name:{name}</h4>
            <h4>email:{email}</h4>

        </div>
    )
}
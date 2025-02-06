import Membership from "./Membership";


function Memberships ({ memberships,removeMembership }) {
   // console.log(memberships);
    return( 
    <div className="membershipMainDiv">
        <div>
         <h2>Üyelikler</h2>
        </div>
        <div className="cardDiv">
            {  
              memberships.map((membership)=>{
                    return <Membership key={membership.id} {...membership} removeOneMembership ={removeMembership} />;
                  //  membership={membership  }
                    
                })}
        </div>
    </div>
    );
    
}   
export default Memberships ;


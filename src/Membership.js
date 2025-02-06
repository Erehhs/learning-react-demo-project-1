function Membership ({id,content,title,price,removeOneMembership    }) {
   

    return <div className="card">
        <div className="cardTitlePrice">
        <h2 className="cardTitle"> {title} </h2>
        <h4 className="cardPrice"> {price}TL</h4>
        </div>
        <p>{content}</p>
        <button className="cardDeleteButton" onClick={()=>removeOneMembership(id)}>Al</button>
    </div>;   
}
export default Membership ;

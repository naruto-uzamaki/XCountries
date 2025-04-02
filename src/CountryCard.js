function CountryCard({name,flag,abbr}) {
    return (<div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        widht: "200px",
        margin: "10px",
        padding: "10px",
        border: "1px solid gray",
        borderRadius: "5px", 
        textAlign:"center"
    }}>
        <img src={flag} alt={name} style={{height:"100px",width:"100px"}}/>
        <h2>{name}</h2>
    </div>);
}
export default CountryCard;
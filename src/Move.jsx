
const move = ({card}) => {
    return (
        <div className='one_song'>
    
        <a href={card.Link}  target="blank"><img src={card.Art} alt={card.Name} title={card.Title}></img></a>
        <h4>{card.Name}</h4>
        <div className='media'>
         <video controls=""><source src="https://scd.dlod.link/?expire=1663500374961&p=xdsKG7E22rKZqG9MMrwKgwcQn1NWJ66qkFtNdiseEHxwVEwxnzW_owmtI7WQUm4neu_qWcNETEBeVg0wU9e4jc65keaLo_Bb-KFnXlcCStgWlEDaRVT4IguBFl8yiwHbL-SxysBk5ruTdNH5nwRoe-WMpPTIm0oTSrNLURSKnQWOrxvqVYhQEprU0066JXp-UlLKbB_23Hf3IvzPvow0aQ&s=byLtfyNQSjwGNJqnpJaMCR9BIOJzxdMedq6NnxDktD4" type="audio/mp4"></source></video>
         </div>
        </div>
     );
}
 
export default move;
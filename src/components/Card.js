import './../App.css'

export default function Card(props){
console.log(props)
    return(
        
        props.params.map(
          (elem) => {
            return (<div className='main-card-body'>
               <img className="photo-img" src={elem.imageUrl} /> 
               <div className="text-desc"> {elem.description} </div>
            </div>)
        } 
          
        )   
    )
}
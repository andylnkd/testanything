import './../App.css'
export default function NavBar(props){
var icon = props.icon;
var title = props.title;
// console.log(props)
    return(

        <nav className = "navclass">
            <img src={icon} />
            <h1>{title}</h1>
        </nav>
    )
    
}

import PropTypes from 'prop-types'

const Button = ({text,color})=>{

    //Creating a function to handle the onlick listerner
    const clicked = ()=>{
        console.log("You clicked me.")
    }

    return <button onClick={clicked} className="btn" style={{backgroundColor :color}}>{text}</button>
}

Button.defaultProps = {
    color: 'steelblue'
}


Button.propTypes = {
    text: PropTypes.string,
    color:PropTypes.string
}

export default Button
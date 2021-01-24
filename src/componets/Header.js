import PropTypes from 'prop-types';
import Button from './Button'
const Header = ({title})=>{

    return(
        <header className="header">
            <h1 >{title}</h1>
    <Button color="green" text="Add"/>
    <Button color="red" text="Delete"/>
    
        </header>
    )

}
//Setting default text or tile

Header.defaultProps = {
    title: "Task tracker."
}

//Proptypes help us to build to specify the data types of our properties or attributes

Header.propTypes = {
    title: PropTypes.string.isRequired,
    // title: PropTypes.string.isRequired
}

//Adding styles to the heading
// You can use a constant variable and interpolate with style attribute
//CSS IN JS
// const headingStyle = {
//     backgroundColor: 'black',
//     color:'red',
    
// }

export default Header
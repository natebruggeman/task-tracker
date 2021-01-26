import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {

    return (
        <button 
            onClick = {onClick}
            style= {{backgroundColor: color}} 
            className = 'btn'>    
            Add 
        </button>
    )
}

//default properties of a new button, can be changed later
Button.defaultProps = {
    color: 'steelblue'
}

//first proptype is camelcase, second is capitalized
//need to add your prop down here, or you can't pass props
Button.propTypes ={
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button

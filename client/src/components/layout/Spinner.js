import spinner from './spinner.gif'

const Spinner = () => {
    return(
        <img src={spinner} alt="" style={spinnerStyle}/>
    )
}

const spinnerStyle = {
    width: '100px', 
    display: 'block', 
    margin: 'auto'
}

export default Spinner

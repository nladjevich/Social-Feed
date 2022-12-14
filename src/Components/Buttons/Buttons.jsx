import './Buttons'

const Buttons = (props) => {
    return ( 
        <div className='set-width'>
            <button className="btn btn-secondary btn-sm btn-spacing" style={{'margin-right': '5px'}} type='button'>Like</button>
            <button className="btn btn-secondary btn-sm btn-spacing" style={{'margin-left': '5px'}} type='button'>Dislike</button>
        </div>
        
     );
}
 
export default Buttons;
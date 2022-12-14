import Buttons from "../Buttons/Buttons";
import '../DisplayPostForm/DisplayPostForm'

const DislayPostForm = (props) => {
    return(
       <table className="table">
        <tbody>
            {props.parentEntries.map((posts, index) => {
                return(
                    <tr key={index}>
                    <th>{posts.fullName} </th>
                    <td>{posts.post}</td>
                    <td className="btn-size"><Buttons/></td>
                </tr>
                )
                
            })}
        </tbody>
       </table>
    )
        
}

export default DislayPostForm;

    

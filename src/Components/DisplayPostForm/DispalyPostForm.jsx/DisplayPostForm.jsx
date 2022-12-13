const DislayPostForm = (props) => {
    return(
       <table>
        <tbody>
            {props.parentEntries.map((posts, index) => {
                return(
                    <tr key={index}>
                    <th>{posts.fullName}</th>
                    <td>{posts.post}</td>
                    <td>{posts.button}</td>
                </tr>
                )
                
            })}
        </tbody>
       </table>
    )
        
}

export default DislayPostForm;

    

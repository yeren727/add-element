import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";




function List(props){
    const { items, removeItem } = props;
    return <div className="grocery-list">
        {items.map((item) => {
          const { id,title } = item;
          return <article key={id} className="grocery-item">
            <p className="title">{title}</p>
         <div className="btn-container">
          <button type="button" className="edit-btn"><FaEdit /></button>
          <button type="button" className="delete-btn" onClick={() => removeItem(id)}><FaTrash /></button>
         </div>




          </article>
}
         

        )}
    </div>
}
export default List;
function List(props){
    const { items } = props;
    return <div className="grocery-list">
        {items.map((item) => {
          const { id,title } = item;
          return <article key={id} className="grocery-item">
            <p className="title">{title}</p>
          </article>
})}
    </div>
}
export default List;


const List = (props) => {
    return props.balls.map((ball, index) => {

        return (
            
            <span
            className={ball.isDropped ? 'dropped' :'' }
            onClick={() => props.onDropped(index)}>
                <img className='ball-object' src={ball.image}/>
                </span>
            
            
            

        )

    })
}

export default List;


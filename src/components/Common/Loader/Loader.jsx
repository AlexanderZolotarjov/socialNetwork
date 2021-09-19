
let Loader = (props) => {
    return (
        <div style={ {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            width: '100px',
            height: '100px'
        } }>
            { props.isFetching ? <img style={ { width: '100%', height: '100%' } }  src={props.loader} /> : null }
        </div>
    )
}

export default Loader
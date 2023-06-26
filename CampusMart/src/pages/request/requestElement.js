function RequestElement({data}) {
    return (
        <div style={{padding: '10px 20px',backgroundColor: '#c2c2c2',borderRadius: 8,margin: 20}}>
            <h4>{data.message}</h4>
            <div style={{display: 'flex',justifyContent: 'space-between'}}>
                <p>{ data.name}</p>
                <p>{ data.email}</p>
                <p>{ data.contact}</p>
            </div>
        </div>
    )
}

export default RequestElement
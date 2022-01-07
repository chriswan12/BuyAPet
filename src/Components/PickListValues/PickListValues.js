import "./PickListValues.css"; 

const PickListValues = ( {items, setValueSelected} ) => {

    return ( 
        <div className="each-filter"> 
            <label htmlFor={items.va}>{items.name.toUpperCase() + ": "} </label>
            <select className="select-filter" name={items.name} id={items.name} onChange={(e) => { 
                const selected = e.target.value; 
                setValueSelected(selected); 
            }}>
                {
                    items.values.map(
                        value => (
                            <option className="options" key={value} value={value}>{value}</option>
                        ))
                }
            </select>
        </div>
    )
}


export default PickListValues; 
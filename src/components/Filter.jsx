






const Filter = ({handleFilterName, filterName }) => {
    // console.log(filterName);
    
    return (
        <div>
               filter shown with
               <input onChange={handleFilterName} value={filterName} />
        </div>
    );
};

export default Filter;
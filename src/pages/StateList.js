import {useState} from 'react'
import { useGetStatesQuery } from '../services/statelist';

function StateList(props) {
  const [selectedState,setSelectedState] =useState()
  const { data, error, isLoading } = useGetStatesQuery();
     
  const showDetails =(state)=>{
    setSelectedState(state);
  }

    return (
      <div className="App" style={styles.mainDiv} >
      {error ? (
        <div className="error">Oh no, there was an error</div>
      ) : isLoading ?( 
        <div className="loader">Loading state list....</ div> )
       : data ? (
        <div className="mainContainer">
         <div className="stateContainer">
           <div className="selectedState"> States </div>
         { data && 
           Object.keys(data).map((key,i) =>
                {
                  return <div key={i} onClick={()=>showDetails(data[key])} className="listItem">{data[key].name}</div>
                })
          }
          </div>
          <div className="cityContainer">
            <div className="selectedState">Selected State: <span className="selectedStateName">{selectedState && selectedState.name}</span></div>
               {
                 selectedState?(
                  <div> 
                  <table className="cities">
                  <thead>
                    <tr>
                    <th>Cities</th>
                    </tr>
                    </thead>
                    <tbody>
                  {Object.keys(selectedState.cities).map((key,i)=>{
                    return <tr key={i}>
                            <td>{key}</td>
                            </tr>
                  })}
                  </tbody>
                  </table>
                 </div>
                 
                 ):<p>For City list click on state.</p>
               }
          </div>
        </div>
      ) : null}
    </div>

      );
  }

  const styles = {
    
    mainDiv: {
      width:'760px',
      margin:'5px'
    },
    
    cityRow:{
      borderBottom: '1px solid #ccc'
    }
  }

  export default StateList;
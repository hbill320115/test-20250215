import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [peopleDataArr,setPeopleDataArr] = useState(null);
  useEffect(()=>{
        const getData = async()=>{
          try{
            const respone = await axios.get("https://randomuser.me/api/?results=10");
            const peopleData = respone.data.results;
            setPeopleDataArr(peopleData);
          }catch(error){
            alert("接收失敗");
          }
        }
      getData();
  },[])

  return (
    <>

      <div className="container mx-auto p-4">
      <div className="row">
      {peopleDataArr && peopleDataArr.map((people)=>{
        return(
          <div className="col-md-4" key={people.email}>
            <div className="bg-light p-3">
              <img
                src={people.picture.large}
                alt="頭像"
                className="img-fluid rounded-circle"
              />
              <h2 className="mb-0">{`${people.name.first}  ${people.name.last}`}</h2>
              <p className="mb-0">{people.email}</p>
            </div>
          </div>
        )
      })}
      </div>
    </div>
    </>
  )
}

export default App

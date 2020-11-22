import React, {useState} from 'react'
import data from "../randomUser.json"

export default function Tables() {

    const [employeeData, setEmployeeData] = useState(data);

    const sortingFunction = () => {
        employeeData.sort(function(a, b) {
            var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // names must be equal
            return 0;
          });
          setEmployeeData(employeeData);
    }

    const searchingFunction = (event) => {
        let search = event.target.value;
        let employeeDatafirst = employeeData.filter(el => el.name.first.toLowerCase().indexOf(search.toLowerCase()) !== -1)
        setEmployeeData(employeeDatafirst);
    }

    return (
        <div>
            <button className="btn btn-danger m-2" onClick={sortingFunction}>Sort by First Name</button>
            <input type="search" name="search" placeholder="Filter by First Name" onChange={event => searchingFunction(event)} />
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Avatar</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeData.map(employee => {
                        return(
                        <tr>
                            <th><img src={employee.picture.thumbnail} alt={employee.name.first} /></th>
                            <th>{employee.name.first}</th>
                            <th>{employee.name.last}</th>
                            <th>{employee.gender}</th>
                            <th>{employee.email}</th>
                            <th>{employee.phone}</th>
                        </tr>

                        )
                    })}
                </tbody>

            </table>
        </div>
    )
}

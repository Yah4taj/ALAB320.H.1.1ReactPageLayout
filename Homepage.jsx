
import EmployeeList from "./EmployeeList"
import Header from "./Header"
import SearchBar from "./SearchBar"





function HomePage() {
    const employees = [
        { name: "James King", position: 'President and CEO', image: "https://c8.alamy.com/comp/2XJC9TE/employee-id-card-icon-flat-set-in-black-and-white-color-outline-vector-2XJC9TE.jpg"},
        {name: "Julie Taylor", position: 'VP of Marketing', image: "https://c8.alamy.com/comp/2XJC9TE/employee-id-card-icon-flat-set-in-black-and-white-color-outline-vector-2XJC9TE.jpg"},
        { name: "Eugene Lee", position: 'CFO', image: "https://c8.alamy.com/comp/2XJC9TE/employee-id-card-icon-flat-set-in-black-and-white-color-outline-vector-2XJC9TE.jpg"},
        { name: "John Williams", position: 'VP of Engineering', image: "https://c8.alamy.com/comp/2XJC9TE/employee-id-card-icon-flat-set-in-black-and-white-color-outline-vector-2XJC9TE.jpg"},
    ]
    return (
      <>
      <Header />
      <SearchBar />
      <EmployeeList employees={employees} />
      </>
    )
  }
  export default HomePage
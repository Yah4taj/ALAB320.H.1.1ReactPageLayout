
import EmployeeList from "./EmployeeList"
import Header from "./Header"
import SearchBar from "./SearchBar"





function HomePage() {
    const employees = [
        { name: "James King", position: 'President and CEO', image: "https://images.app.goo.gl/F2hruksFez3UqBbc8"},
        {name: "Julie Taylor", position: 'VP of Marketing', image: "https://images.app.goo.gl/F2hruksFez3UqBbc8"},
        { name: "Eugene Lee", position: 'CFO', image: "https://images.app.goo.gl/F2hruksFez3UqBbc8"},
        { name: "John Williams", position: 'VP of Engineering', image: "https://images.app.goo.gl/F2hruksFez3UqBbc8"},
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
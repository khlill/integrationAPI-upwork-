
import MaterialTable from "@material-table/core";
import './table.css'


const data = [
  { name: "Jimmy", lastname: "Page", birthYear: 1995 },
  { name: "Dave ", lastname: "Gilmour", birthYear: 1994 },
  { name: "Muhammad Hamza", lastname: "Javed", birthYear: 1995 },
  { name: "Mark", lastname: "Knopfler", birthYear: 1995 },{ name: "Carl", lastname: "Jung", birthYear: 1994 },{ name: "Elia", lastname: "Kazan", birthYear: 1995 }, { name: "Frida", lastname: "Kahlo", birthYear: 1995 },
  { name: "John ", lastname: "Deacon", birthYear: 1994 },{ name: "Marlon", lastname: "Brando", birthYear: 1995 }, { name: "Martin", lastname: "Scorsese", birthYear: 1995 },
  { name: "Roger ", lastname: "Waters", birthYear: 1994 },{ name: "Mao", lastname: "Zedong", birthYear: 1995 },
];

const columns = [
  { title: "Name", field: "name" },
  { title: "Last name", field: "lastname" },
  { title: "Birth Year", field: "birthYear", type: "numeric" },
];

const Table = () => {
  return (
    <>
  {<MaterialTable style={{backgroundColor:"#DFF6FF", marginTop:"15px",marginLeft:"1%",width:"98%"}}
          title=""
          actions={[
            {
              icon: 'add',
              tooltip: 'Label Record',
              isFreeAction: true,
              onClick: (event) => alert("You want to add a new row")
            },
            {
              icon: 'edit',
              tooltip: 'Edit Record',
              isFreeAction: true,
              onClick: (event) => alert("You want to add a new row")
            }
          ]}
          columns={columns} 
          data={data} 
          options={{
            filtering:true,
            searchFieldAlignment:"left",
            paginationType:"stepped",
            showFirstLastPageButtons:false,
            headerStyle: {
              backgroundColor: "#BDF2D5",
              fontWeight: 'bold',

            },
          }}/>}
          
          </>

)};

export default Table




import Navbar from "../../components/Navbar/Navbar"


//TODO make some fancy layout
const Layout = (props) => {
  
  return (
    <div>
      <Navbar />
      {/* {searchBegan || (searchBegan && city === "") ? null : (
        <MainSearch
          beginSearch={beginSearchHandler}
          initialReqHandler1={initialReqHandler1}
        />
      )} */}
      {props.children}
    </div>
  );
};

export default Layout;

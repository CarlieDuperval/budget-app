// import { Stack } from "react-bootstrap"

// const Copyright = (props) => {
//     return (
//         <Footer
//         className="d-flex"
//         >

//         </Footer>
//     )
// }

// export default Copyright
import React from "react";
import { Stack } from "react-bootstrap";


const  Copyright = (props)=> {
  return (
    <Stack mt={40}  
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"BudgetApp © By Carlie Duperval "}
      {new Date().getFullYear()}
      {"."}
    </Stack>
  );
}

export default Copyright;
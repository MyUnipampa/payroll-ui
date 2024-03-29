import React, { Component, useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";
import dashboardRoutes from "routes";
import api from "Api";
import { keys } from "@material-ui/core/styles/createBreakpoints";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function Login(){

    const classes = useStyles();
    return(
      
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Entrar</h4>
                <p className={classes.cardCategoryWhite}></p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem  xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="usuario"
                      id="company-disabled"
                      formControlProps={{
                        fullWidth: false,
                        
                      }}
                    />
                  </GridItem>
                </GridContainer >
                <GridContainer >
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="senha"
                      id="first-name"
                      formControlProps={{
                        fullWidth: false,
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardBody >
                <Button color="primary" href= "/admin/dashboard">Entrar</Button>
                <Button color="primary" href="/cadastro">Cadastrar</Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      
    );
}



// //#################################################
// // consumo de api baseado em classe
// class Login extends Component{

//   state= {
//     workers: [],
//   }

//   async componentDidMount(){
//     const response = await api.get('');
//     this.setState({workers: response.data});
//   }

//   render(){

//     const {workers} = this.state;

//     return(
//       <div>
//         <h1>Listar</h1>
//         {console.log(workers)}
//         {workers.map(worker =>(
//           <li key={worker.id}>
//               {worker.name}
//           </li>
//         ))}
        
//       </div>
//     )
//   }
// }
// //###############################################


// export default Login

// <><><><><><><><><><><><><><><><><><><><><><><><><>
// Com funcao

// export default function Login(){
//   const [workers, setWorker] = useState([]);

//   useEffect(()=>{
//     api.get('worker/workers').then(({data})=> {
//       setWorker(data);
//     })
//     console.log(workers)
//     // eslint-disable-next-line
//   }, []);

  
//   return(
//     <div>
//       <h1>Listar</h1>     
//       {workers?.map((worker) => (
//         <li key={worker.id}>
//             {worker}
//         </li>

//       ))}   
//     </div>
//   )
// }

// <><><><><><><><><><><><><><><><><><><><><><><><><>
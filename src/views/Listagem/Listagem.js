import React, {useEffect, useState} from "react";
import axios from 'axios'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function Listagem() {
  const [workers, setWorker] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8080/worker/workers')
    .then(({data})=> {
      setWorker(data);
    }).catch(()=>{
      console.log("deu errado")
    })
    
  }, [])

  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Escolha o funcionário para gerar o holerite</h4>
          </CardHeader>
          <CardBody>
          {workers?.map((worker)=>( 
            <Table 
            tableHeaderColor="primary"
            tableHead={["Nome", "Email", "Salário", "Holerite"]}
            key={worker.id}
            tableData={[
                [worker.name, worker.email, worker.dailyIncome, <a href="#pablo" onClick={(e) => e.preventDefault()}>Gerar</a>],
              ]}
            />
            ))}
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
      </GridItem>
    </GridContainer>
  );
}

import React, {useState} from "react";
import axios from 'axios'
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
import { useHistory } from "react-router-dom";

import avatar from "assets/img/faces/marc.jpg";

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

const initialValues = {
  empresa:'',
  nomeUsuario:'',
  email:'',
  primeiroNome:'',
  ultimoNome:'',
  cidade:'',
  pais:'',
  cep:''  
}

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const [values, setValues] = useState(initialValues);
  const history = useHistory();

  function onChange(ev){
    const {id, value} = ev.target;
    setValues({... initialValues, [id]: value});
    console.log(ev.target)
  
  }

  function onSubmit(ev){
    ev.preventDefault();
    axios.post('http://localhost:8080/worker/workers/save', initialValues)
    .then((response) =>{
      history.push('/')
    });
  }

  const classes = useStyles();

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Cadastrar Novo Funcionário</h4>
              <p className={classes.cardCategoryWhite}>preencha o formulário</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    name="empresa"
                    labelText="Empresa"
                    id="empresa"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: false,
                    }}
                    onChange={onChange}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    name="usuario"
                    labelText="Nome de usuário"
                    id="usuario"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onChange={onChange}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    name="email"
                    labelText="Email "
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onChange={onChange}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    name="primeiroNome"
                    labelText="Primeiro Nome"
                    id="primeiroNome"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onChange={onChange}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    name="ultimoNome"
                    labelText="Último Nome"
                    id="ultimoNome"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onChange={onChange}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    name="cidade"
                    labelText="Cidade"
                    id="cidade"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onChange={onChange}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    name="pais"
                    labelText="País"
                    id="pais"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onChange={onChange}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    name="cep"
                    labelText="CEP"
                    id="cep"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onChange={onChange}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>Sobre</InputLabel>
                  <CustomInput
                    labelText="Faça uma breve descrição sobre o colaborador."
                    id="Aboutme"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                    }}
                    onChange={onChange}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={onSubmit}>Salvar</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Denner Ramiro</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

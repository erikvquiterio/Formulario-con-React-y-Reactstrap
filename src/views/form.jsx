import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

export default function FormView() {
  return (
    <Card>
      <CardBody>
        <span className="center padd-bot-5">
          <FontAwesomeIcon icon={faPen} className="icon" />
        </span>
        <CardTitle tag="h5" className="center">
          Formulario con Yup y Formik
        </CardTitle>
        <Form className="padd-top-10">
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label>Nombre</Label>
                <Input
                  type="text"
                  name="nombre"
                  placeholder="Escriba un nombre"
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Apellido</Label>
                <Input
                  type="text"
                  name="apellido"
                  placeholder="Escriba un apellido"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={12}>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Proporcione un email"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={8}>
              <FormGroup>
                <Label>Género</Label>
                <Input type="select" name="genero">
                  <option>Hombre</option>
                  <option>Mujer</option>
                  <option>No binario</option>
                  <option>Prefiero no decirlo</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Edad</Label>
                <Input name="edad" type="number" min="1" max="100" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup check className="padd-bot-5">
            <Input type="checkbox" name="condiciones" />
            <Label check>Acepto los terminos y condiciones</Label>
          </FormGroup>
          <Button block outline color="primary">
            Enviar
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Badge,
} from "reactstrap";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

export default function FormView() {
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const formSchema = Yup.object().shape({
    nombre: Yup.string().required("Escriba un nombre"),
    apellido: Yup.string().required("Escriba un nombre"),
    email: Yup.string().email().required("Escriba un email"),
    edad: Yup.number().positive(),
    condiciones: Yup.boolean(),
  });

  return (
    <Card>
      <CardBody>
        <span className="center padd-bot-5">
          <FontAwesomeIcon icon={faPen} className="icon" />
        </span>
        <CardTitle tag="h5" className="center">
          Formulario con Yup y Formik
        </CardTitle>
        <Formik
          enableReinitialize={true}
          initialValues={{
            nombre: "",
            apellido: "",
            email: "",
            edad: 1,
            genero: "Hombre",
            condiciones: false
          }}
          validationSchema={formSchema}
        >
          {({ errors, touched }) => (
            <Form className="padd-top-10">
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label>Nombre</Label>
                    <Field
                      type="text"
                      name="nombre"
                      placeholder="Escriba un nombre"
                      className="form-control"
                    />
                    {errors.nombre && touched.nombre ? (
                      <div>
                        <Badge color="danger">{errors.nombre}</Badge>
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>Apellido</Label>
                    <Field
                      type="text"
                      name="apellido"
                      placeholder="Escriba un apellido"
                      className="form-control"
                    />
                    {errors.apellido && touched.apellido ? (
                      <div>
                        <Badge color="danger">{errors.apellido}</Badge>
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Label>Email</Label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Proporcione un email"
                      className="form-control"
                    />
                    {errors.email && touched.email ? (
                      <div>
                        <Badge color="danger">{errors.email}</Badge>
                      </div>
                    ) : null}
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
                    <Field
                      name="edad"
                      type="number"
                      min="1"
                      max="100"
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup check className="padd-bot-5">
                <Input
                  type="checkbox"
                  name="condiciones"
                  onClick={() => setDisabledSubmit(!disabledSubmit)}
                />
                <Label check>Acepto los terminos y condiciones</Label>
              </FormGroup>
              <Button block outline color="primary" disabled={disabledSubmit}>
                Enviar
              </Button>
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  );
}

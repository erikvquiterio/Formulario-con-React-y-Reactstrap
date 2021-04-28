import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardBody,
  CardTitle,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Badge,
  //Button,
} from "reactstrap";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import Modal from "../components/modal";

export default function FormView() {
  const options = ["Hombre", "Mujer", "No binario", "Prefiero no decirlo"];

  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const formSchema = Yup.object().shape({
    nombre: Yup.string().required("Escriba un nombre"),
    apellido: Yup.string().required("Escriba un apellido"),
    email: Yup.string().email().required("Proporcione un email"),
    edad: Yup.number()
      .positive()
      .moreThan(18, "Debes tener más de 18")
      .lessThan(100, "Edad máxima 100 años"),
  });

  /*async function onSubmit(values) {
    const payload = {
      ...values,
      condiciones: !disabledSubmit,
    };
    console.log(payload);
  }*/

  return (
    <Card>
      <CardBody>
        <span className="center padd-bot-3">
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
            edad: 18,
            genero: "Mujer",
          }}
          validationSchema={formSchema}
          //onSubmit={onSubmit}
        >
          {({ errors, touched, handleChange, handleBlur, values }) => (
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
                        <Badge className="badge-color">{errors.nombre}</Badge>
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
                        <Badge className="badge-color">{errors.apellido}</Badge>
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
                        <Badge className="badge-color">{errors.email}</Badge>
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={8}>
                  <FormGroup>
                    <Label>Género</Label>
                    <select
                      name="genero"
                      className="form-control"
                      value={values.genero}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      {options.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label>Edad</Label>
                    <Field
                      name="edad"
                      type="number"
                      className="form-control"
                      min="18"
                      max="100"
                    />
                    {errors.edad && touched.edad ? (
                      <div>
                        <Badge className="badge-color">{errors.edad}</Badge>
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup check className="padd-bot-5">
                <Input
                  type="checkbox"
                  onClick={() => setDisabledSubmit(!disabledSubmit)}
                />
                <Label check>Acepto los terminos y condiciones</Label>
              </FormGroup>
              {/*<Button
                block
                outline
                color="primary"
                disabled={disabledSubmit}
                type="submit"
              >
                Enviar
              </Button>*/}
              <Modal
                values={values}
                errors={errors}
                disabledSubmit={disabledSubmit}
              />
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  );
}

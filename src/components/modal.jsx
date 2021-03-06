import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function ModalComponent({ values, errors, disabledSubmit }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const reload = () => (window.location = "/");

  return (
    <>
      <Button
        block
        outline
        color="primary"
        onClick={toggle}
        type="submit"
        disabled={disabledSubmit}
      >
        Enviar
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Detalles</ModalHeader>
        {/*En el cuerpo del modal vamos a mostrar la información en formato JSON de los valores y errores acumulados*/}
        <ModalBody>
          <h5 className="values">Valores</h5> {JSON.stringify(values, null, 2)}{" "}
          <h5 className="errors">Errores</h5> {JSON.stringify(errors, null, 2)}
        </ModalBody>
        <ModalFooter>
          {/*Al presionar el botón recargar vamos a actualizar la página y borrar el formulario*/}
          <Button color="primary" onClick={reload}>
            Recargar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

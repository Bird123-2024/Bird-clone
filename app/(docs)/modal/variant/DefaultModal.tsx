"use client";
import { Button } from "@/src/components/Button";
import { Modal } from "@/src/components/Modal";
import { CloudArrowUp } from "phosphor-react";
import React, { useState } from "react";

const DefaultModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalX, setShowModalX] = useState(false);

  const onClickOne = () => {
    setShowModal(!showModal);
  };
  const onClickTwo = () => {
    setShowModalX(!showModalX);
  };

  return (
    <div className="flex flex-wrap items-end gap-2">
      <Button onClick={onClickOne}>Modal</Button>
      <Button onClick={onClickTwo}>Modal With Cross</Button>
      <Modal
        modalType="info"
        icon={<CloudArrowUp size={28} color="#1B4DFF" />}
        size="md"
        show={showModal}
      >
        <Modal.Header>Do you want to upload this file?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-slate-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClickOne}>
            Cancel
          </Button>
          <Button type="primary" onClick={onClickOne}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        modalType="info"
        icon={<CloudArrowUp size={28} color="#1B4DFF" />}
        size="md"
        show={showModalX}
        onClose={onClickTwo}
      >
        <Modal.Header>Do you want to upload this file?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-slate-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClickTwo}>
            Cancel
          </Button>
          <Button type="primary" onClick={onClickTwo}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const DefaultModalCode = `
"use client";
import { useState } from "react";
import { Modal,Button } from "keep-design";
import { CloudArrowUp } from "phosphor-react";

const DefaultModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalX, setShowModalX] = useState(false);

  const onClickOne = () => {
    setShowModal(!showModal);
  };
  const onClickTwo = () => {
    setShowModalX(!showModalX);
  };

  return (
    <div className="flex flex-wrap items-end gap-2">
      <Button onClick={onClickOne}>Modal</Button>
      <Button onClick={onClickTwo}>Modal With Cross</Button>
      <Modal
        modalType="info"
        icon={<CloudArrowUp size={28} color="#1B4DFF" />}
        size="md"
        show={showModal}
      >
        <Modal.Header>Do you want to upload this file?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-slate-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClickOne}>
            Cancel
          </Button>
          <Button type="primary" onClick={onClickOne}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        modalType="info"
        icon={<CloudArrowUp size={28} color="#1B4DFF" />}
        size="md"
        show={showModalX}
        onClose={onClickTwo}
      >
        <Modal.Header>Do you want to upload this file?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-slate-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClickTwo}>
            Cancel
          </Button>
          <Button type="primary" onClick={onClickTwo}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DefaultModal;
`;

export { DefaultModal, DefaultModalCode };

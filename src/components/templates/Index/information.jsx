"use client";

import { Button } from "@/components/modules/button";
import useInformationInput from "@/hooks/useInformationInputs";
import useInformationStore from "@/store/informationStore";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import Form from "@/components/modules/form/inPlaceEdit";
import { IoAddOutline } from "react-icons/io5";
import { useModal } from "@/contexts/ModalContext";
import RegularForm from "@/components/modules/form/regular";
import addPropertyInputs from "@/constants/form/addProperty";

function Information() {
  const propertiesStore = useInformationStore((s) => s.properties);
  const editPropperties = useInformationStore((s) => s.editPropperties);
  const addProperty = useInformationStore((s) => s.addProperty);
  const { inputs } = useInformationInput(propertiesStore);
  const [isEditing, setIsEditing] = useState(false);
  const { showModal } = useModal();

  const initialValues = propertiesStore?.reduce((acc, prop) => {
    acc[prop.key] = prop.value;
    return acc;
  }, {});

  const editPropHandler = (data) => {
    editPropperties(data);
  };

  const addPropHandler = () => {
    const submitFn = (result) => {
      const { key, value } = result;
      addProperty(key, value);
    };
    showModal({
      header: () => <span>Add Property</span>,
      content: ({ close }) => (
        <RegularForm
          inputs={addPropertyInputs}
          mode="add"
          buttonText="Add"
          closeModalFn={close}
          submitFn={submitFn}
          inputsWrapperClassName="flex flex-col gap-y-2 mb-4 lg:flex-row lg:gap-x-2 lg:justify-between lg:items-center"
        />
      ),
    });
  };

  return (
    <div className="flex flex-col w-full mt-10">
      <div className="header flex justify-between px-4 items-center bg-gray-100 py-2">
        <span className="text-sm text-gray-600">Information</span>
        {!isEditing && (
          <Button
            size="sm"
            variant="icon"
            className="cursor-pointer"
            onClick={() => setIsEditing(true)}
          >
            <FaRegEdit color="var(--base-gray)" />
          </Button>
        )}
      </div>
      <div className="informations-wrapper p-4">
        <Form
          inputs={inputs}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          initialValues={initialValues}
          onSave={editPropHandler}
        />
      </div>
      <div className="buttonWrpper">
        <Button
          onClick={addPropHandler}
          size="lg"
          variant="icon"
          className="bg-blue-100 text-blue-600 cursor-pointer flex justify-center items-center gap-x-2 w-11/12 py-7 mx-auto"
        >
          <IoAddOutline color="var(--dark-blue)" />
          <span className="text-(--dark-blue) text-md">Add a Property</span>
        </Button>
      </div>
    </div>
  );
}

export default React.memo(Information);

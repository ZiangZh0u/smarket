import { useState } from "react";
import { message } from "antd";
import { login } from "../utils";

export function useLoginModal(onSuccess) {
  const [displayModal, setDisplayModal] = useState(false);

  const handleCancel = () => {
    setDisplayModal(false);
  };

  const signinOnClick = () => {
    setDisplayModal(true);
  };

  const onFinish = (data) => {
    login(data)
      .then(() => {
        setDisplayModal(false);
        message.success(`Welcome back`);
        onSuccess();
      })
      .catch((err) => {
        message.error(err.message);
      });
  };

  return {
    displayModal,
    handleCancel,
    signinOnClick,
    onFinish,
  };
}

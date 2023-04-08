import { useEffect } from "react";
import {
  Container,
  Notification,
  CloseButton,
  ImageContainer,
  Image,
  Title,
  Message,
} from "./Toast.styled";

const Toast = ({
  toastList,
  autoDelete,
  autoDeleteTime = 2000,
  deleteToast,
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const listLength = toastList.length;
      if (autoDelete && listLength) {
        deleteToast(toastList[listLength - 1].id);
      }
    }, autoDeleteTime);

    return () => {
      clearInterval(interval);
    };

    // eslint-disable-next-line
  }, [toastList, autoDelete, autoDeleteTime]);

  return (
    <>
      <Container>
        {toastList.map((toast, i) => (
          <Notification
            key={i}
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <CloseButton onClick={() => deleteToast(toast.id)}>x</CloseButton>
            <ImageContainer>
              <Image src={toast.icon} alt="" />
            </ImageContainer>
            <div>
              <Title>{toast.title}</Title>
              <Message>{toast.description}</Message>
            </div>
          </Notification>
        ))}
      </Container>
    </>
  );
};

export default Toast;

import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const MyFormControl = (props) => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <FormControl id={props.id}>
      <FormLabel fontSize="3xl">{props.label}</FormLabel>
      {props.type === "password" ? (
        <InputGroup size="md">
          <Input
            size="lg"
            fontSize="2xl"
            variant="filled"
            placeholder={props.placeholder}
            type={show ? "text" : "password"}
            value={props.value ? props.value : ""}
            onChange={props.onChange}
          />
          <InputRightElement width="4.5rem" height="100%">
            <Button onClick={handleClick}>{show ? "Hide" : "Show"}</Button>
          </InputRightElement>
        </InputGroup>
      ) : (
        <Input
          type={props.type}
          size="lg"
          fontSize="2xl"
          variant="filled"
          placeholder={props.placeholder}
          value={props.value ? props.value : ""}
          onChange={props.onChange}
        />
      )}
    </FormControl>
  );
};

export default MyFormControl;

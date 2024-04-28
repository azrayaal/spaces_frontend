import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";
interface registerFromProps {
  control: any;
  label: string;
  name: string;
  placeholder: string;
  type: string;
  textHelper: string;
  id: string;
  accept: string;
  formEncType: string;
  display: string;
}

export default function Registerform(props: registerFromProps) {
  const {
    control,
    label,
    placeholder,
    name,
    type,
    textHelper,
    id,
    accept,
    formEncType,
    display,
  } = props;
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <FormControl isInvalid={!!fieldState.error?.message}>
            <FormLabel>{label}</FormLabel>
            <Input
              placeholder={placeholder}
              w="full"
              name={name}
              type={type}
              onChange={field.onChange}
              value={field.value}
              onBlur={field.onBlur}
              id={id}
              accept={accept}
              formEncType={formEncType}
              display={display}
            />
            {!!fieldState.error?.message ? (
              <FormErrorMessage>{fieldState.error.message}</FormErrorMessage>
            ) : (
              <FormHelperText>{textHelper}</FormHelperText>
            )}
          </FormControl>
        )}
      />
    </>
  );
}

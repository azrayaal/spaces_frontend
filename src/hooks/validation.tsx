import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const validationLogin = () => {
  const initialValue = {
    username: "",
    password: "",
  };

  const schema = yup.object().shape({
    username: yup
      .string()
      .required("username must be filled")
      .min(3, "username must be at least 3 chatacters"),
    password: yup.string().required("password must be filled"),
  });
  const { control, handleSubmit } = useForm({
    defaultValues: initialValue,
    resolver: yupResolver(schema),
    mode: "all",
    reValidateMode: "onChange",
  });

  return { control, handleSubmit };
};

export const validationRegister = () => {
  const initialValue = {
    email: "",
    profile_description: "",
    full_name: "",
    username: "",
    password: "",
  };
  const schema = yup.object().shape({
    email: yup.string().required("email must be filled").email(),
    profile_description: yup
      .string()
      .required("bio must be filled")
      .min(5, "bio must be at least 5 chatacters"),
    full_name: yup
      .string()
      .required("full name must be filled")
      .min(3, "fullname must be at least 3 chatacters"),
    username: yup
      .string()
      .required("username must be filled")
      .min(3, "username must be at least 3 chatacters"),
    password: yup
      .string()
      .required("password must be filled")
      .min(6, "password must be at least 6 chatacters"),
  });
  const { control, handleSubmit } = useForm({
    defaultValues: initialValue,
    resolver: yupResolver(schema),
    mode: "all",
    reValidateMode: "onChange",
  });

  return { control, handleSubmit };
};

export const validationRegisterFinal = () => {
  const initialValue = {
    profile_description: "",
    // profile_picture: "",
  };

  const schema = yup.object().shape({
    // profile_picture: yup.string().required("avatar must be filled"),
    profile_description: yup
      .string()
      .required("Bio must be filled")
      .min(3, "Bio must be at least 5 chatacters"),
  });
  const { control, handleSubmit } = useForm({
    defaultValues: initialValue,
    resolver: yupResolver(schema),
    mode: "all",
    reValidateMode: "onChange",
  });

  return { control, handleSubmit };
};

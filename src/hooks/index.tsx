import Cookies from "js-cookie";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { API } from "../libs/api";

export const onSubmitLogin = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleDataLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const fetchLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await API.post("signin", form);
      const { token } = response.data;
      const tokenBase64 = window.btoa(token);
      Cookies.set("token", tokenBase64, {
        expires: 1,
      });
      if (token) {
        toast({
          title: "Log in status",
          description: "Success!",
          position: "top-left",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        navigate("/");
      } else {
        toast({
          title: "Log in status",
          description: `${response.data}`,
          position: "top-left",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Log in status",
        description: `${error}`,
        position: "top-left",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return {
    handleDataLogin,
    fetchLogin,
  };
};

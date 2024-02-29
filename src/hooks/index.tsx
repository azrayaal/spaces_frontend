import Cookies from "js-cookie";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { API, API_Header } from "../libs/api";

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
      // console.log(form);
      // console.log(response);

      if (!form.password && !form.username) {
        toast({
          title: "Log in status",
          description: `All data must be filled!`,
          position: "top-left",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      } else if (!form.username) {
        toast({
          title: "Log in status",
          description: `username must be filled!`,
          position: "top-left",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      } else if (!form.password) {
        toast({
          title: "Log in status",
          description: `password must be filled!`,
          position: "top-left",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      } else {
        if (response.data.token) {
          const { token } = response.data;
          const tokenBase64 = window.btoa(token);
          Cookies.set("token", tokenBase64, {
            expires: 1,
          });
          toast({
            title: "Log in status",
            description: "Success!",
            position: "top-left",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          navigate("/");
        } else {
          toast({
            title: "Log in status",
            description: `${response.data}`,
            position: "top-left",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        }
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

export const useOnSubmitPost = () => {
  const toast = useToast();
  const [imagePreview, setImagePreview] = useState<any>(null);

  const [form, setForm] = useState({
    content: "",
    image: File,
  });

  const handleDataPost = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    setForm({
      ...form,
      [name]: name === "image" ? files![0] : e.target.value,
    });

    // Set image preview
    if (name === "image" && files && files![0]) {
      setImagePreview(URL.createObjectURL(files![0]));
    }
  };

  const postContent = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("data post", form);
    try {
      try {
        const response = await API_Header.post("spaces", form);
        toast({
          title: "POST",
          description: `SUCCES!`,
          position: "top-left",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        console.log("response post", response);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    postContent,
    handleDataPost,
    imagePreview,
  };
};

export const useOnsubmitRegister = () => {
  const [imagePreview, setImagePreview] = useState<any>(null);
  const storedData = localStorage.getItem("DataRegister");
  const toast = useToast();
  const navigate = useNavigate();
  if (storedData) {
    const storedDataObj = JSON.parse(storedData);

    const [formFinal, setFormFinal] = useState({
      ...storedDataObj,
      profile_description: "",
      profile_picture: File,
    });

    const handleDataRegister = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, files } = e.target;

      setFormFinal({
        ...formFinal,
        [name]: name === "profile_picture" ? files![0] : e.target.value,
      });

      // Set image preview
      if (name === "profile_picture" && files && files![0]) {
        setImagePreview(URL.createObjectURL(files![0]));
      }
    };

    const postRegister = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        console.log(formFinal);
        const examplePromise = new Promise((resolve, reject) => {
          setTimeout(() => resolve(200), 2000);
        });
        const response = await API_Header.post("register", formFinal);
        console.log("response", response);
        toast.promise(examplePromise, {
          success: {
            position: "top-left",
            title: "Register status",
            description: `${response.data.message}`,
          },
          error: {
            position: "top-left",
            title: "Register status",
            description: `${response.data.message}`,
          },
          loading: {
            position: "top-left",
            title: "Register status",
            description: "Please wait",
          },
        });
        localStorage.clear();
        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      } catch (error) {
        throw error;
      }
    };

    return {
      postRegister,
      handleDataRegister,
      imagePreview,
    };
  }
};

export const useOnSubmitEdit = (id: any) => {
  const toast = useToast();
  const navigate = useNavigate();
  const [headerPreview, setHeaderPreview] = useState<any>(null);
  const [profilePreview, setProfilePreview] = useState<any>(null);
  const [form, setForm] = useState({
    full_name: "",
    username: "",
    profile_description: "",
    // profile_picture: File
    header: File,
  });

  const handleDataEdit = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    setForm({
      ...form,
      [name]: name === "header" ? files![0] : e.target.value,
    });

    if (name === "header" && files && files![0]) {
      setHeaderPreview(URL.createObjectURL(files![0]));
    }
  };

  const postDataEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    try {
      const response = await API_Header.patch(`edit-profile/${id}`, form);
      console.log(response);
      toast({
        title: "Success",
        description: `${response.data.message}`,
        position: "top-left",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate("/my-profile");
      window.location.reload();
    } catch (error) {
      throw error;
    }
  };

  return {
    handleDataEdit,
    postDataEdit,
    headerPreview,
  };
};

export const checkLogin = () => {
  const [isLogin, setIsLogIn] = useState<Boolean>(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLogIn(true);
    }
  }, []);

  return { isLogin };
};

export const useImgUrl = () => {
  const [imageUrl] = useState<string>(
    `http://res.cloudinary.com/ddpo1vjim/image/upload/v1708434267/SpaceS/`
  );

  return { imageUrl };
};

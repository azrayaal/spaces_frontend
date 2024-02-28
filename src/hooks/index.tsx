import Cookies from "js-cookie";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { API, API_Header } from "../libs/api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../datas/data-types";
import { fetchContent } from "../features/contentSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { Cloudinary } from "cloudinary-core";
// import { useDispatch, useSelector } from "react-redux";
// import { ThunkDispatch } from "@reduxjs/toolkit";
// import { RootState, UserFromPayloadRedux } from "../datas/data-types";
// import { ThunkDispatch } from "@reduxjs/toolkit";
// import { fetchUserDetail } from "../features/userDetailSlice";
// import { fetchUserDetailFromToken } from "../features/userDetailThunks";

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
  // const navigate = useNavigate();
  const toast = useToast();
  const [imagePreview, setImagePreview] = useState<any>(null);

  const dataUserogin = useSelector(
    (state: RootState) => state.userDetail.userDetail.id
  );

  // const files = (event.target as HTMLInputElement).files;

  const [form, setForm] = useState({
    content: "",
    userId: dataUserogin,
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
    try {
      console.log("data post", form);
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
        // setTimeout(() => {
        //   window.location.reload();
        // }, 2000);
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
  // const dataUserLogin = useSelector((state: RootState) => state.userDetail);

  // const [imageUrl, setImageUrl] = useState<string>("");

  // const { isLogin } = checkLogin();
  // console.log("isLogin hooks img url", isLogin);
  // if (isLogin) {
  //   useEffect(() => {
  //     if (dataUserLogin?.userDetail.profile_picture) {
  //       const cl = new Cloudinary({
  //         cloud_name: "ddpo1vjim",
  //         folder: "SpaceS",
  //       });
  //       const url = cl.url(
  //         `v1708434267/SpaceS/${dataUserLogin?.userDetail.profile_picture}.jpg`
  //       );
  //       setImageUrl(url);
  //     }
  //   }, [dataUserLogin?.userDetail.profile_picture]);
  // } else {
  //   useEffect(() => {
  //     setImageUrl("");
  //   }, []);
  // }

  // console.log("imgUrl", imageUrl);

  return { imageUrl };
};

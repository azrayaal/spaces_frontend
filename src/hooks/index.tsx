import Cookies from "js-cookie";
import { useToast } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { API, API_Header } from "../libs/api";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { fetchContent } from "../features/contentSlice";
import axios from "axios";
import { fetchUserDetail } from "../features/userDetailSlice";
import { fetchSuggest } from "../features/suggestSlice";
import { fetchAllReplyContent } from "../features/allReplyContentSlice";
import { fetchFollowing } from "../features/following";
import { fetchFollower } from "../features/follower";

export const onSubmitLogin = () => {
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
  const navigate = useNavigate();
  const fetchLogin = async (data: { username: string; password: string }) => {
    try {
      console.log(data);
      const response = await API.post("signin", data);
      console.log(response);
      if (response.data.status === 401) {
        toast({
          title: "Log in status",
          description: response.data.message,
          position: "top-left",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      } else if (response.data.status === 200) {
        const { token } = response.data;
        const tokenBase64 = window.btoa(token);
        Cookies.set("token", tokenBase64, {
          expires: 1,
        });
        toast({
          title: "Log in status",
          description: "Login Success!",
          position: "top-left",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
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

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const postContent = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // try {
      await API_Header.post("spaces", form);
      dispatch(fetchContent());
      toast({
        title: "POST",
        description: `You just posted something!`,
        position: "top-left",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      const target = e.target as HTMLFormElement;
      target.reset();
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
  // if (storedData) {
  const storedDataObj = JSON.parse(storedData);

  const [formFinal, setFormFinal] = useState({
    ...storedDataObj,
    profile_picture: File,
  });

  console.log(formFinal.profile_picture);

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

  // console.log("formFinal", formFinal.profile_picture);

  // const postRegister = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     console.log(formFinal);
  //     const examplePromise = new Promise((resolve) => {
  //       setTimeout(() => resolve(200), 2000);
  //     });
  //     const response = await API_Header.post("register", formFinal);
  //     console.log("response", response);
  //     toast.promise(examplePromise, {
  //       success: {
  //         position: "top-left",
  //         title: "Register status",
  //         description: `${response.data.message}`,
  //       },
  //       error: {
  //         position: "top-left",
  //         title: "Register status",
  //         description: `${response.data.message}`,
  //       },
  //       loading: {
  //         position: "top-left",
  //         title: "Register status",
  //         description: "Please wait",
  //       },
  //     });
  //     localStorage.clear();
  //     setTimeout(() => {
  //       navigate("/login");
  //     }, 2000);
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  const postRegister = async (values) => {
    try {
      const storedData = localStorage.getItem("DataRegister");
      const storedDataObj = JSON.parse(storedData);
      const data = {
        ...storedDataObj,
        ...values,
        profile_picture: formFinal.profile_picture,
      };

      console.log(data);
      const response = await API_Header.post("register", data);
      console.log(response);
      if (response.data.status === 401) {
        toast({
          title: "Log in status",
          description: response.data.message,
          position: "top-left",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      } else if (response.data.status === 400) {
        toast({
          title: "Log in status",
          description: response.data.message,
          position: "top-left",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setTimeout(() => {
          navigate("/login");
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return {
    postRegister,
    handleDataRegister,
    imagePreview,
  };
  // }
};

export const useOnSubmitReply = () => {
  const toast = useToast();
  const { id } = useParams();
  const dataId = parseInt(id);

  console.log("dataId", dataId);

  const [imagePreview, setImagePreview] = useState<any>(null);

  const [form, setForm] = useState({
    content: "",
    spaceId: dataId,
    image: File,
  });

  const handleReplyPost = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    setForm({
      ...form,
      [name]: name === "image" ? files![0] : e.target.value,
    });

    if (name === "image" && files && files![0]) {
      setImagePreview(URL.createObjectURL(files![0]));
    }
  };

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const postReply = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await API_Header.post("reply", form);
      // console.log(response);
      dispatch(fetchAllReplyContent(dataId));
      toast({
        title: "Reply Status",
        description: "You just replied!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-left",
      });

      const target = e.target as HTMLFormElement;
      target.reset();
    } catch (error) {
      console.log(error);
      toast({
        title: "Reply Status",
        description: "Error posting reply!",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-left",
      });
    }
  };
  return {
    postReply,
    handleReplyPost,
    imagePreview,
  };
};

export const postLike = async (id) => {
  // e.preventDefault();
  const spacesId = id;
  const token = Cookies.get("token");
  const jwtToken = token ? atob(token) : null;

  try {
    // const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    await axios.post(
      `${import.meta.env.VITE_PUBLIC_API}/api/v1/likes`,
      { spacesId },
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
    // dispatch(fetchContent());
  } catch (error) {
    throw error;
  }
};

export const useOtherFollow = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const postFollow = async (id) => {
    const followerId = id;
    const token = Cookies.get("token");
    const jwtToken = token ? atob(token) : null;

    try {
      await axios.post(
        `${import.meta.env.VITE_PUBLIC_API}/api/v1/follow`,
        { followerId },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      dispatch(fetchUserDetail());
      dispatch(fetchSuggest());
      // dispatch(fetchFollowing());
      // dispatch(fetchFollower());
      // console.log(response);
    } catch (error) {
      throw error;
    }
  };
  return { postFollow };
};
export const useFollow = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const postFollow = async (id) => {
    const followerId = id;
    const token = Cookies.get("token");
    const jwtToken = token ? atob(token) : null;

    try {
      await axios.post(
        `${import.meta.env.VITE_PUBLIC_API}/api/v1/follow`,
        { followerId },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      dispatch(fetchUserDetail());
      dispatch(fetchSuggest());
      dispatch(fetchFollowing());
      dispatch(fetchFollower());
      // console.log(response);
    } catch (error) {
      throw error;
    }
  };
  return { postFollow };
};

export const useDelete = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const toast = useToast();
  const token = Cookies.get("token");
  const jwtToken = token ? atob(token) : null;

  const deleteContent = async (id) => {
    const spaceId = id;
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_PUBLIC_API}/api/v1/space-delete/${id}`,
        {
          data: { spaceId },
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      console.log(response);
      if (response.data.status === "success") {
        toast({
          title: "Content Status",
          description: `${response.data.message}`,
          position: "top-left",
          status: `success`,
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Content Status",
          description: `${response.data.message}`,
          position: "top-left",
          status: `error`,
          duration: 3000,
          isClosable: true,
        });
      }

      // console.log(response);
      dispatch(fetchUserDetail());
      dispatch(fetchContent());
    } catch (error) {
      throw error;
    }
  };

  return { deleteContent };
};

export const useOnSubmitEdit = (id: any) => {
  const toast = useToast();
  const navigate = useNavigate();
  const [headerPreview, setHeaderPreview] = useState<any>(null);
  // const [profilePreview, setProfilePreview] = useState<any>(null);
  const [form, setForm] = useState({
    full_name: "",
    username: "",
    profile_description: "",
    profile_picture: null,
    header: null,
  });

  const handleDataEdit = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    if (name === "header" && files && files![0]) {
      setHeaderPreview(URL.createObjectURL(files![0]));
    }

    setForm({
      ...form,
      [name]: name === "header" ? files![0] : e.target.value,
    });
  };

  // const handleDataEdit = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value, files } = e.target;

  //   if (!value && name !== "header" && name !== "profile_picture") {
  //     setForm({
  //       ...form,
  //       [name]: null,
  //     });
  //   } else if (
  //     (name === "header" || name === "profile_picture") &&
  //     files &&
  //     files[0]
  //   ) {
  //     if (name === "header") {
  //       setHeaderPreview(URL.createObjectURL(files[0]));
  //     } else {
  //       setProfilePreview(URL.createObjectURL(files[0]));
  //     }
  //     // Create a new File object
  //     const file = new File([files[0]], files[0].name, { type: files[0].type });
  //     setForm({
  //       ...form,
  //       [name]: file,
  //     });
  //   } else {
  //     setForm({
  //       ...form,
  //       [name]: value,
  //     });
  //   }
  // };

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

export function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const timeDifference = now.getTime() - date.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 60) {
    return seconds + " seconds ago";
  } else if (minutes < 60) {
    return minutes + " minutes ago";
  } else if (hours < 24) {
    return hours + " hours ago";
  } else if (days < 30) {
    return days + " days ago";
  } else if (months < 12) {
    return months + " months ago";
  } else {
    return years + " years ago";
  }
}

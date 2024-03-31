import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  Image,
  Stack,
  CardBody,
  Spacer,
  Flex,
  Center,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContentDetail } from "../../features/contentDetailSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../datas/data-types";
import ContentSpace from "../../components/content";
import { fetchAllReplyContent } from "../../features/allReplyContentSlice";
import CardContetDetail from "./component/cardContetDetail";
import FormReply from "./component/formReply";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function DetailContent() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  const { id } = useParams();
  const dataId = parseInt(id);

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const dataDetail = useSelector(
    (state: RootState) => state.contentDetail.data
  );

  const allReplyContent = useSelector(
    (state: RootState) => state.allReplyContent.data.reply
  );

  useEffect(() => {
    dispatch(fetchContentDetail(dataId));
    dispatch(fetchAllReplyContent(dataId));
  }, [dataId]);

  return (
    <Box m={4}>
      <Heading size="md">
        <Flex>
          <Center>
            <Box mr={5} color={"teal"}>
              <FaRegArrowAltCircleLeft size="25" onClick={handleBack} />
            </Box>
            Post
          </Center>
        </Flex>
      </Heading>
      <Box display={{ base: "none", md: "block" }}>
        <CardContetDetail
          id={dataDetail.id}
          key={dataDetail.id}
          content={dataDetail.content}
          image={dataDetail.image}
          profile_picture={dataDetail.user.profile_picture}
          full_name={dataDetail.user.full_name}
          username={dataDetail.user.username}
          created_at={dataDetail.created_at}
        />
      </Box>
      <Box m={4} display={{ base: "none", md: "block" }}>
        <FormReply />

        <Box>
          {allReplyContent.map((i) => (
            <CardContetDetail
              id={i.id}
              key={i.id}
              content={i.content}
              image={i.image}
              profile_picture={i.user.profile_picture}
              full_name={i.user.full_name}
              username={i.user.username}
              created_at={i.created_at}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

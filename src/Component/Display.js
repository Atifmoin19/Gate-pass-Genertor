import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import {
  Box,
  Flex,
  Input,
  Text,
  InputGroup,
  InputLeftAddon,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";

import { db } from "../firebase/firebase";
import Card from "./Card";

const Display = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState([]);
  const fetchPost = async () => {
    await getDocs(collection(db, "todos")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodo(newData);
    });
  };
  const handelPrint = () => {};
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      {todo.length > 0 && (
        <Box>
          <Box
            w="100%"
            display={"flex"}
            flexWrap="wrap"
            justifyContent="center"
            alignItems={"center"}
          >
            <Card data={todo} heading={"Office User Copy"} val={id} />
            <Card data={todo} heading={"Labour/Machine Use Copy"} val={id} />
            <Card data={todo} heading={"Royality Use Copy"} val={id} />
          </Box>
          <Flex
            mt="10px"
            w="100%"
            justifyContent={"center"}
            alignItems="center"
          >
            <Button
              onClick={() => window.print()}
              mx="20px"
              p="10px 20px"
              colorScheme="green"
            >
              Print
            </Button>
            <Button
              mx="20px"
              p="10px 20px"
              onClick={() => navigate("/")}
              colorScheme="green"
            >
              Generate Another
            </Button>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Display;

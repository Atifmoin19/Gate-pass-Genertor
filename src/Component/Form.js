import React from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

import img from "../3d-casual-life-fingerprint-blockchain.png";
import {
  Box,
  Flex,
  Input,
  Text,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

const Form = () => {
  const navigate = useNavigate();
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  var time = date.getHours() + ":" + date.getMinutes();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmitt = async (data) => {
    const {
      Ghat_No,
      Manager,
      Entry_Time,
      Entry_Date,
      Vehicle_No,
      Type,
      Load_Type,
      Quantity,
      Driver,
      Mobile,
      Dl_No,
      Weight_Unloaded,
      Dest,
    } = data;

    try {
      const docRef = await addDoc(collection(db, "todos"), {
        Ghat_No: Ghat_No,
        Manager: Manager,
        Entry_Time: Entry_Time,
        Entry_Date: Entry_Date,
        Vehicle_No: Vehicle_No,
        Type: Type,
        Load_Type: Load_Type,
        Quantity: Quantity,
        Driver: Driver,
        Mobile: Mobile,
        Dl_No: Dl_No,
        Weight_Unloaded: Weight_Unloaded,
        Dest: Dest,
      });
      console.log("Document written with ID: ", docRef.id);
      navigate(`/about/${docRef.id}`);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <Flex
        w="100%"
        justifyContent="center"
        alignItems="center"
        h="100vh"
        bg="#F6F6F6"
      >
        <Box
          border="1px solid #ccc"
          w="80%"
          height="80%"
          boxShadow="md"
          rounded="xl"
          bg="#ffffff"
          overflow="hidden"
          m="5px auto"
        >
          <Flex w="100%" h="100%">
            <Box
              w="300px"
              height="100%"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              bg="#F6F6F6"
            >
              {" "}
              <img
                style={{ width: "200px", height: "200px" }}
                src={img}
                alt="img"
              ></img>
            </Box>

            <Box
              width="100%"
              height="100%"
              overflow="auto"
              display="flex"
              justifyContent="center"
              alignItems={"flex-start"}
              bg="#fff"
              borderLeft="1px solid #ccc"
              boxShadow="md"
            >
              <form style={{ width: "80%" }} onSubmit={handleSubmit(onSubmitt)}>
                <Text
                  textAlign={"center"}
                  my="20px"
                  fontSize={"2xl"}
                  fontWeight="bold"
                >
                  {" "}
                  Gate Pass Generator
                </Text>
                <InputGroup my={"20px"}>
                  <InputLeftAddon children="Ghat No" />
                  <Input
                    w="100%"
                    defaultValue="KATRI 14/7 TO 14/10"
                    {...register("Ghat_No", { required: true })}
                  />
                </InputGroup>
                {errors.Ghat_No && (
                  <Text fontSize="xs" color="red.300">
                    Enter Ghat No
                  </Text>
                )}

                <InputGroup my={"20px"}>
                  <InputLeftAddon children="Manager" />

                  <Input
                    defaultValue="VASHISTHA ASSOCIATES"
                    {...register("Manager", { required: true })}
                  />
                </InputGroup>
                {errors.Manager && (
                  <Text fontSize="xs" color="red.300">
                    Enter Manager
                  </Text>
                )}

                <InputGroup my={"20px"}>
                  <InputLeftAddon children="Entry Time" />
                  <Input
                    defaultValue={time}
                    {...register("Entry_Time", { required: true })}
                  />
                </InputGroup>
                {errors.Entry_Time && (
                  <Text fontSize="xs" color="red.300">
                    Enter Entry Time
                  </Text>
                )}
                <InputGroup my={"20px"}>
                  <InputLeftAddon children="Entry Date" />

                  <Input
                    defaultValue={currentDate}
                    {...register("Entry_Date", { required: true })}
                  />
                </InputGroup>
                {errors.Entry_Date && (
                  <Text fontSize="xs" color="red.300">
                    Enter Entry Date
                  </Text>
                )}
                <InputGroup my={"20px"}>
                  <InputLeftAddon children="Vehicle No" />

                  <Input {...register("Vehicle_No", { required: true })} />
                </InputGroup>
                {errors.Vehicle_No && (
                  <Text fontSize="xs" color="red.300">
                    Enter Vehicle No
                  </Text>
                )}
                <InputGroup my={"20px"}>
                  <InputLeftAddon children="Type" />

                  <Input {...register("Type", { required: true })} />
                </InputGroup>
                {errors.Type && (
                  <Text fontSize="xs" color="red.300">
                    Enter Type
                  </Text>
                )}
                <InputGroup my={"20px"}>
                  <InputLeftAddon children="Load Type" />

                  <Input {...register("Load_Type", { required: true })} />
                </InputGroup>
                {errors.Load_Type && (
                  <Text fontSize="xs" color="red.300">
                    Enter Load Type
                  </Text>
                )}
                <InputGroup my={"20px"}>
                  <InputLeftAddon children="Quantity" />

                  <Input {...register("Quantity", { required: true })} />
                </InputGroup>
                {errors.Quantity && (
                  <Text fontSize="xs" color="red.300">
                    Enter Quantity
                  </Text>
                )}
                <InputGroup my={"20px"}>
                  <InputLeftAddon children="Driver" />

                  <Input {...register("Driver", { required: true })} />
                </InputGroup>
                {errors.Driver && (
                  <Text fontSize="xs" color="red.300">
                    Enter Driver
                  </Text>
                )}
                <InputGroup my={"20px"}>
                  <InputLeftAddon children="Mobile" />

                  <Input {...register("Mobile", { required: true })} />
                </InputGroup>
                {errors.Mobile && (
                  <Text fontSize="xs" color="red.300">
                    Enter Mobile Number
                  </Text>
                )}

                <InputGroup my={"20px"}>
                  <InputLeftAddon children="Dl No" />

                  <Input {...register("Dl_No", { required: true })} />
                </InputGroup>
                {errors.Dl_No && (
                  <Text fontSize="xs" color="red.300">
                    Enter Dl No
                  </Text>
                )}
                <InputGroup my={"20px"}>
                  <InputLeftAddon children="Weight (Unloaded)" />

                  <Input {...register("Weight_Unloaded", { required: true })} />
                </InputGroup>
                {errors.Weight_Unloaded && (
                  <Text fontSize="xs" color="red.300">
                    Enter Weight Unloaded
                  </Text>
                )}
                <InputGroup my={"20px"}>
                  <InputLeftAddon children="Dest" />

                  <Input {...register("Dest", { required: true })} />
                </InputGroup>
                {errors.Dest && (
                  <Text fontSize="xs" color="red.300">
                    Enter Destination
                  </Text>
                )}

                <InputGroup
                  w="100%"
                  display={"flex"}
                  justifyContent="center"
                  my={"20px"}
                >
                  <Input w="100px" type="submit" />
                </InputGroup>
              </form>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Form;

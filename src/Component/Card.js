import React from "react";
import {
  Box,
  Flex,
  Input,
  Text,
  InputGroup,
  InputLeftAddon,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const Card = (props) => {
  const chota = props.data?.filter((ele) => ele.id === props.val)[0];
  const datalenth = props.data.length;

  return (
    <>
      <Box
        m="10px"
        w={"400px"}
        bg="#F6F6F6"
        p="50px 10px"
        display={"flex"}
        justifyContent="center"
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Box m="10px" p="10px" fontSize="l" border="1px">
          Ghat Theta Year - 2023-2027
        </Box>
        <Box textAlign={"center"}>
          <Box fontWeight="bold">Gate Pass</Box>
          <h3>Recept No: {datalenth} / 23-24</h3>
        </Box>
        <Box>
          <Box textAlign={"center"} my="10px" fontWeight="bold">
            {props.heading}
          </Box>
          <Grid
            m="4px"
            my="10px"
            templateColumns="repeat(2, 160px)"
            fontSize="13px"
            gap={2}
          >
            <GridItem>Ghaat No : </GridItem>
            <GridItem>{chota?.Ghat_No}</GridItem>
            <GridItem>Manager : </GridItem>
            <GridItem>{chota?.Manager}</GridItem>
            <GridItem>Entry Time : </GridItem>
            <GridItem>{chota?.Entry_Time}</GridItem>
            <GridItem>Entry Date : </GridItem>
            <GridItem>{chota?.Entry_Date}</GridItem>
            <GridItem>Vehicle_No : </GridItem>
            <GridItem>{chota?.Vehicle_No}</GridItem>
            <GridItem>Type : </GridItem>
            <GridItem>{chota?.Type}</GridItem>
            <GridItem>Load_Type : </GridItem>
            <GridItem>{chota?.Load_Type}</GridItem>
            <GridItem>Quantity : </GridItem>
            <GridItem>{chota?.Quantity}</GridItem>
            <GridItem>Driver : </GridItem>
            <GridItem>{chota?.Driver}</GridItem>
            <GridItem>Mobile : </GridItem>
            <GridItem>{chota?.Mobile}</GridItem>
            <GridItem>Dl No : </GridItem>
            <GridItem>{chota?.Dl_No}</GridItem>
            <GridItem>Weight Unloaded : </GridItem>
            <GridItem>{chota?.Weight_Unloaded}</GridItem>
            <GridItem>Dest : </GridItem>
            <GridItem>{chota?.Dest}</GridItem>
          </Grid>
        </Box>
        <Box m="10px" p="10px" fontSize="xs" border="1px">
          This Copy is for Gate Pass Only. Does Not Have any relation with Lease
          of Ghaat
        </Box>
      </Box>
    </>
  );
};

export default Card;

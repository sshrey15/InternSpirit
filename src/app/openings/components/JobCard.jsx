import React from "react";
import { Box, Stack, Card, CardBody, Text, Button } from "@chakra-ui/react";

const JobCard = ({ jobs }) => {
  return (
    <>
      <div className="jobContent mx-32 my-20">
        <div className=" flex justify-between px-3">
          <h1>UPDATES(10)</h1>
          <div>
            <Button mr={14}> Filter</Button>
            <Button>View</Button>
          </div>
        </div>

        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          border={"none"}
          bg={"gray"}
          h={"14.5rem"}
          w="full"
        >
          <Stack>
            <Box>
              <Box
                className=" bg-green-900 border-b-2 border-green-950 p-4 flex gap-4"
                w={"78.8rem"}
                h={"4rem"}
                textColor={"white"}
              >
                <Text className="text-[19.5px]" as="b">
                  <h1>UI/UX Designer</h1>
                </Text>
                <Text fontWeight={140}>for Meta, India</Text>
              </Box>

              <CardBody>
                <Box pt="12" pl="8">
                  <Button border={"1px solid black"} ml="4" p="3">
                    Bachelor's Degree
                  </Button>
                  <Button border={"1px solid black"} ml="4" p="3">
                    React js
                  </Button>
                  <Button border={"1px solid black"} ml="4" p="3">
                    4 Years Experience
                  </Button>
                </Box>

                <Text pl="12" pt="8">
                  UI/UX Designer: Design intuitive user interfaces and engaging
                  experiences through research-driven methodologies,
                  collaborating with teams to ensure optimal usability and
                  visual appeal. Know more
                </Text>
              </CardBody>
            </Box>
          </Stack>
        </Card>
      </div>
    </>
  );
};

export default JobCard;

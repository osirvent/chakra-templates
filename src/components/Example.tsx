import {
  Box,
  Heading,
  HStack,
  IconButton,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Link from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import { ResizableFrame } from "./ResizableFrame";
import { CodeSample } from "./CodeSample";
import { Template, Category, SubCategory } from "../data";

type ExampleProps = {
  template: Template;
  code: string;
  category: Category;
  subCategory: SubCategory;
};

export const Example = ({
  template,
  code,
  category,
  subCategory,
}: ExampleProps) => {
  const exampleLink = `/templates/${category.id}/${subCategory.id}/${template.filename}`;

  return (
    <Box bg={"gray.50"} padding={4} rounded={"md"} borderWidth={1}>
      <Tabs variant="soft-rounded" colorScheme="teal" size={"sm"}>
        <TabList
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Heading
            as={"h3"}
            color={"gray.700"}
            size={"sm"}
            mb={{ base: 4, md: 0 }}
          >
            {template.name}
          </Heading>
          <HStack spacing={4}>
            <Tab>Preview</Tab>
            <Tab>Code</Tab>
            <Link href={exampleLink} passHref>
              <IconButton
                as={"a"}
                cursor={"pointer"}
                icon={<ExternalLinkIcon />}
                size={"sm"}
                aria-label={"Open in Fullscreen"}
                title={"Open in Fullscreen"}
                target="_blank"
              />
            </Link>
          </HStack>
        </TabList>
        <TabPanels borderRadius="2xl">
          <TabPanel px={0} pb={0}>
            <Box
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              }
            >
              <ResizableFrame src={exampleLink} />
            </Box>
          </TabPanel>
          <TabPanel px={0} pb={0}>
            <CodeSample code={code} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

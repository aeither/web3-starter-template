import { Container, Flex } from "@chakra-ui/react";
import BottomNextBtn from "components/views/BottomNextBtn";
import ProgressBar from "components/views/ProgressBar";
import QuestGuide from "components/views/QuestGuide";
import { AdventureEnum } from "core/states";
import { Heading, Link } from "tw-components";

const guide = {
  title: "All quests Completed 🥳",
  description: "What are the next steps I can take?",
};

const NextSteps = () => {
  return (
    <>
      <Container my={{ base: 4, md: 8 }} maxW="container.lg">
        <ProgressBar hasStripe={false} />
        <QuestGuide guide={guide} />
      </Container>

      <Container maxW="container.lg">
        <Flex
          direction="column"
          w="full"
          justify="center"
          align="center"
          gap="4"
        >
          <Heading size="title.sm" pt="4">
            Explore my other projects
          </Heading>
          <Link isExternal color="primary" href="https://github.com/aeither">
            Open Github
          </Link>
        </Flex>
      </Container>

      <BottomNextBtn isLast adventureState={AdventureEnum.NextSteps} />
    </>
  );
};
export default NextSteps;

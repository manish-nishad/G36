"use client";

import {
  Marquee,
  Box,
  Container,
  Heading,
  Image,
  Link,
} from "@chakra-ui/react"
import aaryash from "../../assets/brands/aaryashPrints.png";
import jitendra from "../../assets/brands/jitendraClasses.png";
import ono from "../../assets/brands/onologo1.png";
import rafaMedi from "../../assets/brands/rafaMeditour.png";

const items = [
  { src: aaryash, label: "Aaryash Prints", url: "https://aaryashprints.in" },
  {
    src: jitendra,
    label: "Jitendra Sir Classes",
    url: "https://jitendrasirclasses.in",
  },
  { src: ono, label: "Ono Travels", url: "https://onotravels.in" },
  { src: rafaMedi, label: "Rafa Meditour", url: "https://rafameditours.com" },
];

export default function MarqueOne() {
  return (
    <Box py={20}>
      <Container maxW="6xl">
        <Heading
          textAlign="center" color="blue.600" fontSize={{ base: "xl", md: "3xl" }} mb={4} as="h2"
        >
          Trusted by Leading Brands
        </Heading>
        <Marquee.Root autoFill spacing="2rem" pauseOnInteraction>
          <Marquee.Edge side="start" />
          <Marquee.Viewport>
            <Marquee.Content>
              {items.map((item, i) => {
                return (
                  <Marquee.Item key={i} px="2rem">
                    <Link
                      href={item.url}
                      target="blank"
                      _hover={{ transform: "scale(1.1)" }}
                      transition="0.3s ease"
                    >
                      <Box>
                        <Image
                          src={item.src}
                          alt={item.label}
                          boxSize="3rem"
                          objectFit="contain"
                          height={20}
                          width={20}
                        />
                      </Box>
                    </Link>
                  </Marquee.Item>
                );
              })}
            </Marquee.Content>
          </Marquee.Viewport>
          <Marquee.Edge side="end" />
        </Marquee.Root>
      </Container>
    </Box>
  );
}

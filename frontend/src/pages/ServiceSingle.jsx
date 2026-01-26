import {
  Box,
  Breadcrumb,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
  Icon,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Seo from "../seo/Seo";
import { getServiceBySlug, getRelatedServices } from "../data/servicePagesContent";

const socialLinks = [
  { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61582465814810", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/genius36.in/", label: "Instagram" },
  { icon: FaYoutube, href: "https://www.youtube.com/@Geniusindia36", label: "YouTube" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/company/genius36", label: "LinkedIn" },
];

export default function ServiceSingle() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <Box bg="white" minH="60vh" pt={{ base: "90px", md: "100px" }} pb={12}>
        <Container maxW="7xl">
          <VStack spacing={4} py={12}>
            <Heading size="lg">Service not found</Heading>
            <Text color="gray.600">The service page you’re looking for doesn’t exist.</Text>
            <RouterLink to="/services">
              <Button bg="#0951d8" color="white" _hover={{ bg: "#073fa6" }}>
                Back to Services
              </Button>
            </RouterLink>
          </VStack>
        </Container>
      </Box>
    );
  }

  const related = getRelatedServices(service.relatedServices);
  const { hero, description, keyFeatures, benefits, visualBlocks, process, cta, detailsSections } = service;
  const [heroImgError, setHeroImgError] = useState(false);

  // Reset image error state when navigating to a different service
  useEffect(() => {
    setHeroImgError(false);
  }, [slug]);

  // Generate Service Schema Markup
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Genius36 Technologies India LLP",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Maroda Tank, Utai Rd, near Police Station, Ajad Nagar, Newai",
        "addressLocality": "Bhilai",
        "addressRegion": "Chhattisgarh",
        "postalCode": "490006",
        "addressCountry": "IN"
      },
      "telephone": "+91-82005-93901",
      "email": "info@genius36tech.com",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "description": service.description.overview,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.name,
      "itemListElement": service.keyFeatures.map((feature, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        },
        "position": index + 1
      }))
    }
  };

  return (
    <>
      <Seo
        title={service.seo.metaTitle}
        description={service.seo.metaDescription}
      />
      
      {/* Service Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Box bg="white" minH="100vh" pt={{ base: "90px", md: "100px" }} pb={{ base: 8, md: 12 }}>
        <Container maxW="7xl" px={{ base: 4, md: 6, lg: 8 }}>
          {/* BREADCRUMB */}
          <Box py={{ base: 4, md: 6 }} fontSize={{ base: "sm", md: "md" }}>
            <Breadcrumb.Root separator={<ChevronRight size={16} color="var(--chakra-colors-gray-400)" />} separatorGap={2}>
              <Breadcrumb.List>
                <Breadcrumb.Item>
                  <Breadcrumb.Link asChild color="gray.600" _hover={{ color: "#0951d8" }}>
                    <RouterLink to="/">Home</RouterLink>
                  </Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                  <Breadcrumb.Link asChild color="gray.600" _hover={{ color: "#0951d8" }}>
                    <RouterLink to="/services">Services</RouterLink>
                  </Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                  <Breadcrumb.CurrentLink color="gray.900" fontWeight="600">
                    {service.breadcrumb}
                  </Breadcrumb.CurrentLink>
                </Breadcrumb.Item>
              </Breadcrumb.List>
            </Breadcrumb.Root>
          </Box>

          {/* HERO BANNER */}
          <Box
            position="relative"
            borderRadius="2xl"
            overflow="hidden"
            mb={{ base: 10, md: 14 }}
            bg="gray.900"
          >
            {!heroImgError && (
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                w="100%"
                h={{ base: "280px", md: "400px", lg: "480px" }}
                objectFit="cover"
                opacity={0.6}
                onError={() => setHeroImgError(true)}
              />
            )}
            <Box
              position="absolute"
              inset="0"
              bgGradient="linear(to-br, rgba(9,81,216,0.7), rgba(4,50,123,0.8))"
            />
            <VStack
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              p={{ base: 6, md: 10 }}
              align="start"
              spacing={3}
            >
              <Heading as="h1" size="2xl" color="white" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
                {service.name}
              </Heading>
              <Heading as="h2" size="md" color="whiteAlpha.900" fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
                {hero.headline}
              </Heading>
              <Text as="p" color="whiteAlpha.900" fontSize={{ base: "md", md: "lg" }} maxW="2xl">
                {hero.subheadline}
              </Text>
            </VStack>
          </Box>

          {/* SERVICE DESCRIPTION */}
          <Box py={{ base: 8, md: 12 }}>
            <Heading as="h2" size="lg" mb={4} color="gray.900" fontSize={{ base: "xl", md: "2xl" }}>
              Overview
            </Heading>
            <Text as="p" fontSize={{ base: "md", md: "lg" }} color="gray.700" lineHeight="1.8" mb={6}>
              {description.overview}
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Box>
                <Heading as="h3" size="md" mb={3} color="gray.900" fontSize="lg">
                  Target audience
                </Heading>
                <Text as="p" fontSize="md" color="gray.700" lineHeight="1.7">
                  {description.targetAudience}
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={3} color="gray.900" fontSize="lg">
                  Use cases
                </Heading>
                <VStack align="start" spacing={2}>
                  {description.useCases.map((u, i) => (
                    <HStack key={i} spacing={2} align="start">
                      <Box w="6px" h="6px" borderRadius="full" bg="blue.500" mt={2} flexShrink={0} />
                      <Text as="p" fontSize="md" color="gray.700" lineHeight="1.6">{u}</Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>
            </SimpleGrid>
          </Box>

          {/* MORE DETAILS — H2 + paragraphs */}
          {Array.isArray(detailsSections) && detailsSections.length > 0 && (
            <Box py={{ base: 8, md: 12 }}>
              <Box bg="gray.50" borderRadius="2xl" p={{ base: 5, md: 8 }}>
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 5, md: 6 }}>
                  {detailsSections.map((section, idx) => (
                    <Box
                      key={`${section.title}-${idx}`}
                      bg="white"
                      borderRadius="xl"
                      p={{ base: 5, md: 6 }}
                      borderWidth="1px"
                      borderColor="gray.200"
                      boxShadow="sm"
                    >
                      <Heading as="h2" size="md" mb={3} color="gray.900" fontSize={{ base: "lg", md: "xl" }}>
                        {section.title}
                      </Heading>
                      <VStack align="start" spacing={3}>
                        {(section.paragraphs || []).map((p, pIdx) => (
                          <Text
                            key={`${section.title}-${pIdx}`}
                            as="p"
                            fontSize={{ base: "md", md: "lg" }}
                            color="gray.700"
                            lineHeight="1.8"
                          >
                            {p}
                          </Text>
                        ))}
                      </VStack>
                    </Box>
                  ))}
                </SimpleGrid>
              </Box>
            </Box>
          )}

          {/* KEY FEATURES */}
          <Box py={{ base: 8, md: 12 }} bg="gray.50">
            <Heading as="h2" size="lg" mb={6} color="gray.900" fontSize={{ base: "xl", md: "2xl" }} textAlign="center">
              Key features
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 3, md: 4 }} maxW="4xl" mx="auto">
              {keyFeatures.map((f, i) => (
                <HStack key={i} spacing={3} align="start">
                  <Icon as={CheckCircle} color="blue.500" boxSize={5} flexShrink={0} mt={0.5} />
                  <Text as="p" fontSize={{ base: "md", md: "lg" }} color="gray.800" lineHeight="1.6">{f}</Text>
                </HStack>
              ))}
            </SimpleGrid>
          </Box>

          {/* BENEFITS */}
          <Box py={{ base: 8, md: 12 }}>
            <Heading as="h2" size="lg" mb={6} color="gray.900" fontSize={{ base: "xl", md: "2xl" }} textAlign="center">
              Benefits
            </Heading>
            <Wrap justify="center" spacing={4}>
              {benefits.map((b, i) => (
                <WrapItem key={i}>
                  <HStack
                    bg="white"
                    borderWidth="1px"
                    borderColor="gray.200"
                    borderRadius="xl"
                    px={5}
                    py={3}
                    spacing={3}
                  >
                    <Box w="2" h="2" borderRadius="full" bg="#0951d8" />
                    <Text as="p" fontSize="md" color="gray.800" fontWeight="500">{b}</Text>
                  </HStack>
                </WrapItem>
              ))}
            </Wrap>
          </Box>

          {/* VISUAL / FEATURE BLOCKS — 2-column grid */}
          <Box py={{ base: 8, md: 12 }} bg="gray.50">
            <Heading as="h2" size="lg" mb={8} color="gray.900" fontSize={{ base: "xl", md: "2xl" }} textAlign="center">
              What we offer
            </Heading>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 6, lg: 8 }}>
              {visualBlocks.map((b, i) => {
                const IconComp = LucideIcons[b.icon] || LucideIcons.Box;
                return (
                  <Box
                    key={i}
                    bg="white"
                    p={6}
                    borderRadius="xl"
                    boxShadow="md"
                    borderWidth="1px"
                    borderColor="gray.100"
                  >
                    <HStack spacing={4} align="start">
                      <Box
                        w={12}
                        h={12}
                        borderRadius="lg"
                        bgGradient="linear(to-br, blue.500, blue.700)"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Icon as={IconComp} color="white" boxSize={6} />
                      </Box>
                      <VStack align="start" spacing={1}>
                        <Heading as="h3" size="md" color="gray.900" fontSize="lg">{b.title}</Heading>
                        <Text as="p" fontSize="md" color="gray.600" lineHeight="1.6">{b.description}</Text>
                      </VStack>
                    </HStack>
                  </Box>
                );
              })}
            </SimpleGrid>
          </Box>

          {/* PROCESS — 5 STEPS */}
          <Box py={{ base: 8, md: 12 }}>
            <Heading as="h2" size="lg" mb={8} color="gray.900" fontSize={{ base: "xl", md: "2xl" }} textAlign="center">
              {process.title}
            </Heading>
            <VStack spacing={6} maxW="3xl" mx="auto">
              {process.steps.map((step, i) => (
                <HStack key={i} align="start" spacing={4} w="100%" bg="gray.50" p={4} borderRadius="xl">
                  <Box
                    w={10}
                    h={10}
                    borderRadius="full"
                    bg="#0951d8"
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontWeight="bold"
                    flexShrink={0}
                  >
                    {i + 1}
                  </Box>
                  <Text as="p" fontSize="md" color="gray.800" lineHeight="1.7">{step}</Text>
                </HStack>
              ))}
            </VStack>
          </Box>

          {/* CTAs */}
          <Box py={{ base: 8, md: 12 }} bg="gray.50" borderRadius="2xl" textAlign="center">
            <VStack spacing={6}>
              <Heading as="h2" size="md" color="gray.900" fontSize={{ base: "xl", md: "2xl" }}>
                Ready to get started?
              </Heading>
              <HStack flexWrap="wrap" justify="center" gap={4}>
                <RouterLink to={cta.primary.to}>
                  <Button
                    size="lg"
                    bg="#0951d8"
                    color="white"
                    _hover={{ bg: "#073fa6" }}
                    rightIcon={<ArrowRight size={18} />}
                  >
                    {cta.primary.label}
                  </Button>
                </RouterLink>
                <RouterLink to={cta.secondary.to}>
                  <Button
                    size="lg"
                    variant="outline"
                    colorScheme="blue"
                    borderColor="#0951d8"
                    color="#0951d8"
                    _hover={{ bg: "blue.50" }}
                  >
                    {cta.secondary.label}
                  </Button>
                </RouterLink>
              </HStack>
            </VStack>
          </Box>

          {/* PAGE FOOTER: Related services, Contact, Social */}
          <Box as="footer" pt={{ base: 10, md: 14 }} pb={4} borderTopWidth="1px" borderColor="gray.200">
            {/* Related services — horizontal carousel-like strip */}
            <Box mb={10}>
              <Heading as="h3" size="sm" mb={4} color="gray.800" fontSize="lg">
                Related services
              </Heading>
              <Box
                display="flex"
                gap={4}
                overflowX="auto"
                pb={2}
                sx={{ "&::-webkit-scrollbar": { height: "6px" }, "&::-webkit-scrollbar-thumb": { bg: "gray.300", borderRadius: "3px" } }}
              >
                {related.map((r) => (
                  <RouterLink key={r.slug} to={`/services/${r.slug}`}>
                    <Box
                      minW="200px"
                      p={4}
                      borderRadius="xl"
                      borderWidth="1px"
                      borderColor="gray.200"
                      _hover={{ borderColor: "#0951d8", bg: "blue.50" }}
                      transition="all 0.2s"
                    >
                      <Text fontWeight="600" color="gray.900" fontSize="md" noOfLines={2}>
                        {r.name}
                      </Text>
                      <Text fontSize="sm" color="gray.500" mt={1}>View details →</Text>
                    </Box>
                  </RouterLink>
                ))}
              </Box>
            </Box>

            {/* Contact / Support + Social */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <VStack align={{ base: "center", md: "start" }} spacing={3}>
                <Text fontWeight="600" color="gray.900">Contact & support</Text>
                <RouterLink to="/contact">
                  <Text color="#0951d8" _hover={{ textDecoration: "underline" }}>Get in touch</Text>
                </RouterLink>
                <Link href="tel:08200593901" color="gray.600" _hover={{ color: "#0951d8" }}>082005 93901</Link>
                <Link href="mailto:info@genius36tech.com" color="gray.600" _hover={{ color: "#0951d8" }}>info@genius36tech.com</Link>
              </VStack>
              <VStack align={{ base: "center", md: "start" }} spacing={3}>
                <Text fontWeight="600" color="gray.900">Follow us</Text>
                <HStack spacing={4}>
                  {socialLinks.map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      color="gray.600"
                      _hover={{ color: "#0951d8" }}
                    >
                      <Icon as={s.icon} boxSize={5} />
                    </Link>
                  ))}
                </HStack>
              </VStack>
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

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
import { ArrowRight, 
  CheckCircle, 
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MapPin } from "lucide-react";
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
  const [activeFaq, setActiveFaq] = useState(null);
 

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
  // Service Icons Mapping for the 9 services
const serviceIconsMap = {
  1: "Code",
  2: "Smartphone",
  3: "Globe",
  4: "ShoppingCart",
  5: "FileText",
  6: "Plug",
  7: "Palette",
  8: "CheckCircle",
  9: "Wrench"
};

  const related = getRelatedServices(service.relatedServices);
    const { 
    hero, 
    description, 
    whyChooseUs,
    services_overview,
    services: servicesList,
    benefits,
    businessImpact,
    industries,
    developmentProcess,
    methodology,
    technologies,
    clientSuccess,
    pricingModels,
    clientAchievements,
    faq,
    cta
  } = service;

  const [heroImgError, setHeroImgError] = useState(false);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };


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
    }
    //"description": service.description.overview,
    // "hasOfferCatalog": {
    //   "@type": "OfferCatalog",
    //   "name": service.name,
    //   "itemListElement": service.keyFeatures.map((feature, index) => ({
    //     "@type": "Offer",
    //     "itemOffered": {
    //       "@type": "Service",
    //       "name": feature
    //     },
    //     "position": index + 1
    //   }))
    // }
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
                {hero.headline}
              </Heading>
            </VStack>
          </Box>
           {/* SERVICE DESCRIPTION */}
           <Text as="p" fontSize={{ base: "sm", md: "md" }} color="gray.700" lineHeight="1.8" mb={6} dangerouslySetInnerHTML={{ __html: hero.subheadline }}/>
          
          {/* WHY CHOOSE US */}
          {whyChooseUs && (
            <Box py={{ base: 8, md: 12 }} bg="gray.50" borderRadius="2xl" px={{ base: 6, md: 8 }}>
              <Heading as="h2" size="lg" mb={4} color="gray.900" fontSize={{ base: "xl", md: "2xl" }}>
                {whyChooseUs.title}
              </Heading>
              <Text as="p" fontSize={{ base: "md", md: "lg" }} color="gray.600" mb={8} maxW="3xl">
                {whyChooseUs.description}
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
                {whyChooseUs.features.map((feature, index) => (
                  <HStack
                    key={index}
                    align="start"
                    spacing={3}
                    bg="white"
                    p={4}
                    borderRadius="lg"
                    boxShadow="sm"
                  >
                    <Icon as={CheckCircle} color="blue.500" boxSize={5} flexShrink={0} mt={1} />
                    <Text fontSize="md" color="gray.700" lineHeight="1.6">
                      {feature}
                    </Text>
                  </HStack>
                ))}
              </SimpleGrid>
            </Box>
          )}

          {/* SERVICES GRID */}
          {servicesList && servicesList.length > 0 && (
            <Box py={{ base: 8, md: 12 }}>
              <Heading as="h2" size="lg" mb={10} color="gray.900" fontSize={{ base: "xl", md: "2xl" }} textAlign="center">
                {services_overview.title}
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
                {servicesList.map((svc) => {
                  const iconName = serviceIconsMap[svc.id] || "Box";
                  const IconComp = LucideIcons[iconName] || LucideIcons.Box;
                  
                  return (
                    <Box
                      key={svc.id}
                      bg="white"
                      borderWidth="1px"
                      borderColor="gray.200"
                      borderRadius="xl"
                      p={6}
                      _hover={{ boxShadow: "lg", borderColor: "blue.300" }}
                      transition="all 0.3s"
                    >
                      <Box
                        w={12}
                        h={12}
                        bg="blue.100"
                        borderRadius="lg"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        mb={4}
                      >
                        <Icon as={IconComp} color="blue.600" boxSize={6} />
                      </Box>
                      <Heading as="h3" size="md" color="gray.900" mb={3} fontSize="lg">
                        {svc.title}
                      </Heading>
                      <Text as="p" fontSize="md" color="gray.600" mb={4} lineHeight="1.6">
                        {svc.description}
                      </Text>
                      <VStack align="start" spacing={2}>
                        {svc.features.map((feature, idx) => (
                          <HStack key={idx} spacing={2} align="start">
                            <Text color="blue.600" fontSize="sm" mt={1}>•</Text>
                            <Text fontSize="sm" color="gray.700">
                              {feature}
                            </Text>
                          </HStack>
                        ))}
                      </VStack>
                    </Box>
                  );
                })}
              </SimpleGrid>
            </Box>
          )}

          {/* BENEFITS */}
          {benefits && benefits.points && benefits.points.length > 0 && (
            <Box py={{ base: 8, md: 12 }} bg="blue.50" borderRadius="2xl" px={{ base: 6, md: 8 }}>
              <Heading as="h2" size="lg" mb={4} color="gray.900" fontSize={{ base: "xl", md: "2xl" }} textAlign="center">
                {benefits.title}
              </Heading>
              <Text as="p" fontSize={{ base: "md", md: "lg" }} color="gray.600" mb={10} textAlign="center" maxW="2xl" mx="auto">
                {benefits.description}
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} gap={4}>
                {benefits.points.map((point, index) => (
                  <VStack
                    key={index}
                    bg="white"
                    borderRadius="lg"
                    p={6}
                    spacing={3}
                    boxShadow="sm"
                    _hover={{ boxShadow: "md" }}
                    transition="all 0.3s"
                  >
                    <Text fontSize="4xl">{point.icon}</Text>
                    <Text fontSize="md" color="gray.700" fontWeight="500" textAlign="center">
                      {point.text}
                    </Text>
                  </VStack>
                ))}
              </SimpleGrid>
            </Box>
          )}
        
          {businessImpact && businessImpact.metrics && businessImpact.metrics.length > 0 && (
            <Box py={{ base: 8, md: 12 }} bg="gray.50" borderRadius="2xl" px={{ base: 6, md: 8 }}>
              <Heading as="h2" size="lg" mb={4} color="gray.900" fontSize={{ base: "xl", md: "2xl" }} textAlign="center"> 
                {businessImpact.title}
              </Heading>
              <Text as="p" fontSize={{ base: "md", md: "lg" }} color="gray.600" mb={10} textAlign="center" maxW="2xl" mx="auto">
                {businessImpact.description}
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
                {businessImpact.metrics.map((metric, index) => (
                  <VStack
                    key={index}
                    bg="white"
                    borderRadius="lg"
                    p={6}
                    spacing={3}
                    boxShadow="sm"
                    _hover={{ boxShadow: "md" }}
                    transition="all 0.3s"
                  >
                       <Box
                      w="80px"
                      h="80px"
                      borderRadius="full"
                      bg="blue.50"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontSize="3xl"
                      boxShadow="md"
                    >
                  {metric.icon}
                </Box>
                    <Text fontSize="3xl" color="blue.600" fontWeight="bold">
                      {metric.value}
                    </Text>
                    <Text fontSize="md" color="gray.700" textAlign="center">
                      {metric.label}
                    </Text> 
                  </VStack>
                ))}
              </SimpleGrid>
            </Box>
          )}
          {/* INDUSTRIES */}
          {industries && industries.list && industries.list.length > 0 && (
            <Box py={{ base: 8, md: 12 }}>
              <Heading as="h2" size="lg" mb={4} color="gray.900" fontSize={{ base: "xl", md: "2xl" }} textAlign="center">
                {industries.title}
              </Heading>
              <Text as="p" fontSize={{ base: "md", md: "lg" }} color="gray.600" mb={10} textAlign="center" maxW="2xl" mx="auto">
                {industries.description}
              </Text>
              <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} gap={4}>
                {industries.list.map((industry, index) => (
                  <Box
                    key={index}
                    bgGradient="linear(to-br, blue.100, white)"
                    borderWidth="1px"
                    borderColor="blue.100"
                    borderRadius="lg"
                    p={4}
                    textAlign="center"
                    _hover={{ boxShadow: "md", borderColor: "blue.300" }}
                    transition="all 0.3s"
                    
                  >
                    <Text fontSize="md" color="gray.800" fontWeight="500">
                      {industry}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          )}
          {developmentProcess && developmentProcess.steps && developmentProcess.steps.length > 0 && (
            <Box py={{ base: 8, md: 12 }} bg="blue.50" borderRadius="2xl" px={{ base: 6, md: 8 }}>
              <Heading as="h2" size="lg" mb={4} color="gray.900" fontSize={{ base: "xl", md: "2xl" }} textAlign="center">
                {developmentProcess.title}
              </Heading>
              <Text as="p" fontSize={{ base: "md", md: "lg" }} color="gray.600" mb={10} textAlign="center" maxW="2xl" mx="auto">
                {developmentProcess.description}
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                {developmentProcess.steps.map((step, index) => (
                  <VStack
                    key={index}
                    bg="white"
                    borderRadius="lg"
                    p={6}
                    spacing={3}
                    boxShadow="sm"
                    _hover={{ boxShadow: "md" }}
                    transition="all 0.3s"
                  >
                    <Box
                      w="80px"
                      h="80px"
                      borderRadius="full"
                      bg="blue.100"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontSize="3xl"
                      boxShadow="md"  
                    >
                      {step.icon}
                    </Box>
                    <Text fontSize="xl" color="gray.900" fontWeight="bold">
                      {step.title}
                    </Text>
                    <Text fontSize="md" color="gray.700" textAlign="center">
                      {step.description}
                    </Text>
                  </VStack> 
                ))}
              </SimpleGrid>
            </Box>
          )}

          {/* METHODOLOGY */}
          {methodology && methodology.steps && methodology.steps.length > 0 && (
            <Box py={{ base: 8, md: 12 }} bg="gray.50" borderRadius="2xl" px={{ base: 6, md: 8 }}>
              <Heading as="h2" size="lg" mb={4} color="gray.900" fontSize={{ base: "xl", md: "2xl" }} textAlign="center">
                {methodology.title}
              </Heading>
              <Text as="p" fontSize={{ base: "md", md: "lg" }} color="gray.600" mb={12} textAlign="center" maxW="2xl" mx="auto">
                {methodology.description}
              </Text>
              <Box position="relative" maxW="3xl" mx="auto">
                {methodology.steps.map((step, index) => (
                  <HStack key={step.step} align="start" spacing={6} mb={index < methodology.steps.length - 1 ? 8 : 0}>
                    <VStack spacing={0}>
                      <Box
                        w={12}
                        h={12}
                        bg="blue.600"
                        color="white"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="bold"
                        fontSize="lg"
                        flexShrink={0}
                      >
                        {step.step}
                      </Box>
                      {index < methodology.steps.length - 1 && (
                        <Box w="0.5" h="full" bg="blue.200" minH="50px" />
                      )}
                    </VStack>
                    <Box flex="1" pb={index < methodology.steps.length - 1 ? 4 : 0}>
                      <Heading as="h3" size="md" color="gray.900" mb={2} fontSize="lg">
                        {step.title}
                      </Heading>
                      <Text fontSize="md" color="gray.600" lineHeight="1.7">
                        {step.description}
                      </Text>
                    </Box>
                  </HStack>
                ))}
              </Box>
            </Box>
          )}

          {/* TECHNOLOGIES */}
          {technologies && technologies.categories && technologies.categories.length > 0 && (
            <Box py={{ base: 8, md: 12 }}>
              <Heading as="h2" size="lg" mb={4} color="gray.900" fontSize={{ base: "xl", md: "2xl" }} textAlign="center">
                {technologies.title}
              </Heading>
              <Text as="p" fontSize={{ base: "md", md: "lg" }} color="gray.600" mb={12} textAlign="center">
                {technologies.description}
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
                {technologies.categories.map((category, index) => (
                  <Box
                    key={index}
                    bg="white"
                    borderWidth="1px"
                    borderColor="gray.200"
                    borderRadius="lg"
                    p={6}
                  >
                    <Heading as="h3" size="sm" color="gray.900" mb={4} pb={2} borderBottomWidth="1px" borderColor="gray.200">
                      {category.category}
                    </Heading>
                    <Wrap gap={2}>
                      {category.tools.map((tool, idx) => (
                        <WrapItem key={idx}>
                          <Box
                            bg="blue.50"
                            color="blue.700"
                            px={3}
                            py={1}
                            borderRadius="full"
                            fontSize="sm"
                            fontWeight="500"
                          >
                            {tool}
                          </Box>
                        </WrapItem>
                      ))}
                    </Wrap>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          )}
          {clientSuccess && clientSuccess.achievements && clientSuccess.achievements.length > 0 && (
            <Box py={{ base: 8, md: 12 }} bg="blue.50" borderRadius="2xl" px={{ base: 6, md: 8 }}>
              <Heading as="h2" size="lg" mb={4} color="gray.900" fontSize={{ base: "xl", md: "2xl" }} textAlign="center"> 
                {clientSuccess.title}
              </Heading>
              <Text as="p" fontSize={{ base: "md", md: "lg" }} color="gray.600" mb={10} textAlign="center" maxW="2xl" mx="auto">
                {clientSuccess.description}
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
                {clientSuccess.achievements.map((desc, index) => (
                  <Box
                    key={index}
                    bg="white"
                    borderRadius="lg"
                    p={6}
                    spacing={3}
                    boxShadow="sm"
                    _hover={{ boxShadow: "md" }}
                    transition="all 0.3s"
                  >
                    <Text fontSize="md" color="gray.700" textAlign="center">
                      {desc.text}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          )}
          {/* PRICING MODELS */}
          {pricingModels && pricingModels.models && pricingModels.models.length > 0 && (
            <Box py={{ base: 8, md: 12 }} bg="gray.50" borderRadius="2xl" px={{ base: 6, md: 8 }}>
              <Heading as="h2" size="lg" mb={4} color="gray.900" fontSize={{ base: "xl", md: "2xl" }} textAlign="center">
                {pricingModels.title}
              </Heading>
              <Text as="p" fontSize={{ base: "md", md: "lg" }} color="gray.600" mb={12} textAlign="center">
                {pricingModels.description}
              </Text>
              <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
                {pricingModels.models.map((model, index) => (
                  <Box
                    key={index}
                    bg="white"
                    borderRadius="lg"
                    p={8}
                    boxShadow="sm"
                    _hover={{ boxShadow: "md" }}
                    transition="all 0.3s"
                  >
                    <Heading as="h3" size="md" color="gray.900" mb={3} fontSize="lg">
                      {model.title}
                    </Heading>
                    <Text fontSize="md" color="gray.600" lineHeight="1.7">
                      {model.description}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          )}

          {/* CLIENT ACHIEVEMENTS */}
          {clientAchievements && clientAchievements.achievements && clientAchievements.achievements.length > 0 && (
            <Box py={{ base: 8, md: 12 }} bg="blue.600" color="white" borderRadius="2xl" px={{ base: 6, md: 8 }}>
              <Heading as="h2" size="lg" mb={4} fontSize={{ base: "xl", md: "2xl" }} textAlign="center">
                {clientAchievements.title}
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="blue.100" mb={10} textAlign="center">
                {clientAchievements.description}
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
                {clientAchievements.achievements.map((achievement, index) => (
                  <VStack
                    key={index}
                    bg="blue.700"
                    borderRadius="lg"
                    p={6}
                    spacing={3}
                  >
                    <Icon as={CheckCircle} boxSize={8} />
                    <Text fontSize="md" fontWeight="500" textAlign="center">
                      {achievement}
                    </Text>
                  </VStack>
                ))}
              </SimpleGrid>
            </Box>
          )}

          {/* FAQ */}
          {faq && faq.questions && faq.questions.length > 0 && (
            <Box py={{ base: 8, md: 12 }}>
              <Heading as="h2" size="lg" mb={12} color="gray.900" fontSize={{ base: "xl", md: "2xl" }} textAlign="center">
                {faq.title}
              </Heading>
              <VStack spacing={4} maxW="4xl" mx="auto">
                {faq.questions.map((item, index) => (
                  <Box
                    key={index}
                    bg="white"
                    borderWidth="1px"
                    borderColor="gray.200"
                    borderRadius="lg"
                    overflow="hidden"
                    w="100%"
                  >
                    <Button
                      onClick={() => toggleFaq(index)}
                      w="100%"
                      justifyContent="space-between"
                      variant="ghost"
                      p={6}
                      h="auto"
                      textAlign="left"
                      _hover={{ bg: "gray.50" }}
                      borderRadius={0}
                    >
                      <Text fontSize="md" fontWeight="600" color="gray.900" pr={4}>
                        {item.question}
                      </Text>
                      <Icon
                        as={activeFaq === index ? ChevronUp : ChevronDown}
                        color={activeFaq === index ? "blue.600" : "gray.400"}
                        boxSize={5}
                        flexShrink={0}
                      />
                    </Button>
                    {activeFaq === index && (
                      <Box px={6} pb={6}>
                        <Text fontSize="md" color="gray.600" lineHeight="1.7">
                          {item.answer}
                        </Text>
                      </Box>
                    )}
                  </Box>
                ))}
              </VStack>
            </Box>
          )}

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
        </Container>
      </Box>
    </>
  );
}
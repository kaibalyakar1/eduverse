import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialTwitterCircular,
  TiSocialInstagramCircular,
  TiSocialLinkedinCircular
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All Rights Reserved" color={'white'} />
          <Heading
            fontFamily={'body'}
            size="sm"
            children="@NerdRover"
            color={'yellow.400'}
          />
        </VStack>

        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize="50"
        >
          <a href="https://twitter.com/hoola1211" target={'blank'}>
            <TiSocialTwitterCircular />
          </a>
          <a href="https://www.instagram.com/nerdroverr/?next=%2F" target={'blank'}>
            <TiSocialInstagramCircular />
          </a>
          <a href="https://github.com/kaibalyakar1" target={'blank'}>
            <DiGithub />
          </a>
          <a href="https://www.linkedin.com/in/kaibalya-kar-2a886a216/?originalSubdomain" target={'blank'}>
            <TiSocialLinkedinCircular />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;

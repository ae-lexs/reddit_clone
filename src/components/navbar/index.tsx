import { Button, Flex, Image, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import AuthModal from '../authModal';
import SearchInput from '../searchInput';

function Navbar() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image alt="redditFace" height="30px" src="/images/redditFace.svg" />
        <Image
          alt="redditText"
          display={{
            base: 'none',
            md: 'unset',
          }}
          height="46px"
          src="/images/redditText.svg"
        />
      </Flex>

      <SearchInput />

      <AuthModal isOpen={isOpen} onClose={onClose} />

      <Flex align="center" justify="center">
        <Button
          display={{ base: 'none', sm: 'flex' }}
          height="28px"
          mr={2}
          onClick={onOpen}
          variant="outline"
          width={{ base: '70px', md: '110px' }}
        >
          Log In
        </Button>
        <Button
          display={{ base: 'none', sm: 'flex' }}
          height="28px"
          mr={2}
          width={{ base: '70px', md: '110px' }}
        >
          Sign In
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;

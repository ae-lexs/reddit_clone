import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';

function SearchInput() {
  return (
    <Flex align="center" flexGrow={1} mr={2}>
      <InputGroup>
        <InputLeftElement
          // eslint-disable-next-line react/no-children-prop
          children={<SearchIcon color="gray.400" mb={1} />}
          pointerEvents="none"
        />
        <Input
          bg="gray.50"
          fontSize="10pt"
          height="34px"
          placeholder="Search Reddit"
          _placeholder={{ color: 'gray.500' }}
          _hover={{ bg: 'white', border: '1px solid', borderColor: 'blue.500' }}
          _focus={{
            outline: 'none',
            border: '1px solid',
            borderColor: 'blue.500',
          }}
        />
      </InputGroup>
    </Flex>
  );
}

export default SearchInput;

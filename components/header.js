// import Link as NextLink from  'next/link';

import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// const Links = ['Home', 'Appointments', 'Contact us'];
const Links = [{id: "Home", link: "/appointments"}]

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

function HeaderBak({user, loading}){
  return <Flex
            w="full"
            h="50px"
            bg="blue.300"
            direction="row"
            p="10px"
            >
        <Box ml="100px">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Box>

        <Box ml="50px">
          <Link href="/about">
            <a>About us</a>
          </Link>
        </Box>

  </Flex>
}

// function Header({ user, loading }) {
//   return (
//     <header>
//       <nav>
//         <ul>
//           <li>
//             <Link href="/">
//               <a>Home</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/about">
//               <a>About</a>
//             </Link>
//           </li>
//           {!loading &&
//             (user ? (
//               <>
//                 <li>
//                   <Link href="/profile">
//                     <a>Client-rendered profile</a>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/advanced/ssr-profile">
//                     <a>Server rendered profile (advanced)</a>
//                   </Link>
//                 </li>
//                 <li>
//                   <a href="/api/logout">Logout</a>
//                 </li>
//               </>
//             ) : (
//               <li>
//                 <a href="/api/login">Login</a>
//               </li>
//             ))}
//         </ul>
//       </nav>

//       <style jsx>{`
//         header {
//           padding: 0.2rem;
//           color: #fff;
//           background-color: #333;
//         }
//         nav {
//           max-width: 42rem;
//           margin: 1.5rem auto;
//         }
//         ul {
//           display: flex;
//           list-style: none;
//           margin-left: 0;
//           padding-left: 0;
//         }
//         li {
//           margin-right: 1rem;
//         }
//         li:nth-child(2) {
//           margin-right: auto;
//         }
//         a {
//           color: #fff;
//           text-decoration: none;
//         }
//         button {
//           font-size: 1rem;
//           color: #fff;
//           cursor: pointer;
//           border: none;
//           background: none;
//         }
//       `}</style>
//     </header>
//   )
// }

export default Header

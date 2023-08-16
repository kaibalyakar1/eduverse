
import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Image,
  useDisclosure,

} from '@chakra-ui/react';
import React,{useState} from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri';
import cursor from '../../../assets/images/cursor.png'
import Sidebar from '../Dashboard/Sidebar'
import CourseModal from './CourseModal';
const AdminCourses = () => {

  

  // const { loading, error, message } = useSelector(state => state.admin);

  const { isOpen, onOpen, onClose } = useDisclosure()
const coureDetailsHandler =  userId => {
  onOpen();
}

const deleteButtonHandler =  userId => {
  console.log(userId);
};
  
  const courses = [{
    _id:"asdfghjk",
    title:"React",
    category:"webdev",
    poster:{
      url:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    },
    createdBy:'Kaibalya Kar',
    views:123,
    numOfVideos:12
  }]
  return (
    <Grid 
   css={{
    cursor: `url(${cursor}), default`,
   }}
   minH={'100vh'}
   templateColumns={['1fr', '5fr 1fr']}
   >
<Box p={['0', '16']} overflowX="auto">
        <Heading
          textTransform={'uppercase'}
          children="All Users"
          my="16"
          textAlign={['center', 'left']}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All available users in the database</TableCaption>

            <Thead>
              <Tr>
              <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
            {courses &&
                courses.map(item => (
                  <Row
                   coureDetailsHandler={coureDetailsHandler}
                   deleteButtonHandler={deleteButtonHandler}
                    key={item._id}
                    item={item}
                    
                  />
                ))}
               
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModal isOpen={isOpen} onClose={onClose}/>
      </Box>
<Sidebar/>
   </Grid>
  )
}


function Row({ item, coureDetailsHandler, deleteButtonHandler, loading }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>

      <Td>
        <Image src={item.poster.url} />
      </Td>

      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>

      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => coureDetailsHandler(item._id, item.title)}
            variant={'outline'}
            color="purple.500"
            isLoading={loading}
          >
            View Lectures
          </Button>

          <Button
            onClick={() => deleteButtonHandler(item._id)}
            color={'purple.600'}
            isLoading={loading}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
export default AdminCourses;

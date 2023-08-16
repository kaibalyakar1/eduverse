import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { Navigate, useParams } from 'react-router-dom';
// import { getCourseLectures } from '../../redux/actions/course';
// import Loader from '../Layout/Loader/Loader';
import introVideo from '../../assets/videos/intro.mp4'
const CoursePage = ({ user }) => {
  const [lectureNumber, setLectureNumber] = useState(0);

//   const { lectures, loading } = useSelector(state => state.course);

const lectures = [
    {
        _id:'fghjkl',
        title:'sample',
        description: 'sample mhdgsfhdsgf',
        video: {
            url: 'fgh'
        },
    },

    {
        _id:'fghjk2',
        title:'sample2',
        description: 'sample mhdgsfhdsgf',
        video: {
            url: 'fgh'
        },
    },

    {
        _id:'fghjk2',
        title:'sample2',
        description: 'sample mhdgsfhdsgf',
        video: {
            url: 'fgh'
        },
    },
]

  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
   
        <>
          <Box>
            <video
              width={'100%'}
              controls
              controlsList="nodownload noremoteplayback"
              disablePictureInPicture
              disableRemotePlayback
              src={introVideo}
            ></video>

            <Heading
              m="4"
              children={`#${lectureNumber + 1} ${
                lectures[lectureNumber].title
              }`}
            />

            <Heading m="4" children="Description" />
            <Text m="4" children={lectures[lectureNumber].description} />
          </Box>

          <VStack>
            {lectures.map((element, index) => (
              <button
                onClick={() => setLectureNumber(index)}
                key={element._id}
                style={{
                  width: '100%',
                  padding: '1rem',
                  textAlign: 'center',
                  margin: 0,
                  borderBottom: '1px solid rgba(0,0,0,0.2)',
                }}
              >
                <Text noOfLines={1}>
                  #{index + 1} {element.title}
                </Text>
              </button>
            ))}
          </VStack>
        </>
      
    </Grid>
 );
};

export default CoursePage;

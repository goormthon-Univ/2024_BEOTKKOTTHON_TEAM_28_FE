import { Box, Flex } from '@chakra-ui/react';

// import DateChangeModal from './DateChangeModal';
import PropTypes from 'prop-types';
import { useState } from 'react';
import useToastStore from '../../stores/toastStore';

const TaskItem = ({ content, startAt, endAt }) => {
  const [isToggled, setIsToggled] = useState(false);
  // const [isEditing, setIsEditing] = useState(false);

  const { handleShowToastMessage } = useToastStore();
  //이걸로 토스트 56번 줄 참고
  console.log(handleShowToastMessage);

  const start = new Date(startAt);
  const end = new Date(endAt);

  const timeDiffInMilliseconds = end - start;
  const timeDiffInMinutes = timeDiffInMilliseconds / (1000 * 60);

  const hours = Math.floor((timeDiffInMinutes % (24 * 60)) / 60);
  const minutes = Math.floor(timeDiffInMinutes % 60);

  return (
    <Flex
      direction='column'
      gap='20px'
      paddingX='24px'
      paddingY='16px'
      background='gray.100'
      borderRadius='8px'
      onClick={() => {
        setIsToggled((prev) => !prev);
      }}
    >
      <Flex width='100%' justifyContent='space-between' alignItems='center'>
        <Box className='SubHead-xl'>
          {start.getMonth() + 1}월 {start.getDate()}일 {start.getHours()}시 {start.getMinutes()}분 ~{' '}
          {end.getMonth() + 1}월 {end.getDate()}일 {end.getHours()}시 {end.getMinutes()}분
        </Box>
        <Box className='Body-lg' color='brandBold'>
          {hours}시간 {minutes}분
        </Box>
      </Flex>
      {isToggled && (
        <Flex direction='column' alignItems='flex-end'>
          <Box width='full'>{content}</Box>
          {/* <DateChangeModal id={id} startAt={startAt} endAt={endAt} currentUser={currentUser} /> */}
        </Flex>
      )}
    </Flex>
  );
};

TaskItem.propTypes = {
  id: PropTypes.string,
  currentUser: PropTypes.object,
  content: PropTypes.string,
  startAt: PropTypes.string,
  endAt: PropTypes.string,
};

export default TaskItem;

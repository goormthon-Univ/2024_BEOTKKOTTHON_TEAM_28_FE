import { Box, Flex, Image } from '@chakra-ui/react';

import ManagerChangeModal from '../manage/ManagerChangeModal';
import { getTeamInfo } from '../../api/taskhistory';
import tomato from '../../assets/tomato.png';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const TeamProfile = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTeamInfo(id);

      setData(response);
    };

    fetchData();
  }, [id]);

  return (
    <Flex gap='4px' direction='column' w='292px' top='50px'>
      <Image src={data?.profileImage ?? tomato} alt='프로필' width='120px' />
      <Flex
        className='SubHead-xl'
        marginTop='19px'
        marginBottom='13px'
        gap='10px'
        alignItems='center'
      >
        <Box>{data?.name}</Box>
      </Flex>
      <Flex gap='8px' alignItems='center'>
        <Box
          color='primary'
          background='#E0E7EE'
          paddingX='8px'
          paddingY='4px'
          borderRadius='14px'
          border='1px solid #475569'
        >
          팀 개설일
        </Box>
        <Box>{data?.startAt}</Box>
      </Flex>
      <ManagerChangeModal />
    </Flex>
  );
};

export default TeamProfile;

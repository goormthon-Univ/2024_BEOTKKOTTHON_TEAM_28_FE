import { Box, Flex } from '@chakra-ui/react';

import { MemberList } from '../component/common/organisms';
import { TaskItem } from '../component/manage';
import { TeamProfile } from '../component/taskhistory';
import { getMemberList } from '../api/taskhistory';
import getTeamTimeManage from '../api/teamhistory/getTeamTimeManage';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import NonData from '../component/common/mocules/NonData';

const ManagePage = () => {
  const [currentUser, setCurrentUser] = useState();
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser?.memberId) return;
      const response = await getTeamTimeManage(currentUser.memberId);
      setData(response);
    };

    fetchData();
  }, [id, currentUser]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMemberList(id);

      setCurrentUser({
        name: response?.memberList[0].nickname,
        profile: response?.memberList[0].profileImage,
        part: response?.memberList[0].part,
        memberId: response?.memberList[0].memberId,
      });
    };

    fetchData();
  }, [id]);

  const handleCurrentUser = ({ name, profile, part, memberId }) => {
    setCurrentUser({ name, profile, part, memberId });
  };

  return (
    <main>
      <Flex gap='27px' minHeight='calc(100vw - 400px)' mt='68px' pb='200px' justifyContent='center'>
        <Flex direction='column' left='325px' position='fixed' gap='70px'>
          <TeamProfile />
          <MemberList
            isWhite={true}
            currentUser={currentUser}
            handleCurrentUser={handleCurrentUser}
          />
        </Flex>
        <Flex direction='column' marginLeft='327px' w='922px' gap='42px'>
          <Flex direction='column'>
            <Box className='Display-md'>{currentUser?.name}님의 업무시간</Box>
            <Box className='Display-sm'>팀원들의 업무 시간을 확인해 주세요!</Box>
          </Flex>
          <Flex direction='column' gap='26px'>
            {data?.map((el) => (
              <TaskItem
                key={el.id}
                id={el.id}
                currentUser={currentUser}
                content={el.content}
                startAt={el.startAt}
                endAt={el.endAt}
              />
            ))}
            {(!data || data?.length === 0) && (
              <NonData extraText='서버에 디스코드 봇을 추가하여 팀원들과 소통해보세요!' />
            )}
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
};

export default ManagePage;

import { Button, Flex, Img, Text, useBreakpointValue } from '@chakra-ui/react';

import landing1 from '../assets/landing1.png';
import landing2 from '../assets/landing2.png';
import landing3 from '../assets/landing3.png';
import landing4 from '../assets/landing4.png';
import landing5 from '../assets/landing5.png';

const LandingPage = () => {
  const mainImgWidth = useBreakpointValue({ base: '500vw', md: '776px' });
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const align = useBreakpointValue({ base: 'center', md: 'end' });
  const padding = useBreakpointValue({ base: '50px', md: '0' });
  const gap = useBreakpointValue({ base: '50px', md: '0' });

  return (
    <main>
      <Flex w='100%' justify='center' align='center' direction='column' width='100%'>
        <Flex
          bg='#ECFDF5'
          direction='column'
          pt='91px'
          pb='101px'
          justify='center'
          align='center'
          width='100%'
          gap='28px'
        >
          <Text className='Headline-lg'>STARTUP VALLEY</Text>
          <Text className='Display-lg' textAlign='center'>
            팀원들이{' '}
            <Text as='span' color='#648B7B'>
              별 일
            </Text>{' '}
            없는지,
            <br />
            스타트업{' '}
            <Text as='span' color='#648B7B'>
              밸리
            </Text>
            로 확인하세요!
          </Text>
          <Button
            bg='#059669'
            color='white'
            w='252px'
            onClick={() => {
              window.open(
                'https://discord.com/api/oauth2/authorize?client_id=1214574551820800040&permissions=8&scope=bot',
                '_blank',
              );
            }}
          >
            디스코드 봇 추가하기
          </Button>
        </Flex>
        <Flex mt='120px' mb='158.59px'>
          <Flex direction={flexDirection}>
            <Flex direction='column' padding={padding} w='472px' gap='28px' justify='center'>
              <Text className='Display-lg'>
                <Text as='span' color='#648B7B'>
                  매번, 팀원의 작업을 <br />
                  번거롭게 확인하지 말고 <br />
                </Text>
                스타트업밸리를 통해서 <br />
                작업을 기록해보세요
              </Text>
              <Text className='Subline-xl'>
                팀원 뿐만 아니라, 여러분들의 작업 기록 또한 <br />
                AI를 통해 요약해 줄거에요!
              </Text>
            </Flex>
            <Img w={mainImgWidth} src={landing1} />
          </Flex>
        </Flex>
        <Flex direction='column' gap='48px'>
          <Text className='Display-lg' textAlign='center'>
            <Text as='span' color='#648B7B'>
              업무에 메인 사람이 아니라 <br />{' '}
            </Text>
            메인 업무에만 집중하실 수 있도록 이런 기능을 제공해요!
          </Text>
          <Flex direction={flexDirection} align={align} justify='center' gap={gap}>
            <Img w='302.942px' h='301.732px' mr='32.27px' src={landing2} />
            <Img w='329.016px' h='335.412px' src={landing3} />
            <Img w='349.112px' h='316.072px' ml='-12px' mb='-14.34px' src={landing4} />
            <Img w='307.113px' h='301.732px' src={landing5} />
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
};

export default LandingPage;

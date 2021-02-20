import MainContainer from '../Components/MainContainer';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <MainContainer>
        <Image
          src="/just-like-me.png"
          height={500}
          width={562}
        >

        </Image>
      </MainContainer>
    </div>
  )
}

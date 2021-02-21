import MainContainer from '../Components/MainContainer';
import Image from 'next/image';
import { Component } from 'react';

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  static getInitialProps = ({ query }) => {
    return { query };
  }

  componentDidMount = () => {
    if(this.props.query['email-sent'] !== undefined) {
      alert('Contact sent successfully');
    }
  }
  render() {
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
}


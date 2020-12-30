import React, { useState } from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';

const Container = Styled.SafeAreaView`
    flex: 1;
`;

const TitleContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TitleLabel = Styled.Text`
    font-size: 24px;
`;

const CountContainer = Styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
`;
const CountLabel = Styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

const ButtonContainer = Styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

interface Props {
  title?: string;
  initValue: number;
}
// State의 타입을 미리 정의하고 컴포넌트 선언 시 해당 타입을 지정해준다.
interface State {
  count: number;
  error: Boolean;
}


class Counter extends React.Component<Props, State> {
  // 생성자 함수에서 State의 초기 값을 설정한다.
   // 항상 super(props);를 사용하여 부모 컴포넌트(React.Component)의 생성자 함수를 호출해야 한다.
   // 생성자 함수에서만 this.state를 사용하여 State의 값을 직접 지정할 수 있다.
  constructor(props: Props) {
    super(props);
    console.log('constructor');

    this.state = {
      count: props.initValue,
      error: false,
    }
  }

  render() {
    console.log('render');
    const { title } = this.props;
    const { count, error } = this.state;
    return (
      <Container>
        {!error && (
          <>
            {title && (
              <TitleContainer>
                <TitleLabel>{title}</TitleLabel>
              </TitleContainer>
            )}
            <CountContainer>
              <CountLabel>{count}</CountLabel>
            </CountContainer>
            <ButtonContainer>
              <Button 
                iconName = "plus"
                onPress = {() => this.setState({ count: count + 1 })}
              />
              <Button
                iconName = "minus"
                onPress = {() => this.setState({ count: count - 1})}
              />
            </ButtonContainer>
            </>
           )}
          </Container>
        );
  } 

  static getDerivedStateFromProps(nextProps: Props, prevState: State)  {
    console.log('getDerivedStateFromProps');

    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    console.log('getSnapshotBeforeUpdate');
    return {
      testData: true,
    };
  }

  componentDidUpdate(preProps: Props, prevState: State, snapshot: ISNapshot) {
    console.log('componentDidUpdate');
  }

  shouldComponentUpDate(nextProps: Props, nextState: State) {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidCatch(erro: Error, info: React.ErrorInfo) {
    this.setState({
      error: true,
    });
  }
}
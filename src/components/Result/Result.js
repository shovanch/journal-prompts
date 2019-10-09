/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import axios from 'axios';

import './Result.scss';
import Content from 'components/Content/Content';
import Loading from 'components/Loading/index';
import { API_URL } from 'config';

class Result extends Component {
  state = {
    prompt: '',
    isLoading: false,
    prompts: {}
  };

  fetchPrompts = () => {
    this.setState({ isLoading: true });
    axios.get(API_URL).then(res => {
      const { data } = res;
      this.setState({ prompts: data, isLoading: false }, () =>
        this.getPrompt()
      );
    });
  };

  getPrompt = () => {
    const { prompts } = this.state;
    const { match } = this.props;
    const id = match.params.promptId;
    const promptArray = prompts[`${id}`];
    const promptNumber = Math.floor(Math.random() * promptArray.length);
    const prompt = promptArray[promptNumber];
    this.setState({ prompt });
  };

  componentDidMount = () => {
    this.fetchPrompts();
  };

  render() {
    const { isLoading, prompt } = this.state;

    return (
      <Content title="Your prompt is,">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="result">
            <h2 className="result__text">
              {prompt}
              <button onClick={() => this.getPrompt()}>CLICK</button>
            </h2>
          </div>
        )}
      </Content>
    );
  }
}

export default Result;

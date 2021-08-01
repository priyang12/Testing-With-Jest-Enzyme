import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Btn from './btn';
import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/postAction';

const Mainsection = ({ title, image, desc, temparr }) => {
  const dispatch = useDispatch();
  const getPostsOnClick = () => {
    dispatch(getPosts());
  };
  if (!title || !image || !desc || !temparr) {
    return null;
  }
  const configbtn = {
    buttonText: 'Get posts',
    emitEvent: getPostsOnClick,
  };
  return (
    <Fragment>
      <div className='col'>
        <h1 data-test='titleID'>{title}</h1>
        <div className='showcase'>
          <div className='desc'>
            <img src={image} alt='Display' />
            <div className='list'>
              <p>{desc}</p>
              <p>{desc}</p>
              <p>{desc}</p>
              <p>{desc}</p>
              <p>{desc}</p>
              <Btn {...configbtn} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Mainsection.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  temparr: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
    })
  ),
};

export default Mainsection;

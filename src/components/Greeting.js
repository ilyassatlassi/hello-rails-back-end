import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetings } from '../redux/greetingsSlice';

export default function Random() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <div>
      <h1>To you my dear I would say: </h1>
      <h3>{greeting.greeting}</h3>
    </div>
  );
}

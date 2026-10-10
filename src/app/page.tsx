import Banner from '@/components/Homepage/Banner';
import WorkoutCards from '@/components/Homepage/WorkoutCards';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <WorkoutCards></WorkoutCards>
    </div>
  );
};

export default page;
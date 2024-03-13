import React from 'react';
import Popularmovieslanding from '../categoriesforlanding/popularmovieslanding';
import Topratedmovieslanding from '../categoriesforlanding/topratedmovieslanding';

const Movielistlanding = () => {
  return (
    <main className="min-h-screen relative z-10 bg-cover bg-center"
          style={{backgroundImage: `url(${require('../../assets/Images/upcoming-bg.png')})`}}>
      <section className="py-8">
        <Popularmovieslanding />
      </section>
      <section className="py-8">
        <Topratedmovieslanding />
      </section>
    </main>
  );
};

export default Movielistlanding;

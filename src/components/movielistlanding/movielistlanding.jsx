import React from 'react';
import Popularmovieslanding from '../categoriesforlanding/popularmovieslanding';
import Topratedmovieslanding from '../categoriesforlanding/topratedmovieslanding';
import Upcominglanding from '../categoriesforlanding/upcominglanding';

const Movielistlanding = () => {
  return (
    <main className="min-h-screen relative z-10 bg-cover bg-center"
          style={{backgroundImage: `url(${require('../../assets/Images/upcoming-bg.png')})`}}>
      <section >
        <Upcominglanding/>
      </section>
      <section>
        <Popularmovieslanding />
      </section>
      <section>
        <Topratedmovieslanding />
      </section>
    </main>
  );
};

export default Movielistlanding;

const Privalumai = () => {
  return (
    <div className='container'>
      <h1 className='heading'>Vacations CMS privalumai</h1>
      <div className='flex_container'>
        <div className='flex_left order2'>
          <div className='step'>
            <div className='step_number'>
              <span>1</span>
            </div>
            <div className='step_number_margin'>
              <h2>Intuityvi navigacijos sistema</h2>
              <div className='description'>Paprastas svetainės valdymas bei maketavimas, komponentų ir infoblokų išdėstymas primena puzzle dėlionę. </div>
            </div>
          </div>
        </div>

        <div className='flex_right order1'>
          <img src='./images/panel1.png' alt='Ekranas' />
        </div>

        <div className='flex_left order3'>
          <img src='./images/panel2.png' alt='Šablonai' />
        </div>
        <div className='flex_right order4'>
          <div className='step'>
            <div className='step_number'>
              <span>2</span>
            </div>
            <div className='step_number_margin'>
              <h2>Dvidešimt keturi paruošti šablonai</h2>
              <div className='description'>Būsimos svetainės išvaizdą galima rinktis iš dvidešimt keturių jau sukurtų šablonų.</div>
            </div>
          </div>
        </div>
        <div className='flex_left order6'>
          <div className='step'>
            <div className='step_number'>
              <span>3</span>
            </div>
            <div className='step_number_margin'>
              <h2>Pinigų taupymas</h2>
              <div className='description'>
                Nereikalingos svetainės talpinimo paslaugos. Vadovaujantis instrukcija, svetainę galima susikurti patiems, be brangiai apmokamo programuotojų darbo, be HTML ir
                JavaScript žinių.
              </div>
            </div>
          </div>
        </div>
        <div className='flex_right order5'>
          <img src='./images/panel3.png' width='421' height='378' alt='Kiaulė taupyklė' />
        </div>
        <div className='flex_left order7'>
          <img src='./images/panel4.png' alt='Itaka' />
        </div>
        <div className='flex_right order8'>
          <div className='step'>
            <div className='step_number'>
              <span>4</span>
            </div>
            <div className='step_number_margin'>
              <h2>Integruoti Itaka Lietuva pasiūlymai</h2>
              <div className='description'>Sistemoje automatiškai integruoti Itaka Lietuva kelionių organizatoriaus pasiūlymai. Būtina turėti sutartį su Itaka Lietuva.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privalumai;

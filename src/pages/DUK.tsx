import Accordion from '../Accordion';

const Duk = () => {
  return (
    <div className='container'>
      <h1 className='heading'>DUK</h1>
      <div className='flex_container'>
        <div className='flex_left'>
          <Accordion title='Esame nauja turizmo įmonė. Nuo ko pradėti?'>
            <p>
              Jums reikia užregistruoti domeną ir užsakyti vietą serveryje elektroniniam paštui. Domenas reikalingas tam, kad Vacations CMS sistemoje sukurta Jūsų svetainė turėtų
              unikalų interneto adresą bei galėtumėte turėti el.pašto dėžutes su unikalia Jūsų pasirinkta galūne. Pasitikrinti ar domenas laisvas, užsakyti elektroninio pašto
              talpinimo paslaugą bei užsakyti domeną galite šiuo adresu: www.serveriai.lt. Užsakyti svetainės talpinimo paslaugą nereikia. Svetainė ir visa jos informacija
              talpinama MerlinX serveryje.
            </p>
          </Accordion>
          <Accordion title='Ar gausiu Vacations CMS sistemos instrukciją?'>
            <p>
              Kiekvienas klientas užsakęs Vacations CMS sistemą, gauna detalią sistemos naudojimo instrukciją. Vadovaujantis šia instrukcija, susikurti svetainę yra visai
              nesudėtinga. Papildomai savo klientams elektroniniu paštu, mes teikiame nemokamą pagalbą visais Vacations CMS sistemos administravimo klausimais.
            </p>
          </Accordion>
          <Accordion title='Ar Jūs galite sukurti svetainę už mane?'>
            <p>Taip. Jeigu Jūs neturite laiko, mes galime Jums sukurti svetainę, pagal Jūsų pageidavimus ir sistemos galimybes, už sutartinę kainą, per 3 - 5 d.d.</p>
          </Accordion>
          <Accordion title='Ar Jūs galite būsimai svetainei sukurti logotipą?'>
            <p>Taip. Už sutartinę kainą mes galime Jums sukurti kelis logotipo variantus su skirtingomis spalvomis, iš kurių Jūs išsirinksite Jums patinkantį.</p>
          </Accordion>
        </div>
        <div className='flex_right'>
          <Accordion title='Ar galima pakeisti pasirinkto šablono spalvas?'>
            <p>
              Taip. Sistemoje esančiame "Svetainės stilius" modulyje, automatiškai galima pakeisti visas šablono elementų spalvas, pasirinkus vieną iš siūlomų tarpusavyje suderintų
              spalvų rinkinių. Taip pat papildomai, kiekvienam šablono elementui galima priskirti savo pasirinktą spalvą
            </p>
          </Accordion>
          <Accordion title='Ar sistemoje yra priemonės skirtos svetainės optimizavimui?'>
            <p>
              Svetainės optimizavimo reikmėms, Vacations CMS sistemoje yra specialiai sukurtas SEO modulis. Šiame modulyje galima pasirinkti įvairias funkcijas bei nustatyti
              pageidaujamą būsimos svetainės optimizavimo lygį.
            </p>
          </Accordion>
          <Accordion title='Kaip į svetainę įkelti kelionių organizatorių pasiūlymus?'>
            <p>
              Jeigu turite sutartį su Itaka Lietuva arba Uab Alfaturas, svetainėje automatiškai galima atvaizduoti Itaka Lietuva kelionių organizatoriaus pasiūlymus. Jeigu turite
              sutartis su kitais kelionių organizatoriais(Tez Tour, Novaturas ir t.t.), jų paieškos sistemų ifreimus galima patalpinti atskiruose puslapiuose, sukuriant svetainėje
              atitinkamus meniu punktus.
            </p>
          </Accordion>
          <Accordion title='Ar Vacations CMS sistema yra mokama?'>
            <p>
              Taip. Už naudojimąsi Vacations CMS sistema mokamas mėnesinis mokestis. Pasirašius metinę sutartį, sistema 2 mėnesius galima naudotis nemokamai. Į mėnesinį mokestį
              įskaičiuota: svetainės talpinimo MerlinX serveryje, naujų sistemos funkcijų kūrimo, Itaka Lietuva kelionių pasiūlymų integravimo bei Lenkijos kelionių organizatorių
              pasiūlymų integravimo sistemoje paslaugos. Norint savo svetainėje atvaizduoti Lenkijos kelionių organizatorių pasiūlymus, reikia pasirašyti sutartį su Uab Alfaturas
              ir Uab Kelvita.
            </p>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default Duk;

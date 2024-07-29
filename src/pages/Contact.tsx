import { HiPhone, HiOutlineMail } from 'react-icons/hi';
import { useState, ChangeEvent, FormEvent } from 'react';
import { FormData } from '../types';

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    telefonas: '',
    message: ''
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const dataToSubmit = {
      ...formData,
      access_key: '3098785a-34ad-4d57-bb03-906efb2a062d'
    };

    const json = JSON.stringify(dataToSubmit);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log('Success', res);
      setFormData({
        name: '',
        email: '',
        telefonas: '',
        message: ''
      });
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className='contact'>
      <div className='container color'>
        <div className='title'>Kontaktai</div>
        <div className='flex_container_contact'>
          <div>
            <div className='contact_text'>Uab MERLINX</div>
            <div className='contact_text'>Įmonės kodas: 302645974</div>
            <div className='contact_text'>Adresas: Parko g. 15-2, LT-68218 Marijampolė</div>
            <div className='contact_text'>Sąskaitos Nr: LT40 7044 0600 0771 5728</div>
            <div className='contact_text'>Banko kodas 70440, AB SEB bankas</div>
            <div className='contact_row'>
              <div className='icon'>
                <HiPhone />
              </div>
              <div className='text'>+370 655 35396</div>
            </div>
            <div className='contact_row'>
              <div className='icon'>
                <HiOutlineMail />
              </div>
              <div className='text'>
                <img src='/images/po1.png' alt='el' />
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={onSubmit}>
              <div className='forms_group'>
                <input type='text' name='name' className='forms_control' placeholder='Vardas' required value={formData.name} onChange={handleChange} />
              </div>
              <div className='forms_group'>
                <input type='email' name='email' className='forms_control' placeholder='El. paštas' required value={formData.email} onChange={handleChange} />
              </div>
              <div className='forms_group'>
                <input type='number' name='telefonas' className='forms_control' placeholder='Telefonas' required value={formData.telefonas} onChange={handleChange} />
              </div>
              <div className='forms_group'>
                <textarea name='message' rows={5} className='forms_control' placeholder='Komentarai' required value={formData.message} onChange={handleChange}></textarea>
              </div>
              <button type='submit' className='btn'>
                Užsakyti
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

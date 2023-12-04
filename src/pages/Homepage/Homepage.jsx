import './homepage.css';

import Form from '../../components/Form/Form';
import Modal from '../../components/Modal/Modal';

function Home() {
  return (
    <div className='contenair'>
      <a href='/employee-list'>View Current Employees</a>
      <h2>Create Employee</h2>
      <Form />
      <Modal />
    </div>
  );
}

export default Home;

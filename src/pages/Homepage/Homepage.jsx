import './homepage.css';

import Form from '../../components/Form/Form';

function Home() {
  return (
    <div className='contenair'>
      <a href='/employee-list'>View Current Employees</a>
      <h2>Create Employee</h2>
      <Form />
    </div>
  );
}

export default Home;

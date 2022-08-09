import {Clients} from '../components/Clients';
// import {Projects} from '../components/Projects';
import {AddClient as AddClientModal} from '../components/AddClient';
// import {AddProject as AddProjectModal} from '../components/AddProject';

export const  Home = () => {
  return (
    <>
      <div className='d-flex gap-3 mb-4'>
        <AddClientModal />
        {/* <AddProjectModal /> */}
      </div>
      {/* <Projects /> */}
      <hr />
      <Clients />
    </>
  );
}
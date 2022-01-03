import './App.css';
import DatePickerInput from '../DatePicker/DatePicker';
import Loader from 'react-loader-spinner'
import Picture from '../Picture/Picture';
import useFetch from '../../utils/hooks/useFetch';
import NasaService from '../../utils/services/NasaService';
import { useAppContext } from '../../context/AppContext';
import { DEVENV } from '../../config';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import "react-datepicker/dist/react-datepicker.css";

function App() {

  const { state } = useAppContext();
  const endpoint = DEVENV ? NasaService.devGetPicture : NasaService.getPicture;
  const { data, loading, error } = useFetch(endpoint, state.date);  

  if (error) {
    return <ErrorMessage msg={error} />
  }

  return (
    <>
      {loading ? (
        <div data-testid="loading-div" className="loader">
          <Loader type="Bars" color="gray" height={120} width={120} timeout={3000} />
        </div>
      ) : (
        <div data-testid="app-container">
          <div className="datepicker-container">
          <DatePickerInput />
          </div>
          <div className="picture-container">
          <p className="image-title">{data.title}</p>
          <Picture image={data.url} alt={data.title} />
          </div>
      </div>
      )}
    </>
  );
}

export default App;

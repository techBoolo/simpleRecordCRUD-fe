import { useSelector } from 'react-redux'

const RecordList = (props) => {

  const { records } = useSelector(state => state.record)

  return (
    <>
      list of records      
    </>
  );
};

export default RecordList

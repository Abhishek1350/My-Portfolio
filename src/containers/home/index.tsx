import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../../services/reducers/personalDetails";

export const Home = () => {
  const dispatch = useDispatch();
  const personalDetails = useSelector((state: any) => state.personalDetails);

  useEffect(() => {
    console.log(personalDetails)
    dispatch(fetchDetails());
    console.log(personalDetails)
  }, [dispatch]);

  if (personalDetails.loading) {
    return <div>Loading...</div>
  }

  if (personalDetails.error) {

    return <div>{personalDetails.error}</div>
  }

  if (personalDetails.data.length === 0) {
    return <div>No </div>
  }


  return (
    <div>
      {
        personalDetails.data.length
      }
    </div>
  )
}
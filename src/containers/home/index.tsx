import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersonalDetails } from "../../services/actions/personalDetails";

export const Home = () => {
  const dispatch = useDispatch();
  const personalDetails = useSelector((state: any) => state.projects);

  const state = useSelector((state: any) => state);

  useEffect(() => {
    // dispatch(getPersonalDetails('*[_type == "blogs"]'));
    console.log(state)
  }, [dispatch]);

  if (personalDetails.loading) {
    return <div>Loading..</div>
  }

  if (personalDetails.error) {

    return <div>{personalDetails.error}</div>
  }

  if (personalDetails.data.length === 0) {
    return <div>No Data</div>
  }


  return (
    <div>
      {
        personalDetails.data.map((item: any) => {
          return (
            <div key={item.id}>
              <p>{item.project_name}</p>
              <p>{item.project_stack}</p>
              <p>{item.project_url}</p>
            </div>
          )
        })
      }
    </div>
  )
}
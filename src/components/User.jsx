

// import { AiOutlineMail } from "react-icons/ai";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { AiOutlineLinkedin } from "react-icons/ai";

import KitchenSinkExample from "./KitchenSinkExample";

const User = () => {
 
  return (
    <div className="container text-center d-flex justify-content-center mt-5">
      <KitchenSinkExample/>
    </div>
  );
};
export default User;

// <div className="container text-center mt-4 border bg-danger border-dark ">
//   <div className="">
//     <h1>
//       {name?.title} {name?.first} {name?.last}
//     </h1>
//   </div>

//   <img className="rounded-circle" src={picture?.large} alt="" />
//   <p>{email} </p>
//   <div className="justify-content-evenly  ">
//     <AiOutlineMail />
//     <BsFillTelephoneFill />
//     <AiOutlineLinkedin />
//   </div>
//   <h5>{new Date(dob?.date).toLocaleDateString("tr-TR")}</h5>
//   <button className="btn btn-primary" onClick={getUser}>
//     Get User
//   </button>
// </div>

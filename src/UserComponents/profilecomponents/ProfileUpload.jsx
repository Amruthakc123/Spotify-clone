// import React, { useState, useContext } from "react";
// import "./profile.css";
// import { toast } from "react-toastify";
// import { AuthContextApi } from "../../Apis/AuthContext";
// import firebase from "firebase";

// const ProfileUpload = () => {
//   let AUTH = useContext(AuthContextApi);

//   let [state, setState] = useState({
//     profile_photo: "",
//     loading: false,
//     barStatus: false,
//     progress: 0,
//   });
//   let { loading, profile_photo } = state;
//   let handleChange = e => {
//     setState({ ...state, [e.target.name]: e.target.files[0] });
//   };

//   let handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       setState({ loading: true });
//       let { name } = profile_photo;
//       let uploadTask = firebase
//         .storage()
//         .ref(`user-photo ${name}`)
//         .put(profile_photo);
//       toast.success("successfully photo uploaded");
//       // firebase events
//       uploadTask.on(
//         "state_changed",
//         snapShot => {
//           // progress bar
//         },
//         error => {
//           // error handling
//           // toast.error(error.message);
//         },
//         async () => {
//           //  completion of upload task
//           let DownloadUrl = await firebase
//             .storage()
//             .ref("user-photo")
//             .child(name)
//             .getDownloadURL();
//           AUTH.updateProfile({ photoURL: DownloadUrl });
//         }
//       );
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <section id="photo_upload_block">
//       <article>
//         <div className="_block">
//           <h2 style={{ margin: "16px" }}>Upload Photo</h2>
//           <form onSubmit={handleSubmit}>
//             <input type="file" name="profile_photo" onChange={handleChange} />
//             <button className="btn">
//               {loading === true ? (
//                 <i classNamre="fas fa-spinner" style={{ color: "black" }}></i>
//               ) : (
//                 "upload"
//               )}
//             </button>
//           </form>
//         </div>
//       </article>
//     </section>
//   );
// };

// export default ProfileUpload;

import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import "./profile.css";
import firebase from "firebase";
import { AuthContextApi } from "./../../Apis/AuthContext";

const ProfileUpload = () => {
  let AUTH = useContext(AuthContextApi);
  let [state, setState] = useState({
    profile_photo: "",
    loading: false,
    barStatus: false,
    progress: 0,
  });

  let { loading, profile_photo } = state;
  let handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.files[0] });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      //   console.log(profile_photo);
      let { name } = profile_photo;
      let uploadTask = firebase
        .storage()
        .ref(`user-photo/${name}`)
        .put(profile_photo);
      //   console.log(photo);
      toast.success("Successfully uploaded");
      // firebase events

      uploadTask.on(
        "state_changed",
        snapShot => {
          //progress bar
        },
        error => {},
        async () => {
          //   completion of upload task
          let DownloadUrl = await firebase
            .storage()
            .ref("user-photo")
            .child(name)
            .getDownloadURL();
          AUTH.updateProfile({ photoURL: DownloadUrl });
        }
      );
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <section id="photo_upload_block">
      <article>
        <div className="_block">
          <h2>Upload Photo</h2>
          <form onSubmit={handleSubmit}>
            <input type="file" name="profile_photo" onChange={handleChange} />
            <button>
              {loading === true ? <i className="fas fa-spinner"></i> : "Upload"}
            </button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default ProfileUpload;

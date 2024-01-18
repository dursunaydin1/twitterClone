import React from "react";
import { auth, db, storage } from "../firebase/firebaseConfig";
import profileP from "../assets/default-pp.png";
import { BsCardImage } from "react-icons/bs";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const TweetForm = () => {
  const tweetsCol = collection(db, "tweets");

  const uploadImage = async (image) => {
    if (image == null) return null;
    const storageRef = ref(storage, `${new Date().getTime() + image.name}`);
    const snapshot = await uploadBytes(storageRef, image);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = e.target[0].value;
    const image = e.target[1].files[0];
    const url = await uploadImage(image);

    if (!content) {
      toast.info("Lütfen mesaj alanını doldurun!");
      return;
    }

    await addDoc(tweetsCol, {
      content,
      imageContent: url,
      createdAt: serverTimestamp(),
      user: {
        name: auth.currentUser.displayName,
        profilePic: auth.currentUser.photoURL
          ? auth.currentUser.photoURL
          : profileP,
      },
      likes: [],
    });
    e.target[0].value = "";
    e.target[1].value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 p-4 w-full">
      <img
        className="rounded-full h-[40px]"
        src={auth?.currentUser?.photoURL ? auth.currentUser.photoURL : profileP}
      />
      <div className="w-full">
        <input
          placeholder="Neler Oluyor?"
          className="w-full mx-2 text-gray-400 outline-none bg-black placeholder:text-lg"
          type="text"
        />
        <div className="flex items-center justify-between">
          <div className=" relative rounded-full cursor-pointer transition duration-200 hover:bg-white/10 p-3">
            <BsCardImage />
            <input
              className="absolute w-full h-full left-0 top-0 opacity-0"
              type="file"
            />
          </div>
          <button className="bg-blue-600 py-2 px-4 rounded-full hover:bg-blue-500">
            Tweetle
          </button>
        </div>
      </div>
    </form>
  );
};

export default TweetForm;

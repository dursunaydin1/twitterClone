import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import profileP from "../assets/default-pp.png";
import { collection, getDocs, query, where } from "firebase/firestore";

const Aside = () => {
  const [following, setFollowing] = useState([]);
  const [popularTopics, setPopularTopics] = useState([]);
  const [recentTweets, setRecentTweets] = useState([]);

  useEffect(() => {
    // Kullanıcının takip ettiği kişileri al
    const getFollowing = async () => {
      const followingRef = collection(db, "following");
      const followingSnapshot = await getDocs(
        query(followingRef, where("follower", "==", auth.currentUser.uid))
      );

      const followingList = followingSnapshot.docs.map(
        (doc) => doc.data().following
      );
      setFollowing(followingList);
    };

    // Popüler konuları al (Örnek: Sadece sabit bir liste)
    const popularTopicsList = ["#ReactJS", "#WebDevelopment", "#Firebase"];
    setPopularTopics(popularTopicsList);

    // Son tweet'leri al (Örnek: Sadece sabit bir liste)
    const recentTweetsList = [
      { user: "User1", content: "Lorem ipsum dolor sit amet." },
      { user: "User2", content: "Consectetur adipiscing elit." },
      {
        user: "User3",
        content:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ];
    setRecentTweets(recentTweetsList);

    // Takip ettikleri ve popüler konuları almak için asenkron işlemleri başlat
    getFollowing();
  }, []);

  return (
    <aside className="w-[300px] flex flex-col items-center bg-black text-white p-4">
      <img
        className="rounded-full w-20 mb-4"
        src={
          auth?.currentUser?.photoURL ? auth?.currentUser?.photoURL : profileP
        }
        alt="Profil Resmi"
      />
      <h2 className="text-xl font-bold mb-2">
        {auth?.currentUser?.displayName}
      </h2>
      <p className="text-gray-400">
        @{auth?.currentUser?.displayName?.toLowerCase()}
      </p>

      <div className="flex items-center mt-4">
        <p className="font-bold mr-2">Takipçiler:</p>
        <span className="text-gray-400">500</span>
      </div>

      <div className="flex items-center mt-2">
        <p className="font-bold mr-2">Takip Edilenler:</p>
        <span className="text-gray-400">{following.length}</span>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">Popüler Konular</h3>
        <ul className="list-disc pl-4">
          {popularTopics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">Son Tweet'ler</h3>
        <ul>
          {recentTweets.map((tweet, index) => (
            <li key={index}>
              <strong>{tweet.user}:</strong> {tweet.content}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Aside;

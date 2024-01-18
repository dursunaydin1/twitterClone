import logo from "../assets/twitter-x-logo.png";
import google from "../assets/google.png";
import { useState } from "react";
import { useFormik } from "formik";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [signUp, setSignUp] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    try {
      // Eğer signUp true ise, yeni bir kullanıcı oluşturuluyor
      if (signUp) {
        await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        // Başarılı kayıt işlemi sonrasında kullanıcı bilgilendiriliyor
        toast.success("Hesabınız oluşturuldu.", { autoClose: 2000 });
      } else {
        // Eğer signUp false ise, kullanıcı giriş yapmaya çalışıyor
        await signInWithEmailAndPassword(auth, values.email, values.password);
        // Başarılı giriş işlemi sonrasında kullanıcı bilgilendiriliyor
        toast.success("Giriş yapıldı.", { autoClose: 2000 });
      }

      // Başarılı giriş veya kayıt işleminden sonra sayfayı yönlendir
      navigate("/home");
    } catch (error) {
      // Hata durumunda hata kodu ile kullanıcıya bilgi verilir
      toast.error("İşlem sırasında bir hata oluştu: " + error.code, {
        autoClose: 2000,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });

  const handleGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // signInWithPopup işlemi başarılı olduğunda buraya gelecek
      // navigate('/home'); // Eğer navigate fonksiyonu doğru bir şekilde tanımlıysa, bu satırı kullanabilirsiniz.
    } catch (error) {
      toast.error("Google ile giriş yaparken bir hata oluştu: " + error.code, {
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="bg-zinc-800 h-[100vh] grid place-items-center">
      <div className="bg-black text-white flex flex-col gap-10 px-32 py-16 rounded-lg">
        <div className="flex justify-center">
          <img className="h-[60px]" src={logo} />
        </div>
        <h1 className="font-bold text-center text-xl">Twitter'a giriş yap</h1>
        <div
          onClick={handleGoogle}
          className="flex gap-3 items-center bg-white text-black py-2 px-10 rounded-full cursor-pointer hover:bg-gray-200"
        >
          <img className="h-[20px]" src={google} />
          <span className="whitespace-nowrap">Google ile giriş yap</span>
        </div>

        <form onSubmit={formik.handleSubmit} className="flex flex-col">
          <label>Email:</label>
          <input
            className="text-black rounded p-2 shadow-white mt-3"
            type="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <label className="mt-5">Password</label>
          <input
            className="text-black rounded p-2 shadow-white mt-3"
            type="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <button
            disabled={formik.isSubmitting}
            type="submit"
            className="bg-white text-black mt-10 rounded-full p-1 font-bold hover:bg-gray-300 transition-all"
          >
            {signUp ? "Kaydol" : "Giriş Yap"}
          </button>
          <p className="to-gray-500 mt-5">
            <span>{signUp ? "Hesabınız Var mı ?" : "Hesabınız Yok mu?"}</span>
            <button
              onClick={() => setSignUp(!signUp)}
              type="button"
              className="mx-3 text-blue-500 disabled:bg-gray-700"
            >
              {signUp ? "Giriş Yap" : "Kaydol"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Auth;

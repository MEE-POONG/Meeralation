import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
// import setLanguage from 'next-translate/setLanguage';
// import useTranslation from 'next-translate/useTranslation';
import { useState } from "react";
// import { Cookies } from 'react-cookie';
import Swal from "sweetalert2";
// import { encrypt } from 'utils/encrypt';

// import i18nConfig from '../i18n.json';

// const { locales } = i18nConfig;

// const serverUrl = process.env.NEXT_PUBLIC_TOKEN_API;

// set up cookies
// const cookies = new Cookies();

export default function SignIn() {
  //   const { t, lang } = useTranslation('signin');
  const [loginForm, setLoginForm] = useState({
    login: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const router = useRouter();

  const onLoginClick = async (e) => {
    const { login } = loginForm;
    e.preventDefault();
    // console.log('Login called');
    // const password = encrypt(loginForm.password);
    // var data = JSON.stringify({
    //   login,
    //   password,
    // });
    // console.log(data);
    // var data = {
    //   method: "post",
    //   url: "/api/user/",

    //   data: data,
    // };
    const getUserData = async () => {
      try {
        const data = await axios.get("/api/user/");
        setLoginForm(data?.data);
        router.push("/");
      } catch {
        Swal.fire({
          title: "Error!",
          text: "login or password incorrect",
          icon: "error",
          confirmButtonText: "Close",
        });
      }
      await getUserData();
    };

    return (
      <div key="sing-in">
        <div className="h-1/2 flex items-center justify-center pt-11 py-2 px-4 sm:px-6 lg:px-8 bg-img ">
          <div className="max-w-md w-full space-y-8 mt-10 ">
            <figure className="rounded-xl p-8 shadow-xl bg-white">
              <div className="pt-6 space-y-4">
                <h2 className="mt-5 text-center text-2xl font-extrabold text-gray-900">
                  {/* {t('title')} */}
                </h2>
                <blockquote>
                  <form className="mt-8 space-y-6" onSubmit={onLoginClick}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                      <div className="relative text-gray-600 focus-within:text-gray-400 space-y-6 ">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#007AC9"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </span>
                        <input
                          id="username"
                          name="username"
                          type="username"
                          autoComplete="username"
                          value={loginForm.login}
                          required
                          className="appearance-none rounded-16 pl-10 block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          //   placeholder={t('username')}
                          onChange={(e) =>
                            setLoginForm({
                              login: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="relative text-gray-600 focus-within:text-gray-400 space-y-6">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#007AC9"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                            />
                          </svg>
                        </span>
                        <span className="absolute inset-y-0 margin-unset right-0 flex items-center pr-2">
                          {show ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              onClick={() => setShow(false)}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              onClick={() => setShow(true)}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                              />
                            </svg>
                          )}
                        </span>

                        <input
                          id="password"
                          name="password"
                          type={show ? "text" : "password"}
                          autoComplete="current-password"
                          value={loginForm.password}
                          required
                          className="appearance-none rounded-16 pl-10 block w-full px-3 py-2 border border-gray-300  text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          //   placeholder={t('password')}
                          onChange={(e) =>
                            setLoginForm({
                              ...loginForm,
                              password: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="items-center text-center justify-center">
                      <div className="text-sm ">
                        <a
                          href="#"
                          className="font-medium text-gray-600 hover:text-gray-500"
                        >
                          {/* {t('forgot-password')} */}
                        </a>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        {/* {t('sign-in')} */}
                      </button>
                    </div>
                  </form>
                </blockquote>
                <hr />
                <figcaption className="font-medium mt-1">
                  <div className="text-center">
                    {/* {t('no-account')} */}
                    <a
                      href="#"
                      onClick={() => {
                        router.push("/register");
                      }}
                      className="font-medium text-red-700 hover:text-red-00 text-sm pl-2"
                    >
                      {/* {t('sign-up')} */}
                    </a>
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
        <div className="min-h-1/2-screen flex items-center justify-center  py-2 pt-10 sm:px-6 lg:px-8 relative">
          <div className="max-w-md space-y-8 block">
            <Image
              src="https://www.pdcable.com/wp-content/uploads/2019/08/cropped-%E0%B8%AA%E0%B8%B2%E0%B8%A2%E0%B9%84%E0%B8%9F%E0%B8%9F%E0%B9%89%E0%B8%B2-%E0%B9%80%E0%B8%9F%E0%B9%89%E0%B8%A5%E0%B8%9B%E0%B8%AA%E0%B9%8C-%E0%B8%94%E0%B8%AD%E0%B8%94%E0%B9%8C%E0%B8%88-1-1024x402.jpg"
              alt="Workflow"
              // layout="fill" // required
              width={310}
              height={110}
            />
          </div>
        </div>
      </div>
    );
    //   });
  };
}

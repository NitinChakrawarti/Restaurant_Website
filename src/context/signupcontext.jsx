// import React, { createContext, useContext, useState } from "react";

// // Create the context
// const Signupcontext = createContext();

// // Custom hook to use the Signupcontext
// export const useSignupcontext = () => useContext(Signupcontext);

// const SignupcontextProvider = ({ children }) => {
//   const [user, setUser] = useState(true); // False by default for sign-up

//   return (
//     <Signupcontext.Provider value={{ user, setUser }}>
//       {children}
//     </Signupcontext.Provider>
//   );
// };

// export default SignupcontextProvider;



import { createContext } from "react";

export const userContext = createContext(false);
export const userName = createContext(false);
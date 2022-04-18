import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const profileContext = createContext();
const { Provider } = profileContext;

export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState({});

    const setProfileData = (data) => {
        setProfile(data);
        toast.success("Perfil actualizado", { autoClose: 2000 });
    }

    const profileProviderValue = {
        profile,
        setProfileData
    };

    return (
        <Provider value={profileProviderValue}>
            {children}
        </Provider>
    )
}

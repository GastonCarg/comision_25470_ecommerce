import { Box, Modal, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import validator from "validator";
import { toast } from "react-toastify";

import { profileContext } from "./ProfileProvider";
import { CustomButton } from "./CustomButton";

const betweenButtons = {
    margin: "0em 0.5em 0em 0em"
}

const containerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column"
};

const textFieldComponent = {
    padding: "0.5em",
}

const Form = ({openModal, closeModal}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("549");
    const [isNameValid, setIsNameValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPhoneValid, setIsPhoneValid] = useState(false);

    const { setProfileData, profile } = useContext(profileContext);

    useEffect(() => {
        if (profile.name) setName(profile.name);
        if (profile.email) setEmail(profile.email);
        if (profile.phone) setPhone(profile.phone);
    }, [profile]);

    const handleChangeName = (e) => {
        if (validator.isAlpha(e.target.value, "es-ES", {ignore: " "})) setIsNameValid(false);
        else setIsNameValid(true);
        setName(e.target.value);
    }

    const handleChangeEmail = (e) => {
        if (validator.isEmail(e.target.value)) setIsEmailValid(false);
        else setIsEmailValid(true);
        setEmail(e.target.value);
    }

    const handleChangePhone = (e) => {
        if (validator.isMobilePhone(e.target.value, "es-AR", {strictMode: false})) setIsPhoneValid(false);
        else setIsPhoneValid(true);
        setPhone(e.target.value);
    }

    const submit = () => {
        if (isNameValid || isEmailValid || isPhoneValid || validator.isEmpty(name) || validator.isEmpty(email) || validator.isEmpty(phone)) {
            toast.error("Por favor, complete todos los campos correctamente", { autoClose: 2000 });
            return;
        }

        const profileData = {
            name,
            email,
            phone
        };

        setProfileData(profileData);
        closeModal();
    }

    return (
        <Modal open={openModal} onClose={closeModal}>
            <Box component={"form"} sx={containerStyle} autoComplete="off">
                <TextField error={isNameValid} id="name-and-lastname" label="Nombre y Apellido" placeholder="Ej: Gastón Cargnelutti" variant="outlined" required onChange={handleChangeName} sx={textFieldComponent} value={name}></TextField>
                <TextField error={isPhoneValid} id="phone" label="Teléfono" variant="outlined" placeholder="Ej: 5493525475894" required onChange={handleChangePhone} sx={textFieldComponent} value={phone}></TextField>
                <TextField error={isEmailValid} id="email" label="Mail" variant="outlined" placeholder="Ej: gaston@example.com" required onChange={handleChangeEmail} sx={textFieldComponent} value={email}></TextField>
                <Box className="buttons-container">
                    <CustomButton variant="outlined" onClick={closeModal} sx={betweenButtons}> Cerrar </CustomButton>
                    <CustomButton variant="outlined" onClick={submit} sx={betweenButtons}> Confirmar </CustomButton>
                </Box>
            </Box>
        </Modal>
    )
}

export default Form